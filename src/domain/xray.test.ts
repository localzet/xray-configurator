import { describe, expect, it } from 'vitest';

import { defaultConfig, pruneEmpty } from './xray';

describe('xray domain helpers', () => {
  it('creates an exportable default config', () => {
    const config = defaultConfig();

    expect(config.inbounds).toHaveLength(1);
    expect(config.outbounds?.map((outbound) => outbound.tag)).toEqual(['direct', 'block']);
    expect(JSON.stringify(config)).toContain('vless-reality-in');
  });

  it('prunes empty values without removing meaningful booleans or numbers', () => {
    expect(
      pruneEmpty({
        empty: '',
        nested: { empty: '', enabled: false, count: 0 },
        list: ['', { value: 'ok' }],
      }),
    ).toEqual({
      nested: { enabled: false, count: 0 },
      list: [{ value: 'ok' }],
    });
  });
});
