import { InboundConfig, JsonValue, XrayConfig, randomBase64Url, randomHex, randomToken } from './xray';

export interface ConfigPreset {
  id: string;
  label: string;
  labelRu: string;
  description: string;
  descriptionRu: string;
  create: () => XrayConfig;
}

export const presets: ConfigPreset[] = [
  {
    id: 'vless-reality-vision',
    label: 'VLESS + REALITY + Vision',
    labelRu: 'VLESS + REALITY + Vision',
    description: 'Recommended modern TCP server profile with sniffing and private IP blocking.',
    descriptionRu: 'Рекомендуемый современный TCP server profile со sniffing и блокировкой private IP.',
    create: () => baseServerConfig({
      tag: 'vless-reality-in',
      protocol: 'vless',
      settings: {
        clients: [{ id: crypto.randomUUID(), flow: 'xtls-rprx-vision', email: 'user@example.com' }],
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
    }),
  },
  {
    id: 'trojan-tls',
    label: 'Trojan + TLS',
    labelRu: 'Trojan + TLS',
    description: 'Password-based TLS server profile with certificate file placeholders.',
    descriptionRu: 'TLS server profile с паролем и placeholder-путями сертификатов.',
    create: () => baseServerConfig({
      tag: 'trojan-tls-in',
      protocol: 'trojan',
      settings: {
        clients: [{ password: randomToken(24), email: 'user@example.com' }],
      },
      streamSettings: {
        network: 'tcp',
        security: 'tls',
        tlsSettings: {
          serverName: 'example.com',
          alpn: ['h2', 'http/1.1'],
          certificates: [{ certificateFile: '/etc/ssl/example.com/fullchain.pem', keyFile: '/etc/ssl/example.com/privkey.pem' }],
        },
      },
    }),
  },
  {
    id: 'vless-ws-tls',
    label: 'VLESS + WebSocket + TLS',
    labelRu: 'VLESS + WebSocket + TLS',
    description: 'CDN/reverse-proxy friendly profile seen across WebSocket examples.',
    descriptionRu: 'Профиль для CDN/reverse proxy, часто встречается в WebSocket-примерах.',
    create: () => baseServerConfig({
      tag: 'vless-ws-tls-in',
      protocol: 'vless',
      settings: {
        clients: [{ id: crypto.randomUUID(), email: 'user@example.com' }],
        decryption: 'none',
      },
      streamSettings: {
        network: 'ws',
        security: 'tls',
        wsSettings: {
          path: '/vless',
          headers: { Host: 'example.com' },
        },
        tlsSettings: certificateSettings('example.com'),
      },
    }),
  },
  {
    id: 'vless-grpc-tls',
    label: 'VLESS + gRPC + TLS',
    labelRu: 'VLESS + gRPC + TLS',
    description: 'Reverse-proxy friendly gRPC profile with TLS termination on Xray.',
    descriptionRu: 'gRPC-профиль для reverse proxy с TLS termination на Xray.',
    create: () => baseServerConfig({
      tag: 'vless-grpc-tls-in',
      protocol: 'vless',
      settings: {
        clients: [{ id: crypto.randomUUID(), email: 'user@example.com' }],
        decryption: 'none',
      },
      streamSettings: {
        network: 'grpc',
        security: 'tls',
        grpcSettings: {
          serviceName: 'vless-grpc',
          multiMode: false,
        },
        tlsSettings: certificateSettings('example.com'),
      },
    }),
  },
  {
    id: 'vless-xhttp-reality',
    label: 'VLESS + XHTTP + REALITY',
    labelRu: 'VLESS + XHTTP + REALITY',
    description: 'Modern XHTTP REALITY profile based on newer official examples.',
    descriptionRu: 'Современный XHTTP REALITY профиль на основе новых официальных примеров.',
    create: () => baseServerConfig({
      tag: 'vless-xhttp-reality-in',
      protocol: 'vless',
      settings: {
        clients: [{ id: crypto.randomUUID(), flow: 'xtls-rprx-vision', email: 'user@example.com' }],
        decryption: 'none',
      },
      streamSettings: {
        network: 'xhttp',
        security: 'reality',
        xhttpSettings: {
          path: '/xhttp',
          mode: 'auto',
        },
        realitySettings: {
          dest: 'www.microsoft.com:443',
          serverNames: ['www.microsoft.com'],
          privateKey: randomBase64Url(32),
          shortIds: [randomHex(8)],
        },
      },
    }),
  },
  {
    id: 'vless-splithttp-tls',
    label: 'VLESS + SplitHTTP + TLS',
    labelRu: 'VLESS + SplitHTTP + TLS',
    description: 'SplitHTTP TLS profile for deployments behind Caddy/Nginx/H3 paths.',
    descriptionRu: 'SplitHTTP TLS профиль для схем за Caddy/Nginx/H3.',
    create: () => baseServerConfig({
      tag: 'vless-splithttp-tls-in',
      protocol: 'vless',
      settings: {
        clients: [{ id: crypto.randomUUID(), email: 'user@example.com' }],
        decryption: 'none',
      },
      streamSettings: {
        network: 'splithttp',
        security: 'tls',
        splithttpSettings: {
          path: '/splithttp',
          host: 'example.com',
          mode: 'auto',
        },
        tlsSettings: certificateSettings('example.com'),
      },
    }),
  },
  {
    id: 'single-port-fallbacks',
    label: 'Single-port fallbacks',
    labelRu: 'Single-port fallbacks',
    description: 'One 443 listener with VLESS TLS fallback paths for WS/gRPC/reverse proxy setups.',
    descriptionRu: 'Один listener на 443 с VLESS TLS fallbacks для WS/gRPC/reverse proxy схем.',
    create: () => ({
      ...baseServerConfig({
        tag: 'vless-tls-main',
        protocol: 'vless',
        settings: {
          clients: [{ id: crypto.randomUUID(), flow: 'xtls-rprx-vision', email: 'user@example.com' }],
          decryption: 'none',
          fallbacks: [
            { path: '/ws', dest: 10001, xver: 1 },
            { path: '/grpc', dest: 10002, xver: 1 },
            { dest: 80 },
          ] as Record<string, JsonValue>[],
        },
        streamSettings: {
          network: 'tcp',
          security: 'tls',
          tlsSettings: certificateSettings('example.com'),
        },
      }),
      inbounds: [
        {
          tag: 'vless-tls-main',
          listen: '0.0.0.0',
          port: 443,
          protocol: 'vless',
          settings: {
            clients: [{ id: crypto.randomUUID(), flow: 'xtls-rprx-vision', email: 'user@example.com' }],
            decryption: 'none',
            fallbacks: [
              { path: '/ws', dest: 10001, xver: 1 },
              { path: '/grpc', dest: 10002, xver: 1 },
              { dest: 80 },
            ] as Record<string, JsonValue>[],
          },
          streamSettings: {
            network: 'tcp',
            security: 'tls',
            tlsSettings: certificateSettings('example.com'),
          },
          sniffing: { enabled: true, destOverride: ['http', 'tls', 'quic'], routeOnly: true },
        },
        {
          tag: 'vless-ws-fallback',
          listen: '127.0.0.1',
          port: 10001,
          protocol: 'vless',
          settings: { clients: [{ id: crypto.randomUUID(), email: 'ws@example.com' }], decryption: 'none' },
          streamSettings: { network: 'ws', security: 'none', wsSettings: { path: '/ws', acceptProxyProtocol: true } },
        },
        {
          tag: 'vless-grpc-fallback',
          listen: '127.0.0.1',
          port: 10002,
          protocol: 'vless',
          settings: { clients: [{ id: crypto.randomUUID(), email: 'grpc@example.com' }], decryption: 'none' },
          streamSettings: { network: 'grpc', security: 'none', grpcSettings: { serviceName: 'grpc' } },
        },
      ] as InboundConfig[],
    }),
  },
  {
    id: 'shadowsocks-2022',
    label: 'Shadowsocks 2022',
    labelRu: 'Shadowsocks 2022',
    description: 'Simple Shadowsocks 2022 server with TCP and UDP enabled.',
    descriptionRu: 'Простой Shadowsocks 2022 сервер с TCP и UDP.',
    create: () => baseServerConfig({
      tag: 'shadowsocks-in',
      protocol: 'shadowsocks',
      settings: {
        method: '2022-blake3-aes-128-gcm',
        password: randomToken(24),
        network: 'tcp,udp',
      },
      streamSettings: {
        network: 'tcp',
        security: 'none',
      },
    }),
  },
  {
    id: 'hysteria2-tls',
    label: 'Hysteria2 + TLS',
    labelRu: 'Hysteria2 + TLS',
    description: 'UDP Hysteria2 server profile with TLS certificates.',
    descriptionRu: 'UDP Hysteria2 server profile с TLS-сертификатами.',
    create: () => baseServerConfig({
      tag: 'hysteria2-in',
      protocol: 'hysteria',
      settings: {
        version: 2,
        clients: [{ auth: randomToken(18), email: 'user@example.com' }],
      },
      streamSettings: {
        network: 'hysteria',
        security: 'tls',
        tlsSettings: certificateSettings('example.com'),
      },
    }),
  },
  {
    id: 'transparent-proxy',
    label: 'Transparent proxy',
    labelRu: 'Transparent proxy',
    description: 'Dokodemo-door inbound with followRedirect and DNS/routing defaults.',
    descriptionRu: 'Dokodemo-door inbound с followRedirect и базовыми DNS/routing настройками.',
    create: () => baseServerConfig({
      tag: 'transparent-in',
      listen: '0.0.0.0',
      port: 12345,
      protocol: 'dokodemo-door',
      settings: {
        network: 'tcp,udp',
        followRedirect: true,
      },
      sniffing: {
        enabled: true,
        destOverride: ['http', 'tls', 'quic'],
        routeOnly: true,
      },
    }),
  },
  {
    id: 'api-metrics',
    label: 'API + metrics',
    labelRu: 'API + metrics',
    description: 'Local API and metrics services for controlled deployments.',
    descriptionRu: 'Локальные API и metrics services для управляемых установок.',
    create: () => ({
      ...baseServerConfig({
        tag: 'vless-reality-in',
        protocol: 'vless',
        settings: {
          clients: [{ id: crypto.randomUUID(), flow: 'xtls-rprx-vision', email: 'user@example.com' }],
          decryption: 'none',
        },
        streamSettings: {
          network: 'tcp',
          security: 'reality',
          realitySettings: {
            dest: 'www.microsoft.com:443',
            serverNames: ['www.microsoft.com'],
            privateKey: randomBase64Url(32),
            shortIds: [randomHex(8)],
          },
        },
      }),
      api: { tag: 'api', services: ['HandlerService', 'LoggerService', 'StatsService'] },
      metrics: { tag: 'metrics', listen: '127.0.0.1:11111' },
      stats: {},
      policy: {
        levels: { 0: { statsUserUplink: true, statsUserDownlink: true } },
        system: { statsInboundUplink: true, statsInboundDownlink: true, statsOutboundUplink: true, statsOutboundDownlink: true },
      },
    }),
  },
];

function baseServerConfig(inbound: InboundConfig): XrayConfig {
  return {
    log: { loglevel: 'warning' },
    dns: {
      servers: ['1.1.1.1', '8.8.8.8'],
      queryStrategy: 'UseIP',
    },
    inbounds: [
      {
        listen: '0.0.0.0',
        port: 443,
        sniffing: {
          enabled: true,
          destOverride: ['http', 'tls', 'quic'],
          routeOnly: true,
        },
        ...inbound,
      },
    ],
    outbounds: [
      { tag: 'direct', protocol: 'freedom', settings: { domainStrategy: 'AsIs' } },
      { tag: 'block', protocol: 'blackhole', settings: {} },
    ],
    routing: {
      domainStrategy: 'AsIs',
      rules: [
        { type: 'field', ip: ['geoip:private'], outboundTag: 'block' },
        { type: 'field', protocol: ['bittorrent'], outboundTag: 'block' },
      ],
    },
  };
}

function certificateSettings(serverName: string): NonNullable<InboundConfig['streamSettings']>['tlsSettings'] {
  return {
    serverName,
    alpn: ['h2', 'http/1.1'],
    certificates: [{ certificateFile: `/etc/ssl/${serverName}/fullchain.pem`, keyFile: `/etc/ssl/${serverName}/privkey.pem` }],
  };
}
