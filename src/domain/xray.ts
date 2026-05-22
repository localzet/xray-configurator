export type Language = 'en' | 'ru';

export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

export interface XrayConfig {
    log?: Record<string, JsonValue>;
    api?: Record<string, JsonValue>;
    dns?: Record<string, JsonValue>;
    routing?: Record<string, JsonValue>;
    policy?: Record<string, JsonValue>;
    inbounds?: InboundConfig[];
    outbounds?: OutboundConfig[];
    stats?: Record<string, JsonValue>;
    fakeDns?: Record<string, JsonValue>;
    metrics?: Record<string, JsonValue>;
    observatory?: Record<string, JsonValue>;
    burstObservatory?: Record<string, JsonValue>;
    geodata?: Record<string, JsonValue>;
    version?: Record<string, JsonValue>;
}

export interface InboundConfig {
    tag: string;
    listen?: string;
    port?: number | string;
    protocol: InboundProtocol;
    settings: Record<string, JsonValue>;
    streamSettings?: StreamSettings;
    sniffing?: Record<string, JsonValue>;
}

export interface OutboundConfig {
    tag: string;
    protocol: OutboundProtocol;
    settings: Record<string, JsonValue>;
    sendThrough?: string;
    targetStrategy?: string;
    streamSettings?: StreamSettings;
    proxySettings?: Record<string, JsonValue>;
    mux?: Record<string, JsonValue>;
}

export type InboundProtocol =
    | 'vless'
    | 'vmess'
    | 'trojan'
    | 'shadowsocks'
    | 'socks'
    | 'mixed'
    | 'http'
    | 'dokodemo-door'
    | 'wireguard'
    | 'hysteria'
    | 'tun';

export type OutboundProtocol =
    | 'freedom'
    | 'blackhole'
    | 'dns'
    | 'vless'
    | 'vmess'
    | 'trojan'
    | 'shadowsocks'
    | 'socks'
    | 'http'
    | 'wireguard'
    | 'hysteria'
    | 'loopback';

export type TransportProtocol =
    'raw'
    | 'tcp'
    | 'ws'
    | 'grpc'
    | 'xhttp'
    | 'splithttp'
    | 'kcp'
    | 'httpupgrade'
    | 'hysteria';
export type SecurityProtocol = 'none' | 'tls' | 'reality';

export interface StreamSettings {
    network?: TransportProtocol;
    security?: SecurityProtocol;
    tcpSettings?: Record<string, JsonValue>;
    rawSettings?: Record<string, JsonValue>;
    wsSettings?: Record<string, JsonValue>;
    grpcSettings?: Record<string, JsonValue>;
    xhttpSettings?: Record<string, JsonValue>;
    splithttpSettings?: Record<string, JsonValue>;
    kcpSettings?: Record<string, JsonValue>;
    httpupgradeSettings?: Record<string, JsonValue>;
    hysteriaSettings?: Record<string, JsonValue>;
    tlsSettings?: Record<string, JsonValue>;
    realitySettings?: Record<string, JsonValue>;
    sockopt?: Record<string, JsonValue>;
}

export interface FieldDefinition {
    key: string;
    label: string;
    labelRu: string;
    help: string;
    helpRu: string;
    kind: 'text' | 'number' | 'switch' | 'select' | 'tags' | 'textarea' | 'json' | 'password';
    options?: string[];
    placeholder?: string;
    secret?: boolean;
}

export interface ProtocolDefinition {
    value: string;
    label: string;
    server: boolean;
    help: string;
    helpRu: string;
    fields: FieldDefinition[];
    defaultSettings: Record<string, JsonValue>;
}

export const inboundProtocols: ProtocolDefinition[] = [
    {
        value: 'vless',
        label: 'VLESS',
        server: true,
        help: 'Lightweight modern inbound. Commonly used with REALITY or TLS and Vision flow.',
        helpRu: 'Современный лёгкий inbound. Часто используется с REALITY или TLS и Vision flow.',
        defaultSettings: {
            clients: [{id: crypto.randomUUID(), flow: 'xtls-rprx-vision', email: 'user@example.com'}],
            decryption: 'none'
        },
        fields: [
            field('clients', 'Clients JSON', 'Клиенты JSON', 'Array of VLESS users: id, flow, email, level.', 'Массив пользователей VLESS: id, flow, email, level.', 'json'),
            field('decryption', 'Decryption', 'Decryption', 'For VLESS inbound this is normally "none".', 'Для VLESS inbound обычно "none".', 'select', ['none']),
            field('fallbacks', 'Fallbacks JSON', 'Fallbacks JSON', 'Optional fallback destinations for unsupported traffic.', 'Опциональные fallback-направления для неподходящего трафика.', 'json'),
        ],
    },
    {
        value: 'vmess',
        label: 'VMess',
        server: true,
        help: 'Legacy encrypted user protocol with UUID clients.',
        helpRu: 'Устаревающий шифрованный протокол с UUID-клиентами.',
        defaultSettings: {clients: [{id: crypto.randomUUID(), alterId: 0, email: 'user@example.com'}]},
        fields: [field('clients', 'Clients JSON', 'Клиенты JSON', 'Array of VMess users: id, alterId, security, email.', 'Массив пользователей VMess: id, alterId, security, email.', 'json')],
    },
    {
        value: 'trojan',
        label: 'Trojan',
        server: true,
        help: 'Password-based TLS-friendly protocol.',
        helpRu: 'Протокол с паролями, обычно поверх TLS/REALITY.',
        defaultSettings: {clients: [{password: randomToken(24), email: 'user@example.com'}]},
        fields: [
            field('clients', 'Clients JSON', 'Клиенты JSON', 'Array of Trojan users: password, email, level, flow.', 'Массив пользователей Trojan: password, email, level, flow.', 'json'),
            field('fallbacks', 'Fallbacks JSON', 'Fallbacks JSON', 'Optional fallback destinations.', 'Опциональные fallback-направления.', 'json'),
        ],
    },
    {
        value: 'shadowsocks',
        label: 'Shadowsocks',
        server: true,
        help: 'Password and method based encrypted proxy.',
        helpRu: 'Шифрованный прокси на основе пароля и метода.',
        defaultSettings: {method: '2022-blake3-aes-128-gcm', password: randomToken(24), network: 'tcp,udp'},
        fields: [
            field('method', 'Method', 'Метод', 'Cipher method supported by Xray.', 'Метод шифрования, поддерживаемый Xray.', 'select', ['2022-blake3-aes-128-gcm', '2022-blake3-aes-256-gcm', 'aes-128-gcm', 'aes-256-gcm', 'chacha20-poly1305', 'none']),
            field('password', 'Password', 'Пароль', 'Server password. For 2022 methods use a strong generated value.', 'Пароль сервера. Для методов 2022 используйте сильное значение.', 'password'),
            field('network', 'Network', 'Сеть', 'Allowed networks.', 'Разрешённые сети.', 'select', ['tcp', 'udp', 'tcp,udp']),
            field('clients', 'Clients JSON', 'Клиенты JSON', 'Optional multi-user server clients.', 'Опциональные клиенты для multi-user режима.', 'json'),
        ],
    },
    {
        value: 'socks',
        label: 'SOCKS',
        server: true,
        help: 'SOCKS inbound, useful locally or behind trusted networks.',
        helpRu: 'SOCKS inbound, обычно для локальной или доверенной сети.',
        defaultSettings: {auth: 'noauth', udp: true, ip: '127.0.0.1'},
        fields: [
            field('auth', 'Auth', 'Аутентификация', 'Authentication mode.', 'Режим аутентификации.', 'select', ['noauth', 'password']),
            field('accounts', 'Accounts JSON', 'Accounts JSON', 'Users for password auth: user/pass.', 'Пользователи для password auth: user/pass.', 'json'),
            field('udp', 'UDP', 'UDP', 'Enable UDP forwarding.', 'Включить UDP forwarding.', 'switch'),
            field('ip', 'UDP bind IP', 'UDP bind IP', 'IP announced for UDP associate.', 'IP для UDP associate.', 'text'),
        ],
    },
    {
        value: 'http',
        label: 'HTTP',
        server: true,
        help: 'HTTP proxy inbound.',
        helpRu: 'HTTP proxy inbound.',
        defaultSettings: {allowTransparent: false},
        fields: [
            field('accounts', 'Accounts JSON', 'Accounts JSON', 'Optional users: user/pass.', 'Опциональные пользователи: user/pass.', 'json'),
            field('allowTransparent', 'Transparent', 'Transparent', 'Accept transparent HTTP proxy traffic.', 'Принимать transparent HTTP proxy трафик.', 'switch'),
        ],
    },
    {
        value: 'dokodemo-door',
        label: 'Dokodemo-door',
        server: true,
        help: 'Transparent proxy or port forwarding inbound.',
        helpRu: 'Inbound для transparent proxy или port forwarding.',
        defaultSettings: {network: 'tcp,udp', followRedirect: false},
        fields: [
            field('address', 'Target address', 'Адрес назначения', 'Forward traffic to this address.', 'Перенаправлять трафик на этот адрес.', 'text'),
            field('port', 'Target port', 'Порт назначения', 'Forward traffic to this port.', 'Перенаправлять трафик на этот порт.', 'number'),
            field('network', 'Network', 'Сеть', 'Accepted network.', 'Принимаемая сеть.', 'select', ['tcp', 'udp', 'tcp,udp']),
            field('followRedirect', 'Follow redirect', 'Follow redirect', 'Read original destination from transparent proxy redirect.', 'Читать исходное назначение при transparent proxy.', 'switch'),
            field('userLevel', 'User level', 'Уровень', 'Policy level.', 'Уровень policy.', 'number'),
        ],
    },
    {
        value: 'wireguard',
        label: 'WireGuard',
        server: true,
        help: 'WireGuard inbound mode.',
        helpRu: 'WireGuard inbound режим.',
        defaultSettings: {secretKey: randomBase64Url(32), peers: []},
        fields: [
            field('secretKey', 'Private key', 'Приватный ключ', 'WireGuard private key.', 'Приватный ключ WireGuard.', 'password'),
            field('peers', 'Peers JSON', 'Peers JSON', 'Array of WireGuard peers.', 'Массив WireGuard peers.', 'json'),
            field('mtu', 'MTU', 'MTU', 'Interface MTU.', 'MTU интерфейса.', 'number'),
        ],
    },
    {
        value: 'hysteria',
        label: 'Hysteria',
        server: true,
        help: 'UDP-based Hysteria inbound.',
        helpRu: 'UDP-based Hysteria inbound.',
        defaultSettings: {clients: [{auth: randomToken(18)}]},
        fields: [
            field('version', 'Version', 'Версия', 'Hysteria protocol version.', 'Версия протокола Hysteria.', 'select', ['1', '2']),
            field('clients', 'Clients JSON', 'Клиенты JSON', 'Users with auth, level and email.', 'Пользователи с auth, level и email.', 'json'),
        ],
    },
    {
        value: 'tun',
        label: 'TUN',
        server: true,
        help: 'TUN interface inbound.',
        helpRu: 'Inbound через TUN-интерфейс.',
        defaultSettings: {interfaceName: 'tun0', mtu: 1500},
        fields: [
            field('interfaceName', 'Interface', 'Интерфейс', 'TUN interface name.', 'Имя TUN-интерфейса.', 'text'),
            field('mtu', 'MTU', 'MTU', 'Interface MTU.', 'MTU интерфейса.', 'number'),
            field('autoRoute', 'Auto route', 'Auto route', 'Let Xray manage routes where supported.', 'Позволить Xray управлять маршрутами, где поддерживается.', 'switch'),
        ],
    },
];

export const outboundProtocols: ProtocolDefinition[] = [
    {
        value: 'freedom',
        label: 'Freedom / Direct',
        server: true,
        help: 'Direct outbound to the target network.',
        helpRu: 'Прямой outbound в целевую сеть.',
        defaultSettings: {domainStrategy: 'AsIs'},
        fields: [
            field('domainStrategy', 'Domain strategy', 'Domain strategy', 'How domains are resolved before dialing.', 'Как резолвить домены перед подключением.', 'select', ['AsIs', 'UseIP', 'UseIPv4', 'UseIPv6', 'ForceIP', 'ForceIPv4', 'ForceIPv6']),
            field('redirect', 'Redirect', 'Redirect', 'Optional host:port redirect.', 'Опциональный redirect host:port.', 'text'),
            field('fragment', 'Fragment JSON', 'Fragment JSON', 'Optional packet fragmentation settings.', 'Опциональные настройки фрагментации пакетов.', 'json'),
            field('noises', 'Noises JSON', 'Noises JSON', 'Optional noise packets.', 'Опциональные noise packets.', 'json'),
        ],
    },
    {
        value: 'blackhole',
        label: 'Blackhole / Block',
        server: true,
        help: 'Drops traffic, optionally with HTTP response.',
        helpRu: 'Отбрасывает трафик, опционально с HTTP-ответом.',
        defaultSettings: {},
        fields: [field('response', 'Response JSON', 'Response JSON', 'Optional response, for example {"type":"http"}.', 'Опциональный ответ, например {"type":"http"}.', 'json')],
    },
    {
        value: 'dns',
        label: 'DNS',
        server: true,
        help: 'Sends traffic to built-in DNS app.',
        helpRu: 'Передаёт трафик во встроенный DNS app.',
        defaultSettings: {},
        fields: [field('network', 'Network', 'Сеть', 'DNS outbound network.', 'Сеть DNS outbound.', 'select', ['tcp', 'udp'])],
    },
    {
        value: 'vless',
        label: 'VLESS client',
        server: false,
        help: 'Outbound VLESS client, useful for chaining.',
        helpRu: 'VLESS outbound для цепочек.',
        defaultSettings: {
            vnext: [{
                address: 'example.com',
                port: 443,
                users: [{id: crypto.randomUUID(), encryption: 'none', flow: 'xtls-rprx-vision'}]
            }]
        },
        fields: [field('vnext', 'VNext JSON', 'VNext JSON', 'Servers array: address, port, users.', 'Массив серверов: address, port, users.', 'json')],
    },
    {
        value: 'trojan',
        label: 'Trojan client',
        server: false,
        help: 'Outbound Trojan client.',
        helpRu: 'Trojan outbound.',
        defaultSettings: {servers: [{address: 'example.com', port: 443, password: randomToken(24)}]},
        fields: [field('servers', 'Servers JSON', 'Servers JSON', 'Trojan remote servers.', 'Удалённые Trojan серверы.', 'json')],
    },
    {
        value: 'shadowsocks',
        label: 'Shadowsocks client',
        server: false,
        help: 'Outbound Shadowsocks client.',
        helpRu: 'Shadowsocks outbound.',
        defaultSettings: {
            servers: [{
                address: 'example.com',
                port: 8388,
                method: '2022-blake3-aes-128-gcm',
                password: randomToken(24)
            }]
        },
        fields: [field('servers', 'Servers JSON', 'Servers JSON', 'Shadowsocks servers.', 'Shadowsocks серверы.', 'json')],
    },
    {
        value: 'socks',
        label: 'SOCKS client',
        server: false,
        help: 'Outbound SOCKS client.',
        helpRu: 'SOCKS outbound.',
        defaultSettings: {servers: [{address: '127.0.0.1', port: 1080}]},
        fields: [field('servers', 'Servers JSON', 'Servers JSON', 'SOCKS remote servers.', 'Удалённые SOCKS серверы.', 'json')],
    },
    {
        value: 'http',
        label: 'HTTP client',
        server: false,
        help: 'Outbound HTTP proxy client.',
        helpRu: 'HTTP proxy outbound.',
        defaultSettings: {servers: [{address: '127.0.0.1', port: 8080}]},
        fields: [field('servers', 'Servers JSON', 'Servers JSON', 'HTTP proxy servers.', 'HTTP proxy серверы.', 'json')],
    },
    {
        value: 'wireguard',
        label: 'WireGuard client',
        server: false,
        help: 'Outbound WireGuard client.',
        helpRu: 'WireGuard outbound.',
        defaultSettings: {secretKey: randomBase64Url(32), peers: []},
        fields: [
            field('secretKey', 'Private key', 'Приватный ключ', 'WireGuard private key.', 'Приватный ключ WireGuard.', 'password'),
            field('peers', 'Peers JSON', 'Peers JSON', 'WireGuard peers.', 'WireGuard peers.', 'json'),
            field('address', 'Address', 'Адрес', 'Local interface addresses.', 'Локальные адреса интерфейса.', 'tags'),
        ],
    },
    {
        value: 'loopback',
        label: 'Loopback',
        server: true,
        help: 'Routes traffic back to an inbound tag.',
        helpRu: 'Возвращает трафик на inbound tag.',
        defaultSettings: {inboundTag: ''},
        fields: [field('inboundTag', 'Inbound tag', 'Inbound tag', 'Target inbound tag.', 'Целевой inbound tag.', 'text')],
    },
];

export const transportFields: Record<TransportProtocol, FieldDefinition[]> = {
    raw: [
        field('acceptProxyProtocol', 'Accept PROXY protocol', 'Accept PROXY protocol', 'Accept HAProxy PROXY protocol header.', 'Принимать HAProxy PROXY protocol header.', 'switch'),
        field('header', 'Header JSON', 'Header JSON', 'TCP/raw header obfuscation settings.', 'Настройки маскировки TCP/raw header.', 'json'),
    ],
    tcp: [
        field('acceptProxyProtocol', 'Accept PROXY protocol', 'Accept PROXY protocol', 'Accept HAProxy PROXY protocol header.', 'Принимать HAProxy PROXY protocol header.', 'switch'),
        field('header', 'Header JSON', 'Header JSON', 'TCP header obfuscation settings.', 'Настройки маскировки TCP header.', 'json'),
    ],
    ws: [
        field('path', 'Path', 'Path', 'WebSocket path.', 'Path WebSocket.', 'text', undefined, '/ray'),
        field('host', 'Host', 'Host', 'Convenience Host header value.', 'Удобное значение Host header.', 'text'),
        field('headers', 'Headers JSON', 'Headers JSON', 'Additional WebSocket headers.', 'Дополнительные WebSocket headers.', 'json'),
        field('acceptProxyProtocol', 'Accept PROXY protocol', 'Accept PROXY protocol', 'Accept HAProxy PROXY protocol header.', 'Принимать HAProxy PROXY protocol header.', 'switch'),
        field('heartbeatPeriod', 'Heartbeat period', 'Heartbeat period', 'WebSocket heartbeat period in seconds.', 'Период WebSocket heartbeat в секундах.', 'number'),
    ],
    grpc: [
        field('serviceName', 'Service name', 'Service name', 'gRPC service name.', 'Имя gRPC service.', 'text'),
        field('multiMode', 'Multi mode', 'Multi mode', 'Use multi-mode gRPC.', 'Использовать multi-mode gRPC.', 'switch'),
        field('idle_timeout', 'Idle timeout', 'Idle timeout', 'gRPC idle timeout.', 'gRPC idle timeout.', 'number'),
        field('health_check_timeout', 'Health check timeout', 'Health check timeout', 'gRPC health check timeout.', 'gRPC health check timeout.', 'number'),
    ],
    xhttp: [
        field('path', 'Path', 'Path', 'XHTTP path.', 'Path XHTTP.', 'text'),
        field('host', 'Host', 'Host', 'XHTTP host.', 'Host XHTTP.', 'text'),
        field('mode', 'Mode', 'Mode', 'XHTTP mode.', 'Режим XHTTP.', 'select', ['auto', 'packet-up', 'stream-up', 'stream-one']),
        field('headers', 'Headers JSON', 'Headers JSON', 'Additional XHTTP headers.', 'Дополнительные XHTTP headers.', 'json'),
        field('xPaddingBytes', 'X padding bytes JSON', 'X padding bytes JSON', 'XHTTP padding byte range.', 'Диапазон padding bytes для XHTTP.', 'json'),
        field('xPaddingObfsMode', 'X padding obfs', 'X padding obfs', 'Enable XHTTP padding obfuscation mode.', 'Включить XHTTP padding obfuscation mode.', 'switch'),
        field('xPaddingKey', 'X padding key', 'X padding key', 'Header/query key used for XHTTP padding.', 'Header/query key для XHTTP padding.', 'text'),
        field('uplinkHTTPMethod', 'Uplink HTTP method', 'Uplink HTTP method', 'HTTP method for XHTTP uplink.', 'HTTP method для XHTTP uplink.', 'select', ['POST', 'PUT', 'PATCH']),
        field('sessionPlacement', 'Session placement', 'Session placement', 'Where XHTTP session id is placed.', 'Где размещать XHTTP session id.', 'text'),
        field('xmux', 'XMux JSON', 'XMux JSON', 'XHTTP multiplexing limits and reuse settings.', 'Ограничения multiplexing и reuse для XHTTP.', 'json'),
        field('downloadSettings', 'Download stream JSON', 'Download stream JSON', 'Optional nested stream settings for download path.', 'Опциональные stream settings для download path.', 'json'),
        field('extra', 'Extra JSON', 'Extra JSON', 'Raw XHTTP extra settings for newly added fields.', 'Raw XHTTP extra settings для новых полей.', 'json'),
    ],
    splithttp: [
        field('path', 'Path', 'Path', 'SplitHTTP path.', 'Path SplitHTTP.', 'text'),
        field('host', 'Host', 'Host', 'SplitHTTP host.', 'Host SplitHTTP.', 'text'),
        field('mode', 'Mode', 'Mode', 'SplitHTTP mode.', 'Режим SplitHTTP.', 'select', ['auto', 'packet-up', 'stream-up', 'stream-one']),
        field('headers', 'Headers JSON', 'Headers JSON', 'Additional SplitHTTP headers.', 'Дополнительные SplitHTTP headers.', 'json'),
        field('xPaddingBytes', 'X padding bytes JSON', 'X padding bytes JSON', 'SplitHTTP padding byte range.', 'Диапазон padding bytes для SplitHTTP.', 'json'),
        field('xmux', 'XMux JSON', 'XMux JSON', 'SplitHTTP multiplexing limits and reuse settings.', 'Ограничения multiplexing и reuse для SplitHTTP.', 'json'),
        field('downloadSettings', 'Download stream JSON', 'Download stream JSON', 'Optional nested stream settings for download path.', 'Опциональные stream settings для download path.', 'json'),
        field('extra', 'Extra JSON', 'Extra JSON', 'Raw SplitHTTP extra settings for newly added fields.', 'Raw SplitHTTP extra settings для новых полей.', 'json'),
    ],
    kcp: [
        field('mtu', 'MTU', 'MTU', 'KCP MTU.', 'MTU KCP.', 'number'),
        field('tti', 'TTI', 'TTI', 'KCP transmission interval.', 'Интервал передачи KCP.', 'number'),
        field('uplinkCapacity', 'Uplink capacity', 'Uplink capacity', 'Expected uplink capacity.', 'Ожидаемая исходящая пропускная способность.', 'number'),
        field('downlinkCapacity', 'Downlink capacity', 'Downlink capacity', 'Expected downlink capacity.', 'Ожидаемая входящая пропускная способность.', 'number'),
        field('cwndMultiplier', 'CWND multiplier', 'CWND multiplier', 'KCP congestion window multiplier.', 'Множитель congestion window для KCP.', 'number'),
        field('maxSendingWindow', 'Max sending window', 'Max sending window', 'Maximum KCP sending window.', 'Максимальное окно отправки KCP.', 'number'),
        field('congestion', 'Congestion', 'Congestion', 'Enable KCP congestion control.', 'Включить congestion control KCP.', 'switch'),
        field('seed', 'Seed', 'Seed', 'Optional mKCP seed.', 'Опциональный seed для mKCP.', 'password'),
        field('header', 'Header JSON', 'Header JSON', 'KCP header type settings.', 'Настройки KCP header type.', 'json'),
    ],
    httpupgrade: [
        field('path', 'Path', 'Path', 'HTTP Upgrade path.', 'Path HTTP Upgrade.', 'text'),
        field('host', 'Host', 'Host', 'HTTP Upgrade host.', 'Host HTTP Upgrade.', 'text'),
        field('headers', 'Headers JSON', 'Headers JSON', 'Additional HTTP Upgrade headers.', 'Дополнительные HTTP Upgrade headers.', 'json'),
        field('acceptProxyProtocol', 'Accept PROXY protocol', 'Accept PROXY protocol', 'Accept HAProxy PROXY protocol header.', 'Принимать HAProxy PROXY protocol header.', 'switch'),
    ],
    hysteria: [
        field('password', 'Password', 'Пароль', 'Hysteria transport password.', 'Пароль транспорта Hysteria.', 'password'),
        field('congestion', 'Congestion', 'Congestion', 'Congestion algorithm.', 'Алгоритм congestion.', 'text'),
    ],
};

export const tlsFields: FieldDefinition[] = [
    field('serverName', 'Server name', 'Server name', 'TLS SNI.', 'TLS SNI.', 'text'),
    field('alpn', 'ALPN', 'ALPN', 'Allowed ALPN values.', 'Разрешённые ALPN значения.', 'tags'),
    field('minVersion', 'Min TLS version', 'Min TLS version', 'Minimum TLS version.', 'Минимальная версия TLS.', 'select', ['1.2', '1.3']),
    field('maxVersion', 'Max TLS version', 'Max TLS version', 'Maximum TLS version.', 'Максимальная версия TLS.', 'select', ['1.2', '1.3']),
    field('cipherSuites', 'Cipher suites', 'Cipher suites', 'TLS 1.2 cipher suite list.', 'Список cipher suite для TLS 1.2.', 'text'),
    field('certificates', 'Certificates JSON', 'Certificates JSON', 'Certificate/key files or inline certs.', 'Файлы certificate/key или inline certs.', 'json'),
    field('rejectUnknownSni', 'Reject unknown SNI', 'Reject unknown SNI', 'Reject connections with unknown SNI.', 'Отклонять подключения с неизвестным SNI.', 'switch'),
    field('disableSystemRoot', 'Disable system roots', 'Disable system roots', 'Do not use OS root CA pool.', 'Не использовать системный пул root CA.', 'switch'),
    field('pinnedPeerCertSha256', 'Pinned cert SHA-256', 'Pinned cert SHA-256', 'Pin peer certificate by SHA-256 fingerprint.', 'Закрепить peer certificate по SHA-256 fingerprint.', 'text'),
    field('verifyPeerCertByName', 'Verify peer cert name', 'Verify peer cert name', 'Override certificate name verification.', 'Переопределить проверку имени сертификата.', 'text'),
    field('verifyPeerCertInNames', 'Allowed cert names', 'Allowed cert names', 'Allowed peer certificate names.', 'Разрешённые имена peer certificate.', 'tags'),
    field('curvePreferences', 'Curve preferences', 'Curve preferences', 'TLS curve preference list.', 'Список предпочтений TLS curve.', 'tags'),
    field('masterKeyLog', 'Master key log', 'Master key log', 'Path for TLS key log debugging.', 'Путь для TLS key log debugging.', 'text'),
    field('echServerKeys', 'ECH server keys', 'ECH server keys', 'ECH server keys for inbound TLS.', 'ECH server keys для inbound TLS.', 'password'),
    field('echConfigList', 'ECH config list', 'ECH config list', 'ECH config list for outbound TLS.', 'ECH config list для outbound TLS.', 'password'),
    field('echForceQuery', 'ECH force query', 'ECH force query', 'Force ECH DNS query mode.', 'Принудительный режим ECH DNS query.', 'text'),
    field('echSockopt', 'ECH sockopt JSON', 'ECH sockopt JSON', 'Socket options for ECH DNS queries.', 'Socket options для ECH DNS queries.', 'json'),
];

export const realityFields: FieldDefinition[] = [
    field('masterKeyLog', 'Master key log', 'Master key log', 'Path for REALITY key log debugging.', 'Путь для REALITY key log debugging.', 'text'),
    field('show', 'Show debug', 'Show debug', 'Emit REALITY debug information.', 'Выводить debug REALITY.', 'switch'),
    field('target', 'Target', 'Target', 'REALITY target alias; dest is still the common server field.', 'REALITY target alias; для сервера чаще используется dest.', 'text'),
    field('dest', 'Destination', 'Назначение', 'Real destination, for example example.com:443.', 'Реальное назначение, например example.com:443.', 'text'),
    field('type', 'Type', 'Type', 'REALITY target type for advanced setups.', 'Тип REALITY target для расширенных схем.', 'text'),
    field('xver', 'Xver', 'Xver', 'PROXY protocol version for fallback destination.', 'Версия PROXY protocol для fallback destination.', 'number'),
    field('serverNames', 'Server names', 'Server names', 'Allowed SNI names.', 'Разрешённые SNI имена.', 'tags'),
    field('privateKey', 'Private key', 'Приватный ключ', 'REALITY X25519 private key.', 'Приватный ключ REALITY X25519.', 'password'),
    field('minClientVer', 'Min client version', 'Min client version', 'Minimum accepted client version.', 'Минимальная версия клиента.', 'text'),
    field('maxClientVer', 'Max client version', 'Max client version', 'Maximum accepted client version.', 'Максимальная версия клиента.', 'text'),
    field('maxTimeDiff', 'Max time diff', 'Max time diff', 'Maximum client time difference in milliseconds.', 'Максимальная разница времени клиента в мс.', 'number'),
    field('shortIds', 'Short IDs', 'Short IDs', 'Allowed short IDs as hex strings.', 'Разрешённые short ID в hex.', 'tags'),
    field('mldsa65Seed', 'ML-DSA-65 seed', 'ML-DSA-65 seed', 'Optional post-quantum REALITY seed.', 'Опциональный post-quantum REALITY seed.', 'password'),
    field('limitFallbackUpload', 'Limit fallback upload JSON', 'Limit fallback upload JSON', 'Upload throttling for fallback.', 'Ограничение upload для fallback.', 'json'),
    field('limitFallbackDownload', 'Limit fallback download JSON', 'Limit fallback download JSON', 'Download throttling for fallback.', 'Ограничение download для fallback.', 'json'),
];

export const sockoptFields: FieldDefinition[] = [
    field('mark', 'Mark', 'Mark', 'Linux SO_MARK value.', 'Значение Linux SO_MARK.', 'number'),
    field('tcpFastOpen', 'TCP Fast Open', 'TCP Fast Open', 'Enable TCP Fast Open or set queue length.', 'Включить TCP Fast Open или задать длину очереди.', 'switch'),
    field('tproxy', 'TPROXY', 'TPROXY', 'Transparent proxy mode.', 'Режим transparent proxy.', 'select', ['off', 'redirect', 'tproxy']),
    field('acceptProxyProtocol', 'Accept PROXY protocol', 'Accept PROXY protocol', 'Accept HAProxy PROXY protocol.', 'Принимать HAProxy PROXY protocol.', 'switch'),
    field('domainStrategy', 'Domain strategy', 'Domain strategy', 'Dialer domain resolution strategy.', 'Стратегия резолва домена dialer.', 'select', ['AsIs', 'UseIP', 'UseIPv4', 'UseIPv6', 'ForceIP', 'ForceIPv4', 'ForceIPv6']),
    field('dialerProxy', 'Dialer proxy tag', 'Dialer proxy tag', 'Outbound tag used as dialer proxy.', 'Outbound tag, используемый как dialer proxy.', 'text'),
    field('tcpKeepAliveInterval', 'TCP keepalive interval', 'TCP keepalive interval', 'TCP keepalive probe interval.', 'Интервал TCP keepalive probe.', 'number'),
    field('tcpKeepAliveIdle', 'TCP keepalive idle', 'TCP keepalive idle', 'Idle time before TCP keepalive probes.', 'Время простоя до TCP keepalive probe.', 'number'),
    field('tcpCongestion', 'TCP congestion', 'TCP congestion', 'Linux TCP congestion control algorithm.', 'Алгоритм Linux TCP congestion control.', 'text'),
    field('tcpWindowClamp', 'TCP window clamp', 'TCP window clamp', 'Linux TCP window clamp.', 'Linux TCP window clamp.', 'number'),
    field('tcpMaxSeg', 'TCP max segment', 'TCP max segment', 'Linux TCP_MAXSEG value.', 'Значение Linux TCP_MAXSEG.', 'number'),
    field('penetrate', 'Penetrate', 'Penetrate', 'Enable advanced socket penetration behavior.', 'Включить расширенное socket penetrate поведение.', 'switch'),
    field('tcpUserTimeout', 'TCP user timeout', 'TCP user timeout', 'Linux TCP_USER_TIMEOUT value.', 'Значение Linux TCP_USER_TIMEOUT.', 'number'),
    field('v6only', 'IPv6 only', 'IPv6 only', 'Use IPv6-only sockets where supported.', 'Использовать IPv6-only sockets, где поддерживается.', 'switch'),
    field('interface', 'Interface', 'Интерфейс', 'Bind outbound sockets to interface.', 'Привязать outbound socket к интерфейсу.', 'text'),
    field('tcpMptcp', 'TCP MPTCP', 'TCP MPTCP', 'Enable Multipath TCP where supported.', 'Включить Multipath TCP, где поддерживается.', 'switch'),
    field('addressPortStrategy', 'Address-port strategy', 'Address-port strategy', 'Strategy for source address and port binding.', 'Стратегия привязки source address и port.', 'text'),
    field('customSockopt', 'Custom sockopt JSON', 'Custom sockopt JSON', 'Advanced socket options.', 'Расширенные socket options.', 'json'),
    field('happyEyeballs', 'Happy Eyeballs JSON', 'Happy Eyeballs JSON', 'IPv4/IPv6 racing settings.', 'Настройки IPv4/IPv6 racing.', 'json'),
    field('trustedXForwardedFor', 'Trusted X-Forwarded-For', 'Trusted X-Forwarded-For', 'Trusted source CIDRs for X-Forwarded-For.', 'Доверенные CIDR источники для X-Forwarded-For.', 'tags'),
];

export const sectionFields: Record<string, FieldDefinition[]> = {
    log: [
        field('access', 'Access log', 'Access log', 'Access log path or "none".', 'Путь access log или "none".', 'text'),
        field('error', 'Error log', 'Error log', 'Error log path or "none".', 'Путь error log или "none".', 'text'),
        field('loglevel', 'Log level', 'Log level', 'Logging verbosity.', 'Уровень логирования.', 'select', ['debug', 'info', 'warning', 'error', 'none']),
        field('dnsLog', 'DNS log', 'DNS log', 'Log DNS queries.', 'Логировать DNS-запросы.', 'switch'),
        field('maskAddress', 'Mask address', 'Mask address', 'Mask IP addresses in logs.', 'Маскировать IP-адреса в логах.', 'select', ['', 'quarter', 'half', 'full']),
    ],
    dns: [
        field('servers', 'Servers JSON', 'Servers JSON', 'DNS servers: strings or objects with address, domains, expectIPs and more.', 'DNS серверы: строки или объекты с address, domains, expectIPs и др.', 'json'),
        field('hosts', 'Hosts JSON', 'Hosts JSON', 'Static domain to IP mapping.', 'Статическое соответствие доменов и IP.', 'json'),
        field('clientIp', 'Client IP', 'Client IP', 'EDNS client subnet address.', 'Адрес EDNS client subnet.', 'text'),
        field('tag', 'Tag', 'Tag', 'DNS app tag.', 'Tag DNS app.', 'text'),
        field('queryStrategy', 'Query strategy', 'Query strategy', 'DNS query record strategy.', 'Стратегия DNS-запросов.', 'select', ['UseIP', 'UseIPv4', 'UseIPv6']),
        field('disableCache', 'Disable cache', 'Disable cache', 'Disable DNS cache.', 'Отключить DNS cache.', 'switch'),
        field('serveStale', 'Serve stale', 'Serve stale', 'Serve expired cached records.', 'Отдавать устаревшие записи cache.', 'switch'),
        field('disableFallback', 'Disable fallback', 'Disable fallback', 'Disable fallback DNS servers.', 'Отключить fallback DNS серверы.', 'switch'),
        field('disableFallbackIfMatch', 'Disable fallback if match', 'Disable fallback if match', 'Skip fallback when domain rule matched.', 'Не использовать fallback при совпадении domain rule.', 'switch'),
        field('enableParallelQuery', 'Parallel query', 'Parallel query', 'Query DNS servers in parallel.', 'Опрашивать DNS серверы параллельно.', 'switch'),
        field('useSystemHosts', 'Use system hosts', 'Use system hosts', 'Read OS hosts file.', 'Читать системный hosts файл.', 'switch'),
    ],
    routing: [
        field('domainStrategy', 'Domain strategy', 'Domain strategy', 'When routing should resolve domains.', 'Когда routing должен резолвить домены.', 'select', ['AsIs', 'IPIfNonMatch', 'IPOnDemand']),
        field('domainMatcher', 'Domain matcher', 'Domain matcher', 'Domain matching implementation.', 'Реализация сопоставления доменов.', 'select', ['hybrid', 'linear']),
        field('rules', 'Rules JSON', 'Rules JSON', 'Ordered field rules with domain, ip, port, protocol, inboundTag, outboundTag or balancerTag.', 'Упорядоченные field rules с domain, ip, port, protocol, inboundTag, outboundTag или balancerTag.', 'json'),
        field('balancers', 'Balancers JSON', 'Balancers JSON', 'Balancer definitions and selectors.', 'Определения balancer и selectors.', 'json'),
    ],
    policy: [
        field('levels', 'Levels JSON', 'Levels JSON', 'Per-user-level timeouts, stats and buffer policy.', 'Policy по user level: timeouts, stats и buffer.', 'json'),
        field('system', 'System JSON', 'System JSON', 'System traffic stats flags.', 'Флаги системной статистики трафика.', 'json'),
    ],
    api: [
        field('tag', 'Tag', 'Tag', 'Inbound/outbound API tag.', 'Tag API inbound/outbound.', 'text'),
        field('listen', 'Listen', 'Listen', 'Optional API listen address.', 'Опциональный listen адрес API.', 'text'),
        field('services', 'Services', 'Services', 'API services to enable.', 'API services для включения.', 'tags'),
    ],
    metrics: [
        field('tag', 'Tag', 'Tag', 'Metrics inbound tag.', 'Tag metrics inbound.', 'text'),
        field('listen', 'Listen', 'Listen', 'Metrics listen address.', 'Listen адрес metrics.', 'text'),
    ],
    fakeDns: [
        field('ipPool', 'IP pool', 'IP pool', 'CIDR pool used for fake DNS answers.', 'CIDR pool для fake DNS ответов.', 'text'),
        field('poolSize', 'Pool size', 'Pool size', 'LRU pool size.', 'Размер LRU pool.', 'number'),
    ],
    observatory: [
        field('subjectSelector', 'Subject selector', 'Subject selector', 'Outbound tag selectors to observe.', 'Selectors outbound tags для наблюдения.', 'tags'),
        field('probeURL', 'Probe URL', 'Probe URL', 'URL used for connectivity probes.', 'URL для проверок соединения.', 'text'),
        field('probeInterval', 'Probe interval', 'Probe interval', 'Probe interval, for example 1m.', 'Интервал проверки, например 1m.', 'text'),
        field('enableConcurrency', 'Concurrency', 'Concurrency', 'Probe outbounds concurrently.', 'Проверять outbounds параллельно.', 'switch'),
    ],
    burstObservatory: [
        field('subjectSelector', 'Subject selector', 'Subject selector', 'Outbound tag selectors to observe.', 'Selectors outbound tags для наблюдения.', 'tags'),
        field('pingConfig', 'Ping config JSON', 'Ping config JSON', 'Burst observatory ping settings.', 'Настройки ping для burst observatory.', 'json'),
    ],
    geodata: [
        field('cron', 'Cron', 'Cron', 'Cron expression for updates.', 'Cron expression для обновлений.', 'text'),
        field('outbound', 'Outbound tag', 'Outbound tag', 'Outbound used to download assets.', 'Outbound для скачивания assets.', 'text'),
        field('assets', 'Assets JSON', 'Assets JSON', 'Geodata assets with url and file.', 'Geodata assets с url и file.', 'json'),
    ],
    version: [field('min', 'Minimum version', 'Минимальная версия', 'Minimum accepted Xray version.', 'Минимальная версия Xray.', 'text')],
};

export const defaultConfig = (): XrayConfig => ({
    log: {loglevel: 'warning'},
    inbounds: [
        {
            tag: 'vless-reality-in',
            listen: '0.0.0.0',
            port: 443,
            protocol: 'vless',
            settings: {
                clients: [{id: crypto.randomUUID(), flow: 'xtls-rprx-vision', email: 'user@example.com'}],
                decryption: 'none',
            },
            streamSettings: {
                network: 'tcp',
                security: 'reality',
                realitySettings: {
                    show: false,
                    dest: 'www.microsoft.com:443',
                    xver: 0,
                    serverNames: ['www.microsoft.com'],
                    privateKey: randomBase64Url(32),
                    shortIds: [randomHex(8)],
                },
            },
            sniffing: {
                enabled: true,
                destOverride: ['http', 'tls', 'quic'],
                routeOnly: true,
            },
        },
    ],
    outbounds: [
        {tag: 'direct', protocol: 'freedom', settings: {domainStrategy: 'AsIs'}},
        {tag: 'block', protocol: 'blackhole', settings: {}},
    ],
    routing: {
        domainStrategy: 'AsIs',
        rules: [
            {type: 'field', ip: ['geoip:private'], outboundTag: 'block'},
            {type: 'field', protocol: ['bittorrent'], outboundTag: 'block'},
        ],
    },
});

export function field(
    key: string,
    label: string,
    labelRu: string,
    help: string,
    helpRu: string,
    kind: FieldDefinition['kind'],
    options?: string[],
    placeholder?: string,
): FieldDefinition {
    return {key, label, labelRu, help, helpRu, kind, options, placeholder, secret: kind === 'password'};
}

export function randomHex(bytes: number): string {
    return Array.from(crypto.getRandomValues(new Uint8Array(bytes)), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export function randomBase64Url(bytes: number): string {
    const raw = String.fromCharCode(...crypto.getRandomValues(new Uint8Array(bytes)));
    return btoa(raw).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

export function randomToken(bytes = 18): string {
    return randomBase64Url(bytes);
}

export function pruneEmpty(value: JsonValue): JsonValue | undefined {
    if (Array.isArray(value)) {
        const next = value.map((item) => pruneEmpty(item)).filter((item): item is JsonValue => item !== undefined);
        return next.length > 0 ? next : undefined;
    }

    if (value && typeof value === 'object') {
        const entries = Object.entries(value)
            .map(([key, item]) => [key, pruneEmpty(item)] as const)
            .filter(([, item]) => item !== undefined && item !== '');
        return entries.length > 0 ? Object.fromEntries(entries) as JsonValue : undefined;
    }

    return value === '' || value === null ? undefined : value;
}

export function getProtocol<T extends ProtocolDefinition>(items: T[], value: string): T {
    const definition = items.find((item) => item.value === value);

    if (!definition) {
        throw new Error(`Unsupported protocol: ${value}`);
    }

    return definition;
}
