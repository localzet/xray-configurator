import {InboundConfig, JsonValue, OutboundConfig, XrayConfig} from './xray';

export type ValidationSeverity = 'error' | 'warning';

export interface ValidationIssue {
    path: string;
    severity: ValidationSeverity;
    message: string;
    messageRu: string;
}

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const shortIdPattern = /^[0-9a-f]*$/i;

export function validateConfig(config: XrayConfig): ValidationIssue[] {
    const issues: ValidationIssue[] = [];
    const outboundTags = new Set((config.outbounds ?? []).map((outbound) => outbound.tag).filter(Boolean));
    const inboundTags = new Set((config.inbounds ?? []).map((inbound) => inbound.tag).filter(Boolean));

    (config.inbounds ?? []).forEach((inbound, index) => {
        validateInbound(inbound, index, issues);
    });

    (config.outbounds ?? []).forEach((outbound, index) => {
        validateOutbound(outbound, index, issues);
    });

    validateTags('inbounds', [...inboundTags], config.inbounds?.length ?? 0, issues);
    validateTags('outbounds', [...outboundTags], config.outbounds?.length ?? 0, issues);
    validateRouting(config, outboundTags, inboundTags, issues);

    return issues;
}

function validateInbound(inbound: InboundConfig, index: number, issues: ValidationIssue[]): void {
    const path = `inbounds[${index}]`;

    if (!inbound.tag) {
        addIssue(issues, `${path}.tag`, 'error', 'Inbound tag is required.', 'Inbound tag обязателен.');
    }

    if (inbound.protocol !== 'tun' && !isValidPortValue(inbound.port)) {
        addIssue(issues, `${path}.port`, 'error', 'Inbound port must be a number from 1 to 65535 or an Xray port range string.', 'Inbound port должен быть числом 1-65535 или строкой диапазона Xray.');
    }

    if ((inbound.protocol === 'vless' || inbound.protocol === 'vmess') && Array.isArray(inbound.settings.clients)) {
        inbound.settings.clients.forEach((client, clientIndex) => {
            if (isRecord(client) && typeof client.id === 'string' && !uuidPattern.test(client.id)) {
                addIssue(issues, `${path}.settings.clients[${clientIndex}].id`, 'error', 'Client id must be a valid UUID.', 'Client id должен быть валидным UUID.');
            }
        });
    }

    if (inbound.protocol === 'vless' && inbound.settings.decryption !== 'none') {
        addIssue(issues, `${path}.settings.decryption`, 'error', 'VLESS inbound decryption must be "none".', 'Для VLESS inbound decryption должен быть "none".');
    }

    const stream = inbound.streamSettings;
    if (stream?.security === 'reality') {
        if (inbound.protocol !== 'vless' && inbound.protocol !== 'trojan') {
            addIssue(issues, `${path}.streamSettings.security`, 'warning', 'REALITY is normally used with VLESS or Trojan.', 'REALITY обычно используют с VLESS или Trojan.');
        }

        const reality = stream.realitySettings ?? {};
        if (!reality.privateKey) {
            addIssue(issues, `${path}.streamSettings.realitySettings.privateKey`, 'error', 'REALITY privateKey is required.', 'Для REALITY обязателен privateKey.');
        }

        if (!reality.dest) {
            addIssue(issues, `${path}.streamSettings.realitySettings.dest`, 'error', 'REALITY dest is required.', 'Для REALITY обязателен dest.');
        }

        const shortIds = Array.isArray(reality.shortIds) ? reality.shortIds : [];
        if (shortIds.length === 0) {
            addIssue(issues, `${path}.streamSettings.realitySettings.shortIds`, 'warning', 'At least one REALITY shortId is recommended.', 'Рекомендуется указать хотя бы один REALITY shortId.');
        }

        shortIds.forEach((shortId, shortIdIndex) => {
            if (typeof shortId !== 'string' || shortId.length > 16 || shortId.length % 2 !== 0 || !shortIdPattern.test(shortId)) {
                addIssue(issues, `${path}.streamSettings.realitySettings.shortIds[${shortIdIndex}]`, 'error', 'shortId must be an even-length hex string up to 16 chars.', 'shortId должен быть hex-строкой чётной длины до 16 символов.');
            }
        });
    }

    if (stream?.security === 'tls') {
        const certificates = stream.tlsSettings?.certificates;
        if (!Array.isArray(certificates) || certificates.length === 0) {
            addIssue(issues, `${path}.streamSettings.tlsSettings.certificates`, 'warning', 'TLS inbounds usually need at least one certificate.', 'Для TLS inbound обычно нужен хотя бы один сертификат.');
        }
    }

    if (stream?.network === 'grpc' && stream.security === 'reality') {
        addIssue(issues, `${path}.streamSettings`, 'warning', 'REALITY over gRPC is uncommon; verify support in your target Xray version.', 'REALITY поверх gRPC встречается редко; проверьте поддержку в целевой версии Xray.');
    }
}

function validateOutbound(outbound: OutboundConfig, index: number, issues: ValidationIssue[]): void {
    const path = `outbounds[${index}]`;

    if (!outbound.tag) {
        addIssue(issues, `${path}.tag`, 'error', 'Outbound tag is required.', 'Outbound tag обязателен.');
    }

    if (outbound.proxySettings?.tag && outbound.streamSettings?.sockopt?.dialerProxy) {
        addIssue(issues, `${path}.proxySettings`, 'error', 'proxySettings.tag conflicts with sockopt.dialerProxy.', 'proxySettings.tag конфликтует с sockopt.dialerProxy.');
    }
}

function validateRouting(config: XrayConfig, outboundTags: Set<string>, inboundTags: Set<string>, issues: ValidationIssue[]): void {
    const rules = config.routing?.rules;
    if (!Array.isArray(rules)) {
        return;
    }

    rules.forEach((rule, index) => {
        if (!isRecord(rule)) return;
        const outboundTag = rule.outboundTag;
        const inboundTag = rule.inboundTag;

        if (typeof outboundTag === 'string' && outboundTag && !outboundTags.has(outboundTag)) {
            addIssue(issues, `routing.rules[${index}].outboundTag`, 'error', `Unknown outbound tag "${outboundTag}".`, `Неизвестный outbound tag "${outboundTag}".`);
        }

        if (Array.isArray(inboundTag)) {
            inboundTag.forEach((tag) => {
                if (typeof tag === 'string' && !inboundTags.has(tag)) {
                    addIssue(issues, `routing.rules[${index}].inboundTag`, 'warning', `Unknown inbound tag "${tag}".`, `Неизвестный inbound tag "${tag}".`);
                }
            });
        }
    });
}

function validateTags(section: string, uniqueTags: string[], totalCount: number, issues: ValidationIssue[]): void {
    if (uniqueTags.length !== totalCount) {
        addIssue(issues, section, 'error', `${section} tags must be unique and non-empty.`, `Tags в ${section} должны быть уникальными и непустыми.`);
    }
}

function isValidPortValue(port: InboundConfig['port']): boolean {
    if (typeof port === 'number') {
        return Number.isInteger(port) && port >= 1 && port <= 65535;
    }

    return typeof port === 'string' && port.trim().length > 0;
}

function isRecord(value: JsonValue | undefined): value is Record<string, JsonValue> {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function addIssue(issues: ValidationIssue[], path: string, severity: ValidationSeverity, message: string, messageRu: string): void {
    issues.push({path, severity, message, messageRu});
}
