import {describe, expect, it} from 'vitest';

import {presets} from './presets';
import {validateConfig} from './validation';
import {defaultConfig} from './xray';

describe('validateConfig', () => {
    it('accepts bundled presets without validation errors', () => {
        for (const preset of presets) {
            const errors = validateConfig(preset.create()).filter((issue) => issue.severity === 'error');
            expect(errors, preset.id).toEqual([]);
        }
    });

    it('detects invalid ports, UUIDs and routing tags', () => {
        const config = defaultConfig();
        const inbound = config.inbounds?.[0];

        if (!inbound) {
            throw new Error('default inbound is missing');
        }

        inbound.port = 70000;
        inbound.settings.clients = [{id: 'not-a-uuid'}];
        config.routing = {rules: [{type: 'field', outboundTag: 'missing'}]};

        const paths = validateConfig(config).map((issue) => issue.path);

        expect(paths).toContain('inbounds[0].port');
        expect(paths).toContain('inbounds[0].settings.clients[0].id');
        expect(paths).toContain('routing.rules[0].outboundTag');
    });

    it('rejects conflicting outbound proxy settings', () => {
        const config = defaultConfig();
        config.outbounds = [
            {
                tag: 'proxy',
                protocol: 'vless',
                settings: {},
                proxySettings: {tag: 'chain-a'},
                streamSettings: {sockopt: {dialerProxy: 'chain-b'}},
            },
        ];

        expect(validateConfig(config).map((issue) => issue.path)).toContain('outbounds[0].proxySettings');
    });
});
