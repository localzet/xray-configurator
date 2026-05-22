export type ExampleConfig = Record<string, unknown>;

export interface ExampleCatalogItem {
    id: string;
    title: string;
    path: string;
    role: 'server' | 'client' | 'mixed' | 'other';
    protocols: string[];
    transports: string[];
    securities: string[];
    features: string[];
    raw: string;
    config: ExampleConfig | null;
}

export const exampleCatalog = [
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-shadowsocks-grpc-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/ShadowSocks-gRPC",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/ShadowSocks-gRPC.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "shadowsocks"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "gRPC"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\",\r\n            \"port\": 443,\r\n            \"method\": \"chacha20-ietf-poly1305\",\r\n            \"password\": \"desdemona99\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"ssgrpc\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "shadowsocks",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "method": "chacha20-ietf-poly1305",
                                "password": "desdemona99"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "grpcSettings": {
                            "serviceName": "ssgrpc"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-shadowsocks-h2-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/ShadowSocks-H2-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/ShadowSocks-H2-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "shadowsocks"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\", // Change to you own domain\r\n            \"port\": 443,\r\n            \"method\": \"chacha20-ietf-poly1305\",\r\n            \"password\": \"desdemona99\" // Change to you own password\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"http\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/ssh2\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\",\r\n          \"alpn\": [\"h2\"],\r\n          \"serverName\": \"ssh2o.example.com\" // Change to ssh2o.yourdomain.tld\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "shadowsocks",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "method": "chacha20-ietf-poly1305",
                                "password": "desdemona99"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "http",
                        "httpSettings": {
                            "path": "/ssh2"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome",
                            "alpn": [
                                "h2"
                            ],
                            "serverName": "ssh2o.example.com"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-shadowsocks-tcp-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/ShadowSocks-TCP-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/ShadowSocks-TCP-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "shadowsocks"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\",\r\n            \"port\": 443,\r\n            \"method\": \"chacha20-ietf-poly1305\",\r\n            \"password\": \"desdemona99\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"tcpSettings\": {\r\n          \"header\": {\r\n            \"request\": {\r\n              \"path\": [\"/sstc\"]\r\n            },\r\n            \"type\": \"http\"\r\n          }\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "shadowsocks",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "method": "chacha20-ietf-poly1305",
                                "password": "desdemona99"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "tcpSettings": {
                            "header": {
                                "request": {
                                    "path": [
                                        "/sstc"
                                    ]
                                },
                                "type": "http"
                            }
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-shadowsocks-ws-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/ShadowSocks-WS-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/ShadowSocks-WS-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "shadowsocks"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\", // Change to you own domain\r\n            \"port\": 443,\r\n            \"method\": \"chacha20-ietf-poly1305\",\r\n            \"password\": \"desdemona99\" // Change to you own password\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"wsSettings\": {\r\n          \"path\": \"/ssws?ed=2560\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "shadowsocks",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "method": "chacha20-ietf-poly1305",
                                "password": "desdemona99"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "ws",
                        "wsSettings": {
                            "path": "/ssws?ed=2560"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-trojan-grpc-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Trojan-gRPC-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Trojan-gRPC-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "trojan"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "gRPC"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\",\r\n            \"port\": 443,\r\n            \"password\": \"desdemona99\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"trgrpc\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "trojan",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "password": "desdemona99"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "grpcSettings": {
                            "serviceName": "trgrpc"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-trojan-h2-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Trojan-H2-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Trojan-H2-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "trojan"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\",\r\n            \"port\": 443,\r\n            \"password\": \"desdemona99\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"http\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/trh2\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\",\r\n          \"alpn\": [\"h2\"],\r\n          \"serverName\": \"trh2o.example.com\" // Change to ssh2o.yourdomain.tld\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "trojan",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "password": "desdemona99"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "http",
                        "httpSettings": {
                            "path": "/trh2"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome",
                            "alpn": [
                                "h2"
                            ],
                            "serverName": "trh2o.example.com"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-trojan-tcp-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Trojan-TCP-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Trojan-TCP-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "trojan"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\",\r\n            \"port\": 443,\r\n            \"password\": \"desdemona99\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"tcpSettings\": {},\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "trojan",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "password": "desdemona99"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "tcpSettings": {},
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-trojan-ws-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Trojan-WS-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Trojan-WS-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "trojan"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\",\r\n            \"port\": 443,\r\n            \"password\": \"desdemona99\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"wsSettings\": {\r\n          \"path\": \"/trojanws?ed=2560\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "trojan",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "password": "desdemona99"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "ws",
                        "wsSettings": {
                            "path": "/trojanws?ed=2560"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vless-grpc-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Vless-gRPC-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Vless-gRPC-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "gRPC"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"vlgrpc\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "grpcSettings": {
                            "serviceName": "vlgrpc"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vless-h2-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Vless-H2-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Vless-H2-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"http\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/vlh2\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\",\r\n          \"alpn\": [\"h2\"],\r\n          \"serverName\": \"vlh2o.example.com\" // Change to ssh2o.yourdomain.tld\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "http",
                        "httpSettings": {
                            "path": "/vlh2"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome",
                            "alpn": [
                                "h2"
                            ],
                            "serverName": "vlh2o.example.com"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vless-tcp-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Vless-TCP-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Vless-TCP-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"tcpSettings\": {\r\n          \"header\": {\r\n            \"request\": {\r\n              \"path\": [\"/vltc\"]\r\n            },\r\n            \"type\": \"http\"\r\n          }\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "tcpSettings": {
                            "header": {
                                "request": {
                                    "path": [
                                        "/vltc"
                                    ]
                                },
                                "type": "http"
                            }
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vless-tcp-xtls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Vless-TCP-XTLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Vless-TCP-XTLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"encryption\": \"none\",\r\n        \"flow\": \"xtls-rprx-vision\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n            \"allowInsecure\": false,\r\n            \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "encryption": "none",
                        "flow": "xtls-rprx-vision"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vless-ws-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/Vless-WS-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/Vless-WS-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"wsSettings\": {\r\n          \"path\": \"/vlws?ed=2560\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "wsSettings": {
                            "path": "/vlws?ed=2560"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vmess-grpc-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/VMESS-gRPC-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/VMESS-gRPC-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vmess"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [
            "none",
            "tls"
        ],
        "features": [
            "TLS",
            "gRPC"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"security\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"vmgrpc\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "security": "none"
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "grpcSettings": {
                            "serviceName": "vmgrpc"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vmess-h2-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/VMESS-H2-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/VMESS-H2-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vmess"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "none",
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"security\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"http\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/vmh2\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\",\r\n          \"alpn\": [\"h2\"],\r\n          \"serverName\": \"vmh2o.example.com\" // Change to ssh2o.yourdomain.tld\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "security": "none"
                    },
                    "streamSettings": {
                        "network": "http",
                        "httpSettings": {
                            "path": "/vmh2"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome",
                            "alpn": [
                                "h2"
                            ],
                            "serverName": "vmh2o.example.com"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vmess-tcp-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/VMESS-TCP-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/VMESS-TCP-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vmess"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "none",
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"security\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"tcpSettings\": {\r\n          \"header\": {\r\n            \"request\": {\r\n              \"path\": [\"/vmtc\"]\r\n            },\r\n            \"type\": \"http\"\r\n          }\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "security": "none"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "tcpSettings": {
                            "header": {
                                "request": {
                                    "path": [
                                        "/vmtc"
                                    ]
                                },
                                "type": "http"
                            }
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-client-configs-vmess-ws-tls-jsonc",
        "title": "All-in-One-fallbacks-Nginx/client.configs/VMESS-WS-TLS",
        "path": "examples/All-in-One-fallbacks-Nginx/client.configs/VMESS-WS-TLS.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vmess"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "none",
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"debug\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n        \"security\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"wsSettings\": {\r\n          \"path\": \"/vmws?ed=2560\"\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                        "security": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "wsSettings": {
                            "path": "/vmws?ed=2560"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-all-in-one-fallbacks-nginx-server-jsonc",
        "title": "All-in-One-fallbacks-Nginx/server",
        "path": "examples/All-in-One-fallbacks-Nginx/server.jsonc",
        "role": "server",
        "protocols": [
            "dokodemo-door",
            "vless",
            "vmess",
            "trojan",
            "shadowsocks",
            "freedom",
            "blackhole",
            "dns"
        ],
        "transports": [
            "tcp",
            "ws",
            "grpc",
            "h2"
        ],
        "securities": [
            "tls",
            "none"
        ],
        "features": [
            "TLS",
            "fallbacks",
            "gRPC",
            "WebSocket",
            "PROXY protocol",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"info\"\r\n  },\r\n  \"api\": {\r\n    \"services\": [\r\n      \"HandlerService\",\r\n      \"LoggerService\",\r\n      \"StatsService\"\r\n    ],\r\n    \"tag\": \"api\"\r\n  },\r\n  \"stats\": {},\r\n  \"policy\": {\r\n    \"levels\": {\r\n      \"0\": {\r\n        \"statsUserUplink\": true,\r\n        \"statsUserDownlink\": true\r\n      }\r\n    },\r\n    \"system\": {\r\n      \"statsInboundUplink\": true,\r\n      \"statsInboundDownlink\": true,\r\n      \"statsOutboundUplink\": true,\r\n      \"statsOutboundDownlink\": true\r\n    }\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": 62789,\r\n      \"protocol\": \"dokodemo-door\",\r\n      \"settings\": {\r\n        \"address\": \"127.0.0.1\"\r\n      },\r\n      \"tag\": \"api\",\r\n      \"sniffing\": null\r\n    },\r\n    {\r\n      \"tag\": \"Vless-TCP-XTLS\",\r\n      \"port\": 443, // This is TLS entrypoint. This entrypoint does the SSL Termination then routes the request based on the Path or ALPN type.\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vless-tcp-xtls\", //Change to your own email\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\", //Change to your own email\r\n            \"flow\": \"xtls-rprx-vision\",\r\n            \"level\": 0\r\n            // \"flow\": \"xtls-rprx-direct\"\r\n          }\r\n        ],\r\n        \"decryption\": \"none\",\r\n        \"fallbacks\": [\r\n          // H2\r\n          {\r\n            // if the SNI was `trh2o.EXAMPLE.COM` and `alpn=h2`, pass it to trojan-h2 listener\r\n            \"name\": \"trh2o.example.com\",\r\n            \"alpn\": \"h2\",\r\n            \"dest\": \"@trojan-h2\"\r\n          },\r\n          {\r\n            // if the SNI was `vlh2o.EXAMPLE.COM` and `alpn=h2`, pass it to vless-h2 listener\r\n            \"name\": \"vlh2o.example.com\",\r\n            \"alpn\": \"h2\",\r\n            \"dest\": \"@vless-h2\"\r\n          },\r\n          {\r\n            // if the SNI was `vmh2o.EXAMPLE.COM` and `alpn=h2`, pass it to vmess-h2 listener\r\n            \"name\": \"vmh2o.example.com\",\r\n            \"alpn\": \"h2\",\r\n            \"dest\": \"@vmess-h2\"\r\n          },\r\n          {\r\n            // if the SNI was `ssh2o.EXAMPLE.COM` and `alpn=h2`, pass it to shadowsocks-h2 listener\r\n            \"name\": \"ssh2o.example.com\",\r\n            \"alpn\": \"h2\",\r\n            \"dest\": 4003\r\n          },\r\n          // Websocket\r\n          {\r\n            // if the path was `/vlws`, pass it to vless-ws listener\r\n            \"path\": \"/vlws\",\r\n            \"dest\": \"@vless-ws\",\r\n            \"xver\": 2 //Enable the sending of the PROXY protocol, and send the real source IP and port to the following vmess+ws application. 1 or 2 indicates the PROXY protocol version. Consistent with the following, it is recommended to configure 2.\r\n          },\r\n          {\r\n            // if the path was `/vmws`, pass it to vmess-ws listener\r\n            \"path\": \"/vmws\",\r\n            \"dest\": \"@vmess-ws\",\r\n            \"xver\": 2\r\n          },\r\n          {\r\n            // if the path was `/trojanws`, pass it to trojan-ws listener\r\n            \"path\": \"/trojanws\",\r\n            \"dest\": \"@trojan-ws\",\r\n            \"xver\": 2\r\n          },\r\n          {\r\n            // if the path was `/ssws`, pass it to port 4001 (shadowsocks-ws listener)\r\n            \"path\": \"/ssws\",\r\n            \"dest\": 4001\r\n          },\r\n          // TCP + http obfs\r\n          {\r\n            // if the path was `/vltc`, pass it to vless-tcp listener\r\n            \"path\": \"/vltc\",\r\n            \"dest\": \"@vless-tcp\",\r\n            \"xver\": 2\r\n          },\r\n          {\r\n            // if the path was `/vmtc`, pass it to vmess-tcp listener\r\n            \"path\": \"/vmtc\",\r\n            \"dest\": \"@vmess-tcp\",\r\n            \"xver\": 2\r\n          },\r\n          {\r\n            // if the path was `/sstc`, pass it to port 4002 (shadowsocks-tcp listener)\r\n            \"path\": \"/sstc\",\r\n            \"dest\": 4002\r\n          },\r\n          {\r\n            // if the request's ALPN was HTTP2, pass it to trojan-tcp. (Also from trojan-tcp fallback to Nginx HTTP2)\r\n            \"alpn\": \"h2\",\r\n            \"dest\": \"@trojan-tcp\",\r\n            \"xver\": 2\r\n          },\r\n          {\r\n            // if not any other condition, pass it to Nginx HTTP1.1 listener\r\n            \"dest\": \"/dev/shm/h1.sock\",\r\n            \"xver\": 2\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        // If XTLS Vision is enabled, \"security\" must be \"tls\"\r\n        // If XTLS Direct is enabled, \"security\" must be \"xtls\"\r\n        \"security\": \"tls\",\r\n        // If XTLS Direct is enabled, \"tlsSettings\" should also be changed to \"xtlsSettings\"\r\n        \"tlsSettings\": {\r\n          \"certificates\": [\r\n            {\r\n              \"ocspStapling\": 3600, //The Xray version is not less than v1.3.0 to support configuring the time interval between OCSP stapling update and certificate hot reload. Currently V2Ray does not support it. If you use V2Ray as the server, you must delete this configuration.\r\n              \"certificateFile\": \"/etc/ssl/example.com/domain.pem\", // this is te fullchain (domain + any bundle). Make sure the permissions are correct (absolute path)\r\n              \"keyFile\": \"/etc/ssl/example.com/domain-key.pem\" // this is the private key of the cert. Make sure the permissions are correct (absolute path)\r\n            },\r\n            {\r\n              // more domains and therefore more certificates can be added to this `certificates` list\r\n              \"ocspStapling\": 3600,\r\n              \"certificateFile\": \"/etc/ssl/behindcdn.com/domain.pem\",\r\n              \"keyFile\": \"/etc/ssl/behindcdn.com/domain-key.pem\"\r\n            }\r\n          ],\r\n          \"minVersion\": \"1.2\", //Xray version is not less than v1.1.4 to support configuring the minimum TLS version. Currently V2Ray does not support it. If you use V2Ray as the server, you must delete this configuration.\r\n          \"cipherSuites\": \"TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256\", //Xray版本不小于v1.1.4才支持配置密码套件（若无RSA证书，可删除所有RSA算法的密码套件；无ECC证书, to remove cipher suites for all ECDSA algorithms.). Currently V2Ray does not support it. If you use V2Ray as the server, you must delete this configuration.\r\n          \"alpn\": [\r\n            \"h2\", //Enabling h2 connection needs to configure h2 fallback, otherwise inconsistency (streaking) is easily detected by the wall and blocked.\r\n            \"http/1.1\" //Enabling http/1.1 connection needs to configure http/1.1 fallback, otherwise inconsistency (streaking) is easily detected by the wall and blocked.\r\n          ]\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n    //                                  WebSocket (VLESS - VMESS - TROJAN - ShadowSocks)                                  //\r\n    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n    {\r\n      \"listen\": \"@vless-ws\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vless-ws\", //Change to your own email\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\", //Change to your own UUID\r\n            \"level\": 0\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"none\",\r\n        \"wsSettings\": {\r\n          \"acceptProxyProtocol\": true,\r\n          \"path\": \"/vlws\"\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"@vmess-ws\",\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vmess-ws\",\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n            \"level\": 0\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"none\",\r\n        \"wsSettings\": {\r\n          \"acceptProxyProtocol\": true,\r\n          \"path\": \"/vmws\"\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"@trojan-ws\", //trojan+ws listener process\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@trojan-ws\",\r\n            \"password\": \"desdemona99\",\r\n            \"level\": 0\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"none\",\r\n        \"wsSettings\": {\r\n          \"acceptProxyProtocol\": true, //Enable PROXY protocol reception, receive the real source IP and port\r\n          \"path\": \"/trojanws\" //Change to your own path\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"shadowsocks-ws\",\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": 4001,\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"email\": \"general@shadowsocks-ws\",\r\n        \"method\": \"chacha20-ietf-poly1305\",\r\n        \"password\": \"desdemona99\",\r\n        \"level\": 0\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"none\",\r\n        \"wsSettings\": {\r\n          \"path\": \"/ssws\"\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n    //                               TCP + http obfs (VLESS - VMESS - TROJAN - ShadowSocks)                               //\r\n    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n    {\r\n      \"listen\": \"@trojan-tcp\", //trojan+tcp listening process\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@trojan-tcp\",\r\n            \"password\": \"desdemona99\",\r\n            \"level\": 0\r\n          }\r\n        ],\r\n        \"fallbacks\": [\r\n          {\r\n            // if it was not a valid trojan reuqest, for example the trojan password was wrong, pass it to the NGINX HTTP2 cleartext UDS\r\n            \"dest\": \"/dev/shm/h2c.sock\",\r\n            \"xver\": 2 //Enable PROXY protocol sending, and send the real source IP and port to Nginx. 1 or 2 indicates the PROXY protocol version. Consistent with the above, configuration 2 is recommended.\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"security\": \"none\",\r\n        \"tcpSettings\": {\r\n          \"acceptProxyProtocol\": true //Enable PROXY protocol reception, receive the real source IP and port before vless+tcp+tls fallback.\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"@vless-tcp\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vless-tcp\",\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n            \"level\": 0\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"security\": \"none\",\r\n        \"tcpSettings\": {\r\n          \"acceptProxyProtocol\": true,\r\n          \"header\": {\r\n            \"type\": \"http\",\r\n            \"request\": {\r\n              \"path\": [\r\n                \"/vltc\"\r\n              ]\r\n            }\r\n          }\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"@vmess-tcp\",\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vmess-tcp\",\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n            \"level\": 0\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"security\": \"none\",\r\n        \"tcpSettings\": {\r\n          \"acceptProxyProtocol\": true,\r\n          \"header\": {\r\n            \"type\": \"http\",\r\n            \"request\": {\r\n              \"path\": [\r\n                \"/vmtc\"\r\n              ] //,\r\n              // \"headers\": {\r\n              //   \"Host\": [\"www.varzesh3.com\"]\r\n              // }\r\n            }\r\n          }\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"shadowsocks-tcp\",\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": 4002,\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"method\": \"chacha20-ietf-poly1305\",\r\n        \"password\": \"desdemona99\",\r\n        \"email\": \"general@shadowsocks-tcp\",\r\n        \"level\": 0\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"security\": \"none\",\r\n        \"tcpSettings\": {\r\n          \"header\": {\r\n            \"type\": \"http\",\r\n            \"request\": {\r\n              \"path\": [\r\n                \"/sstc\"\r\n              ]\r\n            }\r\n          }\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n    //        GRPC (VLESS - VMESS - TROJAN - SHADOWSOCKS) (Nginx routes to them based on `serviceName`(HTTP2 Path) )      //\r\n    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n    {\r\n      \"tag\": \"trojan-grpc\",\r\n      \"listen\": \"127.0.0.1\", // listen on localhost\r\n      \"port\": 3001,\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@trojan-grpc\",\r\n            \"password\": \"desdemona99\",\r\n            \"level\": 0\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"security\": \"none\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"trgrpc\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"vless-grpc\",\r\n      \"listen\": \"127.0.0.1\", // listen on localhost\r\n      \"port\": 3002,\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vless-grpc\",\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n            \"level\": 0\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"security\": \"none\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"vlgrpc\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"vmess-grpc\",\r\n      \"listen\": \"127.0.0.1\", // listen on localhost\r\n      \"port\": 3003,\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vmess-grpc\",\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\", //Change to your own UUID\r\n            \"level\": 0\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"security\": \"none\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"vmgrpc\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"127.0.0.1\", //Only listen on localhost\r\n      \"port\": 3004,\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"method\": \"chacha20-ietf-poly1305\",\r\n        \"password\": \"desdemona99\", //Change to your own password\r\n        \"email\": \"2011@gmail.com\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"security\": \"none\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"ssgrpc\" //Change to your own gRPC service name, similar to Path in HTTP/2.\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n    //                                     H2 (VLESS - VMESS - TROJAN - SHADOWSOCKS)                                   //\r\n    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r\n    {\r\n      \"listen\": \"@trojan-h2\",\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@trojan-h2\",\r\n            \"password\": \"desdemona99\",\r\n            \"level\": 0\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"h2\",\r\n        \"security\": \"none\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/trh2\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"@vless-h2\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vless-h2\", //Change to your own email\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\", //Change to your own UUID\r\n            \"level\": 0\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"h2\",\r\n        \"security\": \"none\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/vlh2\"\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"@vmess-h2\",\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"email\": \"general@vmess-h2\",\r\n            \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\",\r\n            \"level\": 0\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"h2\",\r\n        \"security\": \"none\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/vmh2\"\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"shadowsocks-h2\",\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": 4003,\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"method\": \"chacha20-ietf-poly1305\",\r\n        \"password\": \"desdemona99\", //Change to your own password\r\n        \"email\": \"general@shadowsocks-h2\",\r\n        \"level\": 0\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"h2\",\r\n        \"security\": \"none\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/ssh2\"\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    } //,\r\n    // {\r\n    //   \"port\": 80, // this is http entrypoint, uncomment to enable vless-ws, vless-tcp, vmess-ws, v,ess-tcp, shadowwsocks-ws and shadowsocks-tcp on HTTP\r\n    //   \"protocol\": \"vless\",\r\n    //   \"settings\": {\r\n    //     \"clients\": [\r\n    //       {\r\n    //         \"id\": \"90e4903e-66a4-45f7-abda-fd5d5ed7f797\"\r\n    //       }\r\n    //     ],\r\n    //     \"fallbacks\": [\r\n    //       {\r\n    //         \"path\": \"/vlws\",\r\n    //         \"dest\": \"@vless-ws\",\r\n    //         \"xver\": 2\r\n    //       },\r\n    //       {\r\n    //         \"path\": \"/vmws\",\r\n    //         \"dest\": \"@vmess-ws\", // the same vmess-ws used in 443 TLS entrypint is used here as well\r\n    //         \"xver\": 2\r\n    //       },\r\n    //       {\r\n    //         \"path\": \"/vltc\",\r\n    //         \"dest\": \"@vless-tcp\",\r\n    //         \"xver\": 2\r\n    //       },\r\n    //       {\r\n    //         \"path\": \"/vmtc\",\r\n    //         \"dest\": \"@vmess-tcp\",\r\n    //         \"xver\": 2\r\n    //       },\r\n    //       {\r\n    //         \"dest\": \"/dev/shm/h1.sock\", // defaults to Nginx HTTP1.1 listener\r\n    //         \"xver\": 2\r\n    //       },\r\n    //       {\r\n    //         \"path\": \"/ssws\",\r\n    //         \"dest\": 4001\r\n    //       },\r\n    //       {\r\n    //         \"path\": \"/sstc\",\r\n    //         \"dest\": 4002\r\n    //       }\r\n    //     ],\r\n    //     \"decryption\": \"none\"\r\n    //   },\r\n    //   \"streamSettings\": {\r\n    //     \"network\": \"tcp\",\r\n    //     \"security\": \"none\"\r\n    //   },\r\n    //   \"sniffing\": {\r\n    //     \"enabled\": true,\r\n    //     \"destOverride\": [\"http\", \"tls\"]\r\n    //   }\r\n    // }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"protocol\": \"blackhole\",\r\n      \"tag\": \"blocked\"\r\n    },\r\n    {\r\n      // A DNS Cache can be setup and added here to imporve performance (the corresponding rule should be uncommented)\r\n      \"tag\": \"DNS-Internal\",\r\n      \"protocol\": \"dns\",\r\n      \"settings\": {\r\n        \"address\": \"127.0.0.53\",\r\n        \"port\": 53\r\n      }\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"AsIs\",\r\n    \"rules\": [\r\n      {\r\n        \"inboundTag\": [\r\n          \"api\"\r\n        ],\r\n        \"outboundTag\": \"api\"\r\n      },\r\n      // {\r\n      //   // DNS Cache rule\r\n      //   \"port\": 53,\r\n      //   \"network\": \"tcp,udp\",\r\n      //   \"outboundTag\": \"DNS-Internal\"\r\n      // },\r\n      {\r\n        \"outboundTag\": \"blocked\",\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ]\r\n      },\r\n      {\r\n        \"outboundTag\": \"blocked\", // Block BitTorrent protocol\r\n        \"protocol\": [\r\n          \"bittorrent\"\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "info"
            },
            "api": {
                "services": [
                    "HandlerService",
                    "LoggerService",
                    "StatsService"
                ],
                "tag": "api"
            },
            "stats": {},
            "policy": {
                "levels": {
                    "0": {
                        "statsUserUplink": true,
                        "statsUserDownlink": true
                    }
                },
                "system": {
                    "statsInboundUplink": true,
                    "statsInboundDownlink": true,
                    "statsOutboundUplink": true,
                    "statsOutboundDownlink": true
                }
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 62789,
                    "protocol": "dokodemo-door",
                    "settings": {
                        "address": "127.0.0.1"
                    },
                    "tag": "api",
                    "sniffing": null
                },
                {
                    "tag": "Vless-TCP-XTLS",
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vless-tcp-xtls",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "flow": "xtls-rprx-vision",
                                "level": 0
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "name": "trh2o.example.com",
                                "alpn": "h2",
                                "dest": "@trojan-h2"
                            },
                            {
                                "name": "vlh2o.example.com",
                                "alpn": "h2",
                                "dest": "@vless-h2"
                            },
                            {
                                "name": "vmh2o.example.com",
                                "alpn": "h2",
                                "dest": "@vmess-h2"
                            },
                            {
                                "name": "ssh2o.example.com",
                                "alpn": "h2",
                                "dest": 4003
                            },
                            {
                                "path": "/vlws",
                                "dest": "@vless-ws",
                                "xver": 2
                            },
                            {
                                "path": "/vmws",
                                "dest": "@vmess-ws",
                                "xver": 2
                            },
                            {
                                "path": "/trojanws",
                                "dest": "@trojan-ws",
                                "xver": 2
                            },
                            {
                                "path": "/ssws",
                                "dest": 4001
                            },
                            {
                                "path": "/vltc",
                                "dest": "@vless-tcp",
                                "xver": 2
                            },
                            {
                                "path": "/vmtc",
                                "dest": "@vmess-tcp",
                                "xver": 2
                            },
                            {
                                "path": "/sstc",
                                "dest": 4002
                            },
                            {
                                "alpn": "h2",
                                "dest": "@trojan-tcp",
                                "xver": 2
                            },
                            {
                                "dest": "/dev/shm/h1.sock",
                                "xver": 2
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "certificates": [
                                {
                                    "ocspStapling": 3600,
                                    "certificateFile": "/etc/ssl/example.com/domain.pem",
                                    "keyFile": "/etc/ssl/example.com/domain-key.pem"
                                },
                                {
                                    "ocspStapling": 3600,
                                    "certificateFile": "/etc/ssl/behindcdn.com/domain.pem",
                                    "keyFile": "/etc/ssl/behindcdn.com/domain-key.pem"
                                }
                            ],
                            "minVersion": "1.2",
                            "cipherSuites": "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
                            "alpn": [
                                "h2",
                                "http/1.1"
                            ]
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "@vless-ws",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vless-ws",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "level": 0
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "none",
                        "wsSettings": {
                            "acceptProxyProtocol": true,
                            "path": "/vlws"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "@vmess-ws",
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vmess-ws",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "level": 0
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "none",
                        "wsSettings": {
                            "acceptProxyProtocol": true,
                            "path": "/vmws"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "@trojan-ws",
                    "protocol": "trojan",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@trojan-ws",
                                "password": "desdemona99",
                                "level": 0
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "none",
                        "wsSettings": {
                            "acceptProxyProtocol": true,
                            "path": "/trojanws"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "tag": "shadowsocks-ws",
                    "listen": "127.0.0.1",
                    "port": 4001,
                    "protocol": "shadowsocks",
                    "settings": {
                        "email": "general@shadowsocks-ws",
                        "method": "chacha20-ietf-poly1305",
                        "password": "desdemona99",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "none",
                        "wsSettings": {
                            "path": "/ssws"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "@trojan-tcp",
                    "protocol": "trojan",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@trojan-tcp",
                                "password": "desdemona99",
                                "level": 0
                            }
                        ],
                        "fallbacks": [
                            {
                                "dest": "/dev/shm/h2c.sock",
                                "xver": 2
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "none",
                        "tcpSettings": {
                            "acceptProxyProtocol": true
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "@vless-tcp",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vless-tcp",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "level": 0
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "none",
                        "tcpSettings": {
                            "acceptProxyProtocol": true,
                            "header": {
                                "type": "http",
                                "request": {
                                    "path": [
                                        "/vltc"
                                    ]
                                }
                            }
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "@vmess-tcp",
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vmess-tcp",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "level": 0
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "none",
                        "tcpSettings": {
                            "acceptProxyProtocol": true,
                            "header": {
                                "type": "http",
                                "request": {
                                    "path": [
                                        "/vmtc"
                                    ]
                                }
                            }
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "tag": "shadowsocks-tcp",
                    "listen": "127.0.0.1",
                    "port": 4002,
                    "protocol": "shadowsocks",
                    "settings": {
                        "method": "chacha20-ietf-poly1305",
                        "password": "desdemona99",
                        "email": "general@shadowsocks-tcp",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "none",
                        "tcpSettings": {
                            "header": {
                                "type": "http",
                                "request": {
                                    "path": [
                                        "/sstc"
                                    ]
                                }
                            }
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "tag": "trojan-grpc",
                    "listen": "127.0.0.1",
                    "port": 3001,
                    "protocol": "trojan",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@trojan-grpc",
                                "password": "desdemona99",
                                "level": 0
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "security": "none",
                        "grpcSettings": {
                            "serviceName": "trgrpc"
                        }
                    }
                },
                {
                    "tag": "vless-grpc",
                    "listen": "127.0.0.1",
                    "port": 3002,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vless-grpc",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "level": 0
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "security": "none",
                        "grpcSettings": {
                            "serviceName": "vlgrpc"
                        }
                    }
                },
                {
                    "tag": "vmess-grpc",
                    "listen": "127.0.0.1",
                    "port": 3003,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vmess-grpc",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "level": 0
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "security": "none",
                        "grpcSettings": {
                            "serviceName": "vmgrpc"
                        }
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": 3004,
                    "protocol": "shadowsocks",
                    "settings": {
                        "method": "chacha20-ietf-poly1305",
                        "password": "desdemona99",
                        "email": "2011@gmail.com"
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "security": "none",
                        "grpcSettings": {
                            "serviceName": "ssgrpc"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "@trojan-h2",
                    "protocol": "trojan",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@trojan-h2",
                                "password": "desdemona99",
                                "level": 0
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "h2",
                        "security": "none",
                        "httpSettings": {
                            "path": "/trh2"
                        }
                    }
                },
                {
                    "listen": "@vless-h2",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vless-h2",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "level": 0
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "h2",
                        "security": "none",
                        "httpSettings": {
                            "path": "/vlh2"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "@vmess-h2",
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "email": "general@vmess-h2",
                                "id": "90e4903e-66a4-45f7-abda-fd5d5ed7f797",
                                "level": 0
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "h2",
                        "security": "none",
                        "httpSettings": {
                            "path": "/vmh2"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "tag": "shadowsocks-h2",
                    "listen": "127.0.0.1",
                    "port": 4003,
                    "protocol": "shadowsocks",
                    "settings": {
                        "method": "chacha20-ietf-poly1305",
                        "password": "desdemona99",
                        "email": "general@shadowsocks-h2",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "h2",
                        "security": "none",
                        "httpSettings": {
                            "path": "/ssh2"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "protocol": "blackhole",
                    "tag": "blocked"
                },
                {
                    "tag": "DNS-Internal",
                    "protocol": "dns",
                    "settings": {
                        "address": "127.0.0.53",
                        "port": 53
                    }
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "inboundTag": [
                            "api"
                        ],
                        "outboundTag": "api"
                    },
                    {
                        "outboundTag": "blocked",
                        "ip": [
                            "geoip:private"
                        ]
                    },
                    {
                        "outboundTag": "blocked",
                        "protocol": [
                            "bittorrent"
                        ]
                    }
                ]
            }
        }
    },
    {
        "id": "examples-hysteria2-client-jsonc",
        "title": "Hysteria2/client",
        "path": "examples/Hysteria2/client.jsonc",
        "role": "client",
        "protocols": [
            "hysteria"
        ],
        "transports": [
            "hysteria"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "Hysteria transport"
        ],
        "raw": "{\r\n    \"outbounds\": [\r\n        {\r\n            \"tag\": \"proxy\",\r\n            \"protocol\": \"hysteria\",\r\n            \"settings\": {\r\n                \"address\": \"server ip\",\r\n                \"port\": 11451,\r\n                \"version\": 2\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"hysteria\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"114514\" // SNI\r\n                },\r\n                \"hysteriaSettings\": {\r\n                    \"version\": 2,\r\n                    \"auth\": \"114514\" // Hysteria 密码\r\n                },\r\n                \"finalmask\": {\r\n                    \"udp\": [\r\n                        {\r\n                            \"type\": \"salamander\",\r\n                            \"settings\": {\r\n                                \"password\": \"114514\" // salamander 混淆密码\r\n                            }\r\n                        }\r\n                    ],\r\n                    \"quicParams\": {\r\n                        \"congestion\": \"bbr\", // 可改为 brutal，若如此做请自行修改下面宽带\r\n                        \"brutalUp\": \"30 mbps\",\r\n                        \"brutalDown\": \"100 mbps\"\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "outbounds": [
                {
                    "tag": "proxy",
                    "protocol": "hysteria",
                    "settings": {
                        "address": "server ip",
                        "port": 11451,
                        "version": 2
                    },
                    "streamSettings": {
                        "network": "hysteria",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "114514"
                        },
                        "hysteriaSettings": {
                            "version": 2,
                            "auth": "114514"
                        },
                        "finalmask": {
                            "udp": [
                                {
                                    "type": "salamander",
                                    "settings": {
                                        "password": "114514"
                                    }
                                }
                            ],
                            "quicParams": {
                                "congestion": "bbr",
                                "brutalUp": "30 mbps",
                                "brutalDown": "100 mbps"
                            }
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-hysteria2-server-jsonc",
        "title": "Hysteria2/server",
        "path": "examples/Hysteria2/server.jsonc",
        "role": "server",
        "protocols": [
            "hysteria"
        ],
        "transports": [
            "hysteria"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "Hysteria transport"
        ],
        "raw": "{\r\n    \"inbounds\": [\r\n        {\r\n            \"tag\": \"IN-Hysteria2\",\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 11451,\r\n            \"protocol\": \"hysteria\",\r\n            \"settings\": {\r\n                \"version\": 2\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"hysteria\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"114514\", // SNI\r\n                    \"alpn\": [\r\n                        \"h3\"\r\n                    ], // 这里需要显式写 h3 ，请注意。\r\n                    \"certificates\": [\r\n                        {\r\n                            \"usage\": \"encipherment\",\r\n                            \"certificateFile\": \"/114514/cert.pem\",\r\n                            \"keyFile\": \"/114514/key.pem\"\r\n                        }\r\n                    ] // 证书设置\r\n                },\r\n                \"hysteriaSettings\": {\r\n                    \"version\": 2,\r\n                    \"auth\": \"114514\" // Hysteria 密码\r\n                },\r\n                \"finalmask\": {\r\n                    \"udp\": [\r\n                        {\r\n                            \"type\": \"salamander\",\r\n                            \"settings\": {\r\n                                \"password\": \"114514\" // salamander 混淆密码\r\n                            }\r\n                        }\r\n                    ], // salamander 混淆，不需要可以删除此项\r\n                    \"quicParams\": {\r\n                        \"congestion\": \"brutal\",\r\n                        \"brutalUp\": \"100 mbps\",\r\n                        \"brutalDown\": \"100 mbps\" // 当与客户端协商启用 brutal ，服务器端使用的速率\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "inbounds": [
                {
                    "tag": "IN-Hysteria2",
                    "listen": "0.0.0.0",
                    "port": 11451,
                    "protocol": "hysteria",
                    "settings": {
                        "version": 2
                    },
                    "streamSettings": {
                        "network": "hysteria",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "114514",
                            "alpn": [
                                "h3"
                            ],
                            "certificates": [
                                {
                                    "usage": "encipherment",
                                    "certificateFile": "/114514/cert.pem",
                                    "keyFile": "/114514/key.pem"
                                }
                            ]
                        },
                        "hysteriaSettings": {
                            "version": 2,
                            "auth": "114514"
                        },
                        "finalmask": {
                            "udp": [
                                {
                                    "type": "salamander",
                                    "settings": {
                                        "password": "114514"
                                    }
                                }
                            ],
                            "quicParams": {
                                "congestion": "brutal",
                                "brutalUp": "100 mbps",
                                "brutalDown": "100 mbps"
                            }
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-mitm-domain-fronting-config-jsonc",
        "title": "MITM-Domain-Fronting/config",
        "path": "examples/MITM-Domain-Fronting/config.jsonc",
        "role": "mixed",
        "protocols": [
            "dokodemo-door",
            "socks",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"debug\"\r\n    },\r\n    \"inbounds\": [\r\n        // 请求在该入站中被解密\r\n        {\r\n            \"port\": 4431,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"tag\": \"tls-decrypt\",\r\n            \"protocol\": \"dokodemo-door\",\r\n            \"settings\": {\r\n                \"network\": \"tcp\",\r\n                // 从 TLS 的 SNI 中读出目标地址并应用至请求，用于后续路由\r\n                \"followRedirect\": true\r\n            },\r\n            \"streamSettings\": {\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    // 根据实际情况填写，这里适合绝大多数情况，如果你的网站仅支持 http/1.1, 就只保留 http/1.1\r\n                    // ps: 如果你选择了 http/1.1 那么你甚至可以用后续的路由模块屏蔽部分路径\r\n                    \"alpn\": [\r\n                        \"h2\",\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"certificates\": [\r\n                        {\r\n                            \"usage\": \"issue\",\r\n                            \"buildChain\": true,\r\n                            // 下面的证书和私钥使用 xray tls cert -ca 命令生成，或者你的自签名证书也行\r\n                            // 这会生成一个 CA 证书，每个新的要被 MITM 网站请求都会单独用这个 CA 签发一张临时证书\r\n                            // 所以你只需要在系统信任这一张证书就可以了，或者你可以忍得了浏览器的红标无视风险继续访问也行\r\n                            \"certificate\": [],\r\n                            \"key\": []\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        },\r\n        // 真正用到的入站\r\n        {\r\n            \"port\": 10801,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"tag\": \"socks-in\",\r\n            \"protocol\": \"socks\",\r\n            \"sniffing\": {\r\n                // 一般情况得开\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\"\r\n                ]\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        // 请求在该出站被强行重定向到 tls-decrypt 进行解密\r\n        {\r\n            \"tag\": \"redirect-out\",\r\n            \"protocol\": \"freedom\",\r\n            \"settings\": {\r\n                \"redirect\": \"127.0.0.1:4431\"\r\n            }\r\n        },\r\n        // 明文请求在这里被重新加密为正常 HTTPS 请求\r\n        {\r\n            \"tag\": \"tls-repack\",\r\n            \"protocol\": \"freedom\",\r\n            \"settings\": {\r\n                // 你要连接到的服务器的最终IP以及端口，大多数情况下需要手动寻找这样允许域前置的IP\r\n                \"redirect\": \"104.20.19.168:443\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    // fromMitm 会在客户端发送仅有 alpn http/1.1(大多数时候是wss) 的情况下使用同样的alpn, 需要 v25.2.21+\r\n                    // 旧版本没这个选项别直接把这玩意发出去了，从上面的alpn选项复制下来(当然更新版本最好)\r\n                    \"alpn\": [\r\n                        \"fromMitm\"\r\n                    ],\r\n                    // 你要发送的假 SNI, 根据你的网站接受的 SNI 而定\r\n                    // 当然你也可以留空或者我这样乱填个ip, 这样就不会有任何 SNI 扩展被发送，前提是你的网站接受无 SNI 请求\r\n                    \"serverName\": \"11.45.1.4\",\r\n                    // 你期望服务端返回证书里的包含的域名，需要 v25.2.21+\r\n                    // 如果是旧版本只能考虑开允许不安全，然后可以考虑文档中其他校验证书的方法进行验证\r\n                    \"verifyPeerCertInNames\": [\r\n                        \"e-hentai.org\",\r\n                        // 特殊选项，尝试按从 dokodemo-door 入站进来的 SNI 对远端证书进行验证（或取自内置 DNS 的 DoH h2c hostname）\r\n                        \"fromMitm\"\r\n                    ]\r\n                }\r\n            }\r\n        },\r\n        // 无辜流量直接放行\r\n        {\r\n            \"tag\": \"direct\",\r\n            \"protocol\": \"freedom\"\r\n        }\r\n    ],\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"inboundTag\": [\r\n                    \"tls-decrypt\"\r\n                ],\r\n                // tls-repark 中定义了一些参数(比如IP和SNI), 不同的网站可能需要不同的参数\r\n                // 要支持更多的网站，可以新建更多的此类 freedom 出站，然后在这里把不同的明文请求按需求路由到不同的出站重新打包回 HTTPS\r\n                // 这里的域名来源就是 tls-decrypt 入站的 followRedirect, 所以一个本地端口就可以接受任何网站的请求并在核心中这样区分开\r\n                \"domain\": [\r\n                    \"e-hentai.org\"\r\n                ],\r\n                \"outboundTag\": \"tls-repack\"\r\n            },\r\n            {\r\n                \"inboundTag\": [\r\n                    \"socks-in\"\r\n                ],\r\n                // 你要 mitm 的网址\r\n                \"domain\": [\r\n                    \"e-hentai.org\"\r\n                ],\r\n                \"outboundTag\": \"redirect-out\"\r\n            },\r\n            {\r\n                \"inboundTag\": [\r\n                    \"socks-in\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    }\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "port": 4431,
                    "listen": "127.0.0.1",
                    "tag": "tls-decrypt",
                    "protocol": "dokodemo-door",
                    "settings": {
                        "network": "tcp",
                        "followRedirect": true
                    },
                    "streamSettings": {
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "h2",
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "usage": "issue",
                                    "buildChain": true,
                                    "certificate": [],
                                    "key": []
                                }
                            ]
                        }
                    }
                },
                {
                    "port": 10801,
                    "listen": "127.0.0.1",
                    "tag": "socks-in",
                    "protocol": "socks",
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "redirect-out",
                    "protocol": "freedom",
                    "settings": {
                        "redirect": "127.0.0.1:4431"
                    }
                },
                {
                    "tag": "tls-repack",
                    "protocol": "freedom",
                    "settings": {
                        "redirect": "104.20.19.168:443"
                    },
                    "streamSettings": {
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "fromMitm"
                            ],
                            "serverName": "11.45.1.4",
                            "verifyPeerCertInNames": [
                                "e-hentai.org",
                                "fromMitm"
                            ]
                        }
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom"
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "inboundTag": [
                            "tls-decrypt"
                        ],
                        "domain": [
                            "e-hentai.org"
                        ],
                        "outboundTag": "tls-repack"
                    },
                    {
                        "inboundTag": [
                            "socks-in"
                        ],
                        "domain": [
                            "e-hentai.org"
                        ],
                        "outboundTag": "redirect-out"
                    },
                    {
                        "inboundTag": [
                            "socks-in"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-reverseproxy-shadowsocks-2022-bridge-jsonc",
        "title": "ReverseProxy/Shadowsocks-2022/bridge",
        "path": "examples/ReverseProxy/Shadowsocks-2022/bridge.jsonc",
        "role": "client",
        "protocols": [
            "shadowsocks",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "reverse",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"reverse\": {\r\n    \"bridges\": [\r\n      {\r\n        \"tag\": \"bridge\",\r\n        \"domain\": \"reverse.proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"interconn\",\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"{{ protal.address }}\",\r\n            \"port\": 65510,\r\n            \"method\": \"2022-blake3-aes-256-gcm\",\r\n            \"password\": \"{{ psk interconn }}\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\"\r\n      }\r\n    },\r\n    {\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {},\r\n      \"tag\": \"out\"\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"rules\": [\r\n      {\r\n        \"inboundTag\": [\r\n          \"bridge\"\r\n        ],\r\n        \"domain\": [\r\n          \"full:reverse.proxy\"\r\n        ],\r\n        \"outboundTag\": \"interconn\"\r\n      },\r\n      {\r\n        \"inboundTag\": [\r\n          \"bridge\"\r\n        ],\r\n        \"outboundTag\": \"out\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "reverse": {
                "bridges": [
                    {
                        "tag": "bridge",
                        "domain": "reverse.proxy"
                    }
                ]
            },
            "outbounds": [
                {
                    "tag": "interconn",
                    "protocol": "shadowsocks",
                    "settings": {
                        "servers": [
                            {
                                "address": "{{ protal.address }}",
                                "port": 65510,
                                "method": "2022-blake3-aes-256-gcm",
                                "password": "{{ psk interconn }}"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp"
                    }
                },
                {
                    "protocol": "freedom",
                    "settings": {},
                    "tag": "out"
                }
            ],
            "routing": {
                "rules": [
                    {
                        "inboundTag": [
                            "bridge"
                        ],
                        "domain": [
                            "full:reverse.proxy"
                        ],
                        "outboundTag": "interconn"
                    },
                    {
                        "inboundTag": [
                            "bridge"
                        ],
                        "outboundTag": "out"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-reverseproxy-shadowsocks-2022-client-jsonc",
        "title": "ReverseProxy/Shadowsocks-2022/client",
        "path": "examples/ReverseProxy/Shadowsocks-2022/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "shadowsocks"
        ],
        "transports": [],
        "securities": [],
        "features": [
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPIfNonMatch\",\r\n    \"rules\": [\r\n      {\r\n        \"port\": \"0-65535\",\r\n        \"outboundTag\": \"proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"2080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true,\r\n        \"ip\": \"127.0.0.1\"\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"2081\",\r\n      \"protocol\": \"http\"\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"{{ protal.address }}\",\r\n            \"port\": 65511,\r\n            \"method\": \"2022-blake3-aes-256-gcm\",\r\n            \"password\": \"{{ psk external }}\"\r\n          }\r\n        ]\r\n      }\r\n    }\r\n  ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "port": "0-65535",
                        "outboundTag": "proxy"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "2080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "2081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "shadowsocks",
                    "settings": {
                        "servers": [
                            {
                                "address": "{{ protal.address }}",
                                "port": 65511,
                                "method": "2022-blake3-aes-256-gcm",
                                "password": "{{ psk external }}"
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "examples-reverseproxy-shadowsocks-2022-portal-jsonc",
        "title": "ReverseProxy/Shadowsocks-2022/portal",
        "path": "examples/ReverseProxy/Shadowsocks-2022/portal.jsonc",
        "role": "server",
        "protocols": [
            "shadowsocks"
        ],
        "transports": [
            "tcp,udp"
        ],
        "securities": [],
        "features": [
            "reverse",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"reverse\": {\r\n    \"portals\": [\r\n      {\r\n        \"tag\": \"portal\",\r\n        \"domain\": \"reverse.proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"tag\": \"external\",\r\n      \"port\": 65511,\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"method\": \"2022-blake3-aes-256-gcm\",\r\n        \"password\": \"{{ psk external }}\",\r\n        \"network\": \"tcp,udp\"\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"interconn\",\r\n      \"port\": 65510,\r\n      \"protocol\": \"shadowsocks\",\r\n      \"settings\": {\r\n        \"method\": \"2022-blake3-aes-256-gcm\",\r\n        \"password\": \"{{ psk interconn }}\",\r\n        \"network\": \"tcp,udp\"\r\n      }\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"rules\": [\r\n      {\r\n        \"inboundTag\": [\r\n          \"external\"\r\n        ],\r\n        \"outboundTag\": \"portal\"\r\n      },\r\n      {\r\n        \"inboundTag\": [\r\n          \"interconn\"\r\n        ],\r\n        \"domain\": [],\r\n        \"outboundTag\": \"portal\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "reverse": {
                "portals": [
                    {
                        "tag": "portal",
                        "domain": "reverse.proxy"
                    }
                ]
            },
            "inbounds": [
                {
                    "tag": "external",
                    "port": 65511,
                    "protocol": "shadowsocks",
                    "settings": {
                        "method": "2022-blake3-aes-256-gcm",
                        "password": "{{ psk external }}",
                        "network": "tcp,udp"
                    }
                },
                {
                    "tag": "interconn",
                    "port": 65510,
                    "protocol": "shadowsocks",
                    "settings": {
                        "method": "2022-blake3-aes-256-gcm",
                        "password": "{{ psk interconn }}",
                        "network": "tcp,udp"
                    }
                }
            ],
            "routing": {
                "rules": [
                    {
                        "inboundTag": [
                            "external"
                        ],
                        "outboundTag": "portal"
                    },
                    {
                        "inboundTag": [
                            "interconn"
                        ],
                        "domain": [],
                        "outboundTag": "portal"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-reverseproxy-vless-tcp-xtls-ws-bridge-jsonc",
        "title": "ReverseProxy/VLESS-TCP-XTLS-WS/bridge",
        "path": "examples/ReverseProxy/VLESS-TCP-XTLS-WS/bridge.jsonc",
        "role": "client",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket",
            "reverse",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"reverse\": {\r\n    \"bridges\": [\r\n      {\r\n        \"tag\": \"bridge\",\r\n        \"domain\": \"reverse.proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"interconn\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"reverse.example\", // 换成你的域名或 IP\r\n        \"port\": 443,\r\n        \"id\": \"\", // 填写你的 UUID\r\n        \"encryption\": \"none\",\r\n        \"level\": 0\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"serverName\": \"reverse.example\" // 换成你的域名\r\n        },\r\n        \"wsSettings\": {\r\n          \"path\": \"/interconn\" //对应 portal 中 interconn 的 path\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {},\r\n      \"tag\": \"out\"\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"rules\": [\r\n      {\r\n        \"inboundTag\": [\r\n          \"bridge\"\r\n        ],\r\n        \"domain\": [\r\n          \"full:reverse.proxy\"\r\n        ],\r\n        \"outboundTag\": \"interconn\"\r\n      },\r\n      {\r\n        \"inboundTag\": [\r\n          \"bridge\"\r\n        ],\r\n        \"outboundTag\": \"out\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "reverse": {
                "bridges": [
                    {
                        "tag": "bridge",
                        "domain": "reverse.proxy"
                    }
                ]
            },
            "outbounds": [
                {
                    "tag": "interconn",
                    "protocol": "vless",
                    "settings": {
                        "address": "reverse.example",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "reverse.example"
                        },
                        "wsSettings": {
                            "path": "/interconn"
                        }
                    }
                },
                {
                    "protocol": "freedom",
                    "settings": {},
                    "tag": "out"
                }
            ],
            "routing": {
                "rules": [
                    {
                        "inboundTag": [
                            "bridge"
                        ],
                        "domain": [
                            "full:reverse.proxy"
                        ],
                        "outboundTag": "interconn"
                    },
                    {
                        "inboundTag": [
                            "bridge"
                        ],
                        "outboundTag": "out"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-reverseproxy-vless-tcp-xtls-ws-client-tcp-jsonc",
        "title": "ReverseProxy/VLESS-TCP-XTLS-WS/client_tcp",
        "path": "examples/ReverseProxy/VLESS-TCP-XTLS-WS/client_tcp.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "reverse",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPIfNonMatch\",\r\n    \"rules\": [\r\n      {\r\n        \"port\": \"0-65535\",\r\n        \"outboundTag\": \"proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"2080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true,\r\n        \"ip\": \"127.0.0.1\"\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"2081\",\r\n      \"protocol\": \"http\"\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"proxy\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"reverse.example\", // 换成你的域名或服务器 IP\r\n        \"port\": 443,\r\n        \"id\": \"\", // 填写你的 UUID\r\n        \"flow\": \"xtls-rprx-vision\",\r\n        \"encryption\": \"none\",\r\n        \"level\": 0\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"serverName\": \"reverse.example\" // 换成你的域名\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"protocol\": \"freedom\",\r\n      \"tag\": \"direct\"\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "port": "0-65535",
                        "outboundTag": "proxy"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "2080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "2081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "tag": "proxy",
                    "protocol": "vless",
                    "settings": {
                        "address": "reverse.example",
                        "port": 443,
                        "id": "",
                        "flow": "xtls-rprx-vision",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "reverse.example"
                        }
                    }
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-reverseproxy-vless-tcp-xtls-ws-client-ws-jsonc",
        "title": "ReverseProxy/VLESS-TCP-XTLS-WS/client_ws",
        "path": "examples/ReverseProxy/VLESS-TCP-XTLS-WS/client_ws.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket",
            "reverse",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPIfNonMatch\",\r\n    \"rules\": [\r\n      {\r\n        \"port\": \"0-65535\",\r\n        \"outboundTag\": \"proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"2080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true,\r\n        \"ip\": \"127.0.0.1\"\r\n      }\r\n    },\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": \"2081\",\r\n      \"protocol\": \"http\"\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"proxy\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"reverse.example\", // 换成你的域名或服务器 IP\r\n        \"port\": 443,\r\n        \"id\": \"\", // 填写你的 UUID\r\n        \"encryption\": \"none\",\r\n        \"level\": 0\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"serverName\": \"reverse.example\" // 换成你的域名\r\n        },\r\n        \"wsSettings\": {\r\n          \"path\": \"/externalws\" //对应 portal 中 externalws 的 path\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"protocol\": \"freedom\",\r\n      \"tag\": \"direct\"\r\n    }\r\n  ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "port": "0-65535",
                        "outboundTag": "proxy"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "2080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "2081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "tag": "proxy",
                    "protocol": "vless",
                    "settings": {
                        "address": "reverse.example",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "reverse.example"
                        },
                        "wsSettings": {
                            "path": "/externalws"
                        }
                    }
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-reverseproxy-vless-tcp-xtls-ws-portal-jsonc",
        "title": "ReverseProxy/VLESS-TCP-XTLS-WS/portal",
        "path": "examples/ReverseProxy/VLESS-TCP-XTLS-WS/portal.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp",
            "ws"
        ],
        "securities": [
            "tls",
            "none"
        ],
        "features": [
            "TLS",
            "fallbacks",
            "WebSocket",
            "reverse",
            "PROXY protocol",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"reverse\": {\r\n    \"portals\": [\r\n      {\r\n        \"tag\": \"portal\",\r\n        \"domain\": \"reverse.proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"tag\": \"external\",\r\n      \"port\": 443,\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\", //填写你的 UUID\r\n            \"flow\": \"xtls-rprx-vsion\",\r\n            \"level\": 0,\r\n            \"email\": \"@external\"\r\n          }\r\n        ],\r\n        \"decryption\": \"none\",\r\n        \"fallbacks\": [\r\n          {\r\n            \"dest\": 80\r\n          },\r\n          {\r\n            \"path\": \"/interconn\", // 对应下面的 interconn 中的 PATH\r\n            \"dest\": 65510,\r\n            \"xver\": 1\r\n          },\r\n          {\r\n            \"path\": \"/externalws\", // 对应下面的 externalws 中的 PATH\r\n            \"dest\": 65511,\r\n            \"xver\": 1\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\",\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"alpn\": [\r\n            \"http/1.1\"\r\n          ],\r\n          \"certificates\": [\r\n            {\r\n              \"certificateFile\": \"./fullchain.crt\", // 换成你的证书，绝对路径\r\n              \"keyFile\": \"./private.key\" // 换成你的私钥，绝对路径\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"externalws\",\r\n      \"port\": 65511,\r\n      \"listen\": \"127.0.0.1\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\", // 填写你的 UUID\r\n            \"level\": 0,\r\n            \"email\": \"@externalws\"\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"none\",\r\n        \"wsSettings\": {\r\n          \"acceptProxyProtocol\": true, // 提醒：若你用 Nginx/Caddy 等反代 WS，需要删掉这行\r\n          \"path\": \"/externalws\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"interconn\",\r\n      \"port\": 65510,\r\n      \"listen\": \"127.0.0.1\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\", // 填写你的 UUID\r\n            \"level\": 0,\r\n            \"email\": \"@interconn\"\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"none\",\r\n        \"wsSettings\": {\r\n          \"acceptProxyProtocol\": true,\r\n          \"path\": \"/interconn\"\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"freedom\",\r\n      \"tag\": \"direct\"\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"rules\": [\r\n      {\r\n        \"inboundTag\": [\r\n          \"external\",\r\n          \"externalws\"\r\n        ],\r\n        // 默认将所有来自 external 的流量转发至bridge\r\n        // 如果仅转发内网设备流量，则取消注释下面三行\r\n        // \"ip\": [\r\n        //   \"geoip:private\"\r\n        // ],\r\n        \"outboundTag\": \"portal\"\r\n      },\r\n      {\r\n        \"inboundTag\": [\r\n          \"interconn\"\r\n        ],\r\n        \"domain\": [],\r\n        \"outboundTag\": \"portal\"\r\n      },\r\n      // 以下路由只会在第一条路由没被匹配到的情况下使用，因此无需额外处理\r\n      {\r\n        \"port\": \"0-65535\",\r\n        \"outboundTag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "reverse": {
                "portals": [
                    {
                        "tag": "portal",
                        "domain": "reverse.proxy"
                    }
                ]
            },
            "inbounds": [
                {
                    "tag": "external",
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "flow": "xtls-rprx-vsion",
                                "level": 0,
                                "email": "@external"
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "dest": 80
                            },
                            {
                                "path": "/interconn",
                                "dest": 65510,
                                "xver": 1
                            },
                            {
                                "path": "/externalws",
                                "dest": 65511,
                                "xver": 1
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "certificateFile": "./fullchain.crt",
                                    "keyFile": "./private.key"
                                }
                            ]
                        }
                    }
                },
                {
                    "tag": "externalws",
                    "port": 65511,
                    "listen": "127.0.0.1",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "@externalws"
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "none",
                        "wsSettings": {
                            "acceptProxyProtocol": true,
                            "path": "/externalws"
                        }
                    }
                },
                {
                    "tag": "interconn",
                    "port": 65510,
                    "listen": "127.0.0.1",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "@interconn"
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "none",
                        "wsSettings": {
                            "acceptProxyProtocol": true,
                            "path": "/interconn"
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ],
            "routing": {
                "rules": [
                    {
                        "inboundTag": [
                            "external",
                            "externalws"
                        ],
                        "outboundTag": "portal"
                    },
                    {
                        "inboundTag": [
                            "interconn"
                        ],
                        "domain": [],
                        "outboundTag": "portal"
                    },
                    {
                        "port": "0-65535",
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-reverseproxy-vmess-tcp-bridge-jsonc",
        "title": "ReverseProxy/Vmess-TCP/bridge",
        "path": "examples/ReverseProxy/Vmess-TCP/bridge.jsonc",
        "role": "client",
        "protocols": [
            "vmess",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "reverse",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"reverse\": {\r\n    \"bridges\": [\r\n      {\r\n        \"tag\": \"bridge\",\r\n        \"domain\": \"reverse.proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"interconn\",\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"address\": \"{{ protal.address }}\",\r\n        \"port\": 65510,\r\n        \"id\": \"{{ uuid }}\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\"\r\n      }\r\n    },\r\n    {\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {},\r\n      \"tag\": \"out\"\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"rules\": [\r\n      {\r\n        \"inboundTag\": [\r\n          \"bridge\"\r\n        ],\r\n        \"domain\": [\r\n          \"full:reverse.proxy\"\r\n        ],\r\n        \"outboundTag\": \"interconn\"\r\n      },\r\n      {\r\n        \"inboundTag\": [\r\n          \"bridge\"\r\n        ],\r\n        \"outboundTag\": \"out\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "reverse": {
                "bridges": [
                    {
                        "tag": "bridge",
                        "domain": "reverse.proxy"
                    }
                ]
            },
            "outbounds": [
                {
                    "tag": "interconn",
                    "protocol": "vmess",
                    "settings": {
                        "address": "{{ protal.address }}",
                        "port": 65510,
                        "id": "{{ uuid }}"
                    },
                    "streamSettings": {
                        "network": "tcp"
                    }
                },
                {
                    "protocol": "freedom",
                    "settings": {},
                    "tag": "out"
                }
            ],
            "routing": {
                "rules": [
                    {
                        "inboundTag": [
                            "bridge"
                        ],
                        "domain": [
                            "full:reverse.proxy"
                        ],
                        "outboundTag": "interconn"
                    },
                    {
                        "inboundTag": [
                            "bridge"
                        ],
                        "outboundTag": "out"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-reverseproxy-vmess-tcp-client-jsonc",
        "title": "ReverseProxy/Vmess-TCP/client",
        "path": "examples/ReverseProxy/Vmess-TCP/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vmess",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"IPIfNonMatch\",\r\n        \"rules\": [\r\n            {\r\n                \"port\": \"0-65535\",\r\n                \"outboundTag\": \"proxy\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"2080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"2081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"address\": \"{{ protal.address }}\",\r\n                \"port\": 65511,\r\n                \"id\": \"{{ uuid }}\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\"\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "port": "0-65535",
                        "outboundTag": "proxy"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "2080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "2081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "{{ protal.address }}",
                        "port": 65511,
                        "id": "{{ uuid }}"
                    },
                    "streamSettings": {
                        "network": "tcp"
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-reverseproxy-vmess-tcp-portal-jsonc",
        "title": "ReverseProxy/Vmess-TCP/portal",
        "path": "examples/ReverseProxy/Vmess-TCP/portal.jsonc",
        "role": "server",
        "protocols": [
            "vmess"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "reverse",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"reverse\": {\r\n    \"portals\": [\r\n      {\r\n        \"tag\": \"portal\",\r\n        \"domain\": \"reverse.proxy\"\r\n      }\r\n    ]\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"tag\": \"external\",\r\n      \"port\": 65511,\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"{{ uuid }}\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\"\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"interconn\",\r\n      \"port\": 65510,\r\n      \"protocol\": \"vmess\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"{{ uuid }}\"\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"tcp\"\r\n      }\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"rules\": [\r\n      {\r\n        \"inboundTag\": [\r\n          \"external\"\r\n        ],\r\n        \"outboundTag\": \"portal\"\r\n      },\r\n      {\r\n        \"inboundTag\": [\r\n          \"interconn\"\r\n        ],\r\n        \"domain\": [],\r\n        \"outboundTag\": \"portal\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "reverse": {
                "portals": [
                    {
                        "tag": "portal",
                        "domain": "reverse.proxy"
                    }
                ]
            },
            "inbounds": [
                {
                    "tag": "external",
                    "port": 65511,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "id": "{{ uuid }}"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp"
                    }
                },
                {
                    "tag": "interconn",
                    "port": 65510,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "id": "{{ uuid }}"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp"
                    }
                }
            ],
            "routing": {
                "rules": [
                    {
                        "inboundTag": [
                            "external"
                        ],
                        "outboundTag": "portal"
                    },
                    {
                        "inboundTag": [
                            "interconn"
                        ],
                        "domain": [],
                        "outboundTag": "portal"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-serverless-for-iran-serverless-for-iran-jsonc",
        "title": "Serverless-for-Iran/serverless_for_Iran",
        "path": "examples/Serverless-for-Iran/serverless_for_Iran.jsonc",
        "role": "server",
        "protocols": [
            "tunnel",
            "mixed",
            "block",
            "direct",
            "dns"
        ],
        "transports": [
            "tcp,udp",
            "tcp",
            "udp"
        ],
        "securities": [],
        "features": [
            "XHTTP",
            "routing",
            "DNS"
        ],
        "raw": "// Configs here can not contain \"bypassing sanctions\" contents (inappropriate on US GitHub)\r\n// Please join the official Xray Iranian group https://t.me/projectXhttp to get the whole working configs\r\n\r\n\r\n{\r\n  \"remarks\": \"Serverless\",\r\n\r\n  \"version\": {\r\n    \"min\": \"25.12.8\"\r\n  },\r\n\r\n  \"log\": {\r\n    \"loglevel\": \"warning\", \"dnsLog\": false, \"access\": \"none\"\r\n  },\r\n\r\n  \"policy\": {\r\n    \"levels\": {\r\n      \"0\": {\r\n        \"uplinkOnly\": 0,\r\n        \"downlinkOnly\": 0\r\n      }\r\n    }\r\n  },\r\n\r\n  \"fakedns\": [\r\n    {\r\n      \"ipPool\": \"198.19.0.0/16\",\r\n      \"poolSize\": 65535\r\n    },\r\n    {\r\n      \"ipPool\": \"fc00:2000::/19\",\r\n      \"poolSize\": 65535\r\n    }\r\n  ],\r\n\r\n  \"dns\":{\r\n    \"hosts\": {\r\n      \"geosite:category-ads-all\": \"#3\",\r\n      \"cloudflare-dns.com\": \"challenges.cloudflare.com\"\r\n    },\r\n    \"servers\": [\r\n      {\r\n        \"address\": \"fakedns\",\r\n        \"domains\": [\"domain:ir\", \"geosite:private\", \"geosite:category-ir\", \"full:challenges.cloudflare.com\"]\r\n      },\r\n      {\r\n        \"tag\": \"no-filter-dns\",\r\n        \"address\": \"https://cloudflare-dns.com/dns-query\",\r\n        \"timeoutMs\": 10000,\r\n        \"finalQuery\": true\r\n      },\r\n      {\r\n        \"address\": \"localhost\",\r\n        \"domains\": [\"domain:ir\", \"geosite:private\", \"geosite:category-ir\", \"full:challenges.cloudflare.com\"],\r\n        \"finalQuery\": true\r\n      }\r\n    ],\r\n    \"queryStrategy\": \"UseSystem\",\r\n    \"useSystemHosts\": true,\r\n\t\"serveStale\": true,\r\n    \"serveExpiredTTL\": 21600\r\n  },\r\n\r\n  \"inbounds\": [\r\n    {\r\n      \"tag\": \"dns-in\",\r\n      // \"listen\": \"127.0.0.1\",\r\n      \"port\": 10853,\r\n      \"protocol\": \"tunnel\",\r\n      \"settings\": {\r\n        \"address\": \"127.0.0.1\",\r\n        \"port\": 53,\r\n        \"network\": \"tcp,udp\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"tcpKeepAliveInterval\": 1,\r\n          \"tcpKeepAliveIdle\": 46\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"mixed-in\",\r\n      // \"listen\": \"127.0.0.1\",\r\n      \"port\": 10808,\r\n      \"protocol\": \"mixed\",\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\"fakedns\"],\r\n        \"routeOnly\": false\r\n      },\r\n      \"settings\": {\r\n        \"udp\": true,\r\n        \"ip\": \"127.0.0.1\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"tcpKeepAliveInterval\": 1,\r\n          \"tcpKeepAliveIdle\": 46\r\n        }\r\n      }\r\n    }\r\n  ],\r\n\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"block-out\",\r\n      \"protocol\": \"block\"\r\n    },\r\n    {\r\n      \"tag\": \"tcp-direct-out\",\r\n      \"protocol\": \"direct\",\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"domainStrategy\": \"ForceIP\",\r\n          \"happyEyeballs\": {\r\n            \"tryDelayMs\": 300,\r\n            \"prioritizeIPv6\": true,\r\n            \"interleave\": 2,\r\n            \"maxConcurrentTry\": 20\r\n          }\r\n        }\r\n      }\r\n    },\r\n\t{\r\n      \"tag\": \"udp-direct-out\",\r\n      \"protocol\": \"direct\",\r\n      \"settings\": {\r\n        \"targetStrategy\": \"ForceIPv6v4\"\r\n\t  }\r\n\t},\r\n    {\r\n      \"tag\": \"dns-out\",\r\n      \"protocol\": \"dns\",\r\n      \"settings\": {\"nonIPQuery\": \"reject\", \"blockTypes\": [0, 65]}\r\n    },\r\n\t{\r\n      \"tag\": \"tls-fragment\",\r\n      \"protocol\": \"direct\",\r\n      \"settings\": {\r\n        \"fragment\": {\r\n          \"packets\": \"tlshello\",\r\n          \"length\": \"6\",\r\n          \"interval\": \"0\",\r\n          \"maxSplit\": \"0\"\r\n        }\r\n      },\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"dialerProxy\": \"full-fragment\" // or \"skip-fragment\" (with different parameteres)\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"skip-fragment\",\r\n      \"protocol\": \"direct\",\r\n      \"settings\": {\r\n        \"fragment\": {\r\n          \"packets\": \"1-1\",\r\n          \"length\": \"130\",\r\n          \"interval\": \"560\",\r\n          \"maxSplit\": \"4\"\r\n        }\r\n      },\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"dialerProxy\": \"_chain-skip\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"_chain-skip\",\r\n      \"protocol\": \"direct\",\r\n      \"settings\": {\r\n        \"fragment\": {\r\n          \"packets\": \"2-4\",\r\n          \"length\": \"1\",\r\n          \"interval\": \"4\",\r\n          \"maxSplit\": \"130\"\r\n        }\r\n      },\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"domainStrategy\": \"ForceIP\",\r\n          \"happyEyeballs\": {\r\n            \"tryDelayMs\": 300,\r\n            \"prioritizeIPv6\": true,\r\n            \"interleave\": 2,\r\n            \"maxConcurrentTry\": 20\r\n          }\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"full-fragment\",\r\n      \"protocol\": \"direct\",\r\n      \"settings\": {\r\n        \"fragment\": {\r\n          \"packets\": \"1-1\",\r\n          \"length\": \"1\",\r\n          \"interval\": \"4\",\r\n          \"maxSplit\": \"517\"\r\n        }\r\n      },\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"domainStrategy\": \"ForceIP\",\r\n          \"happyEyeballs\": {\r\n            \"tryDelayMs\": 300,\r\n            \"prioritizeIPv6\": true,\r\n            \"interleave\": 2,\r\n            \"maxConcurrentTry\": 20\r\n          }\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"udp-noises\",\r\n      \"protocol\": \"direct\",\r\n      \"settings\": {\r\n        \"targetStrategy\": \"ForceIPv6v4\",\r\n        \"noises\": [\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\", \"applyTo\": \"ipv4\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\", \"applyTo\": \"ipv6\"}\r\n        ]\r\n      }\r\n    }\r\n  ],\r\n\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [\r\n      {\"outboundTag\": \"block-out\",\r\n       \"port\": 0\r\n      },\r\n      {\"outboundTag\": \"block-out\",\r\n       \"domain\": [\"geosite:category-ads-all\"]\r\n      },\r\n      {\"outboundTag\": \"dns-out\",\r\n       \"inboundTag\": [\"dns-in\"]\r\n      },\r\n      {\"outboundTag\": \"dns-out\",\r\n       \"inboundTag\": [\"mixed-in\"], \"port\": 53\r\n      },\r\n      {\"outboundTag\": \"full-fragment\", // or \"skip-fragment\" or \"tls-fragment\"\r\n       \"inboundTag\": [\"no-filter-dns\"]\r\n      },\r\n      {\"outboundTag\": \"block-out\",\r\n       \"ip\": [\"10.10.34.0/24\", \"2001:4188:2:600::/64\", \"0.0.0.0\", \"::\", \"198.19.0.0/16\", \"fc00:2000::/19\"]\r\n      },\r\n      {\"outboundTag\": \"tcp-direct-out\",\r\n       \"network\": \"tcp\", \"domain\": [\"domain:ir\", \"geosite:private\", \"geosite:category-ir\"], \"ip\": [\"0.0.0.0/0\", \"::/0\"]\r\n      },\r\n\t  {\"outboundTag\": \"udp-direct-out\",\r\n       \"network\": \"udp\", \"domain\": [\"domain:ir\", \"geosite:private\", \"geosite:category-ir\"], \"ip\": [\"0.0.0.0/0\", \"::/0\"]\r\n      },\r\n      {\"outboundTag\": \"tcp-direct-out\",\r\n       \"network\": \"tcp\", \"ip\": [\"geoip:private\", \"geoip:ir\"]\r\n      },\r\n\t  {\"outboundTag\": \"udp-direct-out\",\r\n       \"network\": \"udp\", \"ip\": [\"geoip:private\", \"geoip:ir\"]\r\n      },\r\n      {\"outboundTag\": \"udp-noises\",\r\n       \"network\": \"udp\", \"protocol\": [\"quic\"], \"ip\": [\"0.0.0.0/0\", \"::/0\"]\r\n      },\r\n      {\"outboundTag\": \"udp-noises\",\r\n       \"network\": \"udp\", \"port\": \"443\", \"ip\": [\"0.0.0.0/0\", \"::/0\"]\r\n      },\r\n      {\"outboundTag\": \"udp-direct-out\",\r\n       \"network\": \"udp\", \"ip\": [\"0.0.0.0/0\", \"::/0\"]\r\n      },\r\n      {\"outboundTag\": \"full-fragment\", // or \"skip-fragment\" or \"tls-fragment\"\r\n       \"network\": \"tcp\", \"protocol\": [\"tls\"], \"ip\": [\"0.0.0.0/0\", \"::/0\"]\r\n      },\r\n      {\"outboundTag\": \"full-fragment\", // or \"skip-fragment\" or \"tls-fragment\"\r\n       \"network\": \"tcp\", \"port\": \"443\", \"ip\": [\"0.0.0.0/0\", \"::/0\"]\r\n      },\r\n      {\"outboundTag\": \"full-fragment\",\r\n       \"network\": \"tcp\", \"ip\": [\"0.0.0.0/0\", \"::/0\"]\r\n      },\r\n      {\"outboundTag\": \"block-out\",\r\n       \"port\": \"0-65535\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "remarks": "Serverless",
            "version": {
                "min": "25.12.8"
            },
            "log": {
                "loglevel": "warning",
                "dnsLog": false,
                "access": "none"
            },
            "policy": {
                "levels": {
                    "0": {
                        "uplinkOnly": 0,
                        "downlinkOnly": 0
                    }
                }
            },
            "fakedns": [
                {
                    "ipPool": "198.19.0.0/16",
                    "poolSize": 65535
                },
                {
                    "ipPool": "fc00:2000::/19",
                    "poolSize": 65535
                }
            ],
            "dns": {
                "hosts": {
                    "geosite:category-ads-all": "#3",
                    "cloudflare-dns.com": "challenges.cloudflare.com"
                },
                "servers": [
                    {
                        "address": "fakedns",
                        "domains": [
                            "domain:ir",
                            "geosite:private",
                            "geosite:category-ir",
                            "full:challenges.cloudflare.com"
                        ]
                    },
                    {
                        "tag": "no-filter-dns",
                        "address": "https://cloudflare-dns.com/dns-query",
                        "timeoutMs": 10000,
                        "finalQuery": true
                    },
                    {
                        "address": "localhost",
                        "domains": [
                            "domain:ir",
                            "geosite:private",
                            "geosite:category-ir",
                            "full:challenges.cloudflare.com"
                        ],
                        "finalQuery": true
                    }
                ],
                "queryStrategy": "UseSystem",
                "useSystemHosts": true,
                "serveStale": true,
                "serveExpiredTTL": 21600
            },
            "inbounds": [
                {
                    "tag": "dns-in",
                    "port": 10853,
                    "protocol": "tunnel",
                    "settings": {
                        "address": "127.0.0.1",
                        "port": 53,
                        "network": "tcp,udp"
                    },
                    "streamSettings": {
                        "sockopt": {
                            "tcpKeepAliveInterval": 1,
                            "tcpKeepAliveIdle": 46
                        }
                    }
                },
                {
                    "tag": "mixed-in",
                    "port": 10808,
                    "protocol": "mixed",
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "fakedns"
                        ],
                        "routeOnly": false
                    },
                    "settings": {
                        "udp": true,
                        "ip": "127.0.0.1"
                    },
                    "streamSettings": {
                        "sockopt": {
                            "tcpKeepAliveInterval": 1,
                            "tcpKeepAliveIdle": 46
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "block-out",
                    "protocol": "block"
                },
                {
                    "tag": "tcp-direct-out",
                    "protocol": "direct",
                    "streamSettings": {
                        "sockopt": {
                            "domainStrategy": "ForceIP",
                            "happyEyeballs": {
                                "tryDelayMs": 300,
                                "prioritizeIPv6": true,
                                "interleave": 2,
                                "maxConcurrentTry": 20
                            }
                        }
                    }
                },
                {
                    "tag": "udp-direct-out",
                    "protocol": "direct",
                    "settings": {
                        "targetStrategy": "ForceIPv6v4"
                    }
                },
                {
                    "tag": "dns-out",
                    "protocol": "dns",
                    "settings": {
                        "nonIPQuery": "reject",
                        "blockTypes": [
                            0,
                            65
                        ]
                    }
                },
                {
                    "tag": "tls-fragment",
                    "protocol": "direct",
                    "settings": {
                        "fragment": {
                            "packets": "tlshello",
                            "length": "6",
                            "interval": "0",
                            "maxSplit": "0"
                        }
                    },
                    "streamSettings": {
                        "sockopt": {
                            "dialerProxy": "full-fragment"
                        }
                    }
                },
                {
                    "tag": "skip-fragment",
                    "protocol": "direct",
                    "settings": {
                        "fragment": {
                            "packets": "1-1",
                            "length": "130",
                            "interval": "560",
                            "maxSplit": "4"
                        }
                    },
                    "streamSettings": {
                        "sockopt": {
                            "dialerProxy": "_chain-skip"
                        }
                    }
                },
                {
                    "tag": "_chain-skip",
                    "protocol": "direct",
                    "settings": {
                        "fragment": {
                            "packets": "2-4",
                            "length": "1",
                            "interval": "4",
                            "maxSplit": "130"
                        }
                    },
                    "streamSettings": {
                        "sockopt": {
                            "domainStrategy": "ForceIP",
                            "happyEyeballs": {
                                "tryDelayMs": 300,
                                "prioritizeIPv6": true,
                                "interleave": 2,
                                "maxConcurrentTry": 20
                            }
                        }
                    }
                },
                {
                    "tag": "full-fragment",
                    "protocol": "direct",
                    "settings": {
                        "fragment": {
                            "packets": "1-1",
                            "length": "1",
                            "interval": "4",
                            "maxSplit": "517"
                        }
                    },
                    "streamSettings": {
                        "sockopt": {
                            "domainStrategy": "ForceIP",
                            "happyEyeballs": {
                                "tryDelayMs": 300,
                                "prioritizeIPv6": true,
                                "interleave": 2,
                                "maxConcurrentTry": 20
                            }
                        }
                    }
                },
                {
                    "tag": "udp-noises",
                    "protocol": "direct",
                    "settings": {
                        "targetStrategy": "ForceIPv6v4",
                        "noises": [
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10",
                                "applyTo": "ipv4"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10",
                                "applyTo": "ipv6"
                            }
                        ]
                    }
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "outboundTag": "block-out",
                        "port": 0
                    },
                    {
                        "outboundTag": "block-out",
                        "domain": [
                            "geosite:category-ads-all"
                        ]
                    },
                    {
                        "outboundTag": "dns-out",
                        "inboundTag": [
                            "dns-in"
                        ]
                    },
                    {
                        "outboundTag": "dns-out",
                        "inboundTag": [
                            "mixed-in"
                        ],
                        "port": 53
                    },
                    {
                        "outboundTag": "full-fragment",
                        "inboundTag": [
                            "no-filter-dns"
                        ]
                    },
                    {
                        "outboundTag": "block-out",
                        "ip": [
                            "10.10.34.0/24",
                            "2001:4188:2:600::/64",
                            "0.0.0.0",
                            "::",
                            "198.19.0.0/16",
                            "fc00:2000::/19"
                        ]
                    },
                    {
                        "outboundTag": "tcp-direct-out",
                        "network": "tcp",
                        "domain": [
                            "domain:ir",
                            "geosite:private",
                            "geosite:category-ir"
                        ],
                        "ip": [
                            "0.0.0.0/0",
                            "::/0"
                        ]
                    },
                    {
                        "outboundTag": "udp-direct-out",
                        "network": "udp",
                        "domain": [
                            "domain:ir",
                            "geosite:private",
                            "geosite:category-ir"
                        ],
                        "ip": [
                            "0.0.0.0/0",
                            "::/0"
                        ]
                    },
                    {
                        "outboundTag": "tcp-direct-out",
                        "network": "tcp",
                        "ip": [
                            "geoip:private",
                            "geoip:ir"
                        ]
                    },
                    {
                        "outboundTag": "udp-direct-out",
                        "network": "udp",
                        "ip": [
                            "geoip:private",
                            "geoip:ir"
                        ]
                    },
                    {
                        "outboundTag": "udp-noises",
                        "network": "udp",
                        "protocol": [
                            "quic"
                        ],
                        "ip": [
                            "0.0.0.0/0",
                            "::/0"
                        ]
                    },
                    {
                        "outboundTag": "udp-noises",
                        "network": "udp",
                        "port": "443",
                        "ip": [
                            "0.0.0.0/0",
                            "::/0"
                        ]
                    },
                    {
                        "outboundTag": "udp-direct-out",
                        "network": "udp",
                        "ip": [
                            "0.0.0.0/0",
                            "::/0"
                        ]
                    },
                    {
                        "outboundTag": "full-fragment",
                        "network": "tcp",
                        "protocol": [
                            "tls"
                        ],
                        "ip": [
                            "0.0.0.0/0",
                            "::/0"
                        ]
                    },
                    {
                        "outboundTag": "full-fragment",
                        "network": "tcp",
                        "port": "443",
                        "ip": [
                            "0.0.0.0/0",
                            "::/0"
                        ]
                    },
                    {
                        "outboundTag": "full-fragment",
                        "network": "tcp",
                        "ip": [
                            "0.0.0.0/0",
                            "::/0"
                        ]
                    },
                    {
                        "outboundTag": "block-out",
                        "port": "0-65535"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-serverless-for-iran-serverless-with-mitm-for-iran-jsonc",
        "title": "Serverless-for-Iran/serverless_with_mitm_for_Iran",
        "path": "examples/Serverless-for-Iran/serverless_with_mitm_for_Iran.jsonc",
        "role": "server",
        "protocols": [
            "dokodemo-door",
            "socks",
            "blackhole",
            "freedom",
            "dns"
        ],
        "transports": [
            "tcp,udp",
            "tcp",
            "udp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "XHTTP",
            "routing",
            "DNS"
        ],
        "raw": "// Configs here can not contain \"bypassing sanctions\" contents (inappropriate on US GitHub)\r\n// Please join the official Xray Iranian group https://t.me/projectXhttp to get the whole working configs\r\n\r\n// Serverless with MitM-Domain-Fronting for Iran v4\r\n// Xray-core v25.2.21+\r\n\r\n// Requires a self-signed-certificate: You can create it using \"./xray tls cert -ca -file=mycert\" command.\r\n// Also, the certificate must be imported into \"Trusted-Root-Certification-Authorities\" of system/browser.\r\n\r\n\r\n{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\", \"dnsLog\": false, \"access\": \"none\"\r\n  },\r\n\r\n  \"dns\":{\r\n    \"hosts\": {\r\n      \"geosite:category-ads-all\": [\"10.10.34.36\", \"2001:4188:2:600:10:10:34:36\"]\r\n    },\r\n    \"servers\": [\r\n      \"h2c://1.1.1.1/dns-query\",\r\n      {\"address\": \"localhost\", \"domains\": [\"geosite:private\", \"geosite:category-ir\"]}\r\n    ],\r\n    \"tag\": \"dns-query\",\r\n    \"disableFallback\": true\r\n  },\r\n  \r\n  \"inbounds\": [\r\n    {\r\n      \"tag\": \"dns-in\",\r\n      \"port\": 10853,\r\n      \"protocol\": \"dokodemo-door\",\r\n      \"settings\": {\r\n        \"address\": \"1.1.1.1\",\r\n        \"port\": 53,\r\n        \"network\": \"tcp,udp\"        \r\n      }      \r\n    },\r\n    {\r\n      \"tag\": \"socks-in\",\r\n      \"port\": 10808,\r\n      \"protocol\": \"socks\",\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\"http\", \"tls\"],\r\n        \"routeOnly\": false\r\n      },\r\n      \"settings\": {\"udp\": true}\r\n    },\r\n    {\r\n      \"port\": 4431,\r\n      \"tag\": \"tls-decrypt-h11\",\r\n      \"protocol\": \"dokodemo-door\",\r\n      \"settings\": {\r\n        \"network\": \"tcp\",\r\n        \"port\": 443,\r\n        \"followRedirect\": true\r\n      },\r\n      \"streamSettings\": {\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"alpn\": [\"http/1.1\"],\r\n          \"certificates\": [\r\n            {\r\n              \"usage\": \"issue\",\r\n              \"certificateFile\": \"mycert.crt\",  // certificate path\r\n              \"keyFile\": \"mycert.key\"  // private-key path\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"port\": 4432,\r\n      \"tag\": \"tls-decrypt-h211\",\r\n      \"protocol\": \"dokodemo-door\",\r\n      \"settings\": {\r\n        \"network\": \"tcp\",\r\n        \"port\": 443,\r\n        \"followRedirect\": true\r\n      },\r\n      \"streamSettings\": {\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"alpn\": [\"h2\",\"http/1.1\"],\r\n          \"certificates\": [\r\n            {\r\n              \"usage\": \"issue\",\r\n              \"certificateFile\": \"mycert.crt\",  // certificate path\r\n              \"keyFile\": \"mycert.key\"  // private-key path\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ],\r\n\r\n  \"outbounds\": [    \r\n    {\r\n      \"tag\": \"block\",\r\n      \"protocol\": \"blackhole\"      \r\n    },\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",      \r\n      \"settings\": {\"domainStrategy\": \"ForceIP\"}\r\n    },\r\n    {\r\n      \"tag\": \"redirect-out-h11\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {\r\n        \"redirect\": \"127.0.0.1:4431\"\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"redirect-out-h211\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {\r\n        \"redirect\": \"127.0.0.1:4432\"\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"tls-repack-dns\",\r\n      \"protocol\": \"freedom\",      \r\n      \"settings\": {\"domainStrategy\": \"ForceIP\"},\r\n      \"streamSettings\": {      \r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"serverName\": \"www.microsoft.com\",\r\n          \"verifyPeerCertByName\": \"fromMitM,www.microsoft.com\",\r\n          \"alpn\": [\"fromMitM\"],\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }              \r\n    },\r\n    {\r\n      \"tag\": \"tls-repack-google\",\r\n      \"protocol\": \"freedom\",      \r\n      \"settings\": {\"domainStrategy\": \"ForceIP\"},\r\n      \"streamSettings\": {      \r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"serverName\": \"www.google.com\",\r\n          \"verifyPeerCertByName\": \"fromMitM,www.google.com,dns.google,www.googlevideo.com,www.youtube.com\",\r\n          \"alpn\": [\"fromMitM\"],\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }              \r\n    },\r\n    {\r\n      \"tag\": \"tls-repack-meta\",\r\n      \"protocol\": \"freedom\",      \r\n      \"settings\": {\"domainStrategy\": \"ForceIP\"},\r\n      \"streamSettings\": {      \r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"serverName\": \"www.whatsapp.com\",\r\n          \"verifyPeerCertByName\": \"fromMitM,www.whatsapp.com,www.facebook.com,www.ar.meta.com,www.fb.com,www.whatsapp.net,www.atlassolutions.com,www.secure.facebook.com,www.extern.facebook.com,www.internet.org,www.oculus.com,www.wit.ai,www.facebook-dns.com,www.instagram.com,www.meta.com,www.external-disputes.meta.com,www.fbe2e.com,www.cloud.x2p.facebook.net,www.secure.latest.facebook.com\",\r\n          \"alpn\": [\"fromMitM\"],\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }              \r\n    },\r\n    {\r\n      \"tag\": \"tls-repack-fastly\",\r\n      \"protocol\": \"freedom\",      \r\n      \"settings\": {\"domainStrategy\": \"ForceIP\"},\r\n      \"streamSettings\": {      \r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"serverName\": \"www.fastly.com\",\r\n          \"verifyPeerCertByName\": \"fromMitM,www.fastly.com,www.reddit.com,x.com\",\r\n          \"alpn\": [\"fromMitM\"],\r\n          \"fingerprint\": \"chrome\"\r\n        }\r\n      }              \r\n    },    \r\n    {\r\n      \"tag\": \"dns-out\",\r\n      \"protocol\": \"dns\",      \r\n      \"settings\": {\"nonIPQuery\": \"skip\", \"network\": \"tcp\", \"address\": \"1.1.1.1\", \"port\": 53},\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"dialerProxy\": \"chain1-fragment\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"super-fragment\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {\r\n        \"fragment\": {\r\n          \"packets\": \"tlshello\",\r\n          \"length\": \"6\",\r\n          \"interval\": \"0\"\r\n        }\r\n      },\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"dialerProxy\": \"chain1-fragment\"\r\n        }\r\n      }            \r\n    },\r\n    {\r\n      \"tag\": \"chain1-fragment\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {\r\n        \"fragment\": {\r\n          \"packets\": \"1-3\",\r\n          \"length\": \"517\",\r\n          \"interval\": \"1\"\r\n        }\r\n      },\r\n      \"streamSettings\": {\r\n        \"sockopt\": {\r\n          \"dialerProxy\": \"chain2-fragment\"\r\n        }\r\n      }            \r\n    },                          \r\n    {\r\n      \"tag\": \"chain2-fragment\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {\r\n        \"domainStrategy\": \"ForceIP\",\r\n        \"fragment\": {\r\n          \"packets\": \"1-1\",\r\n          \"length\": \"1\",\r\n          \"interval\": \"2\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"udp-noisesv4\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {\r\n        \"domainStrategy\": \"ForceIPv4\",\r\n        \"noises\": [\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1250\", \"delay\": \"10\"}\r\n        ]\r\n      }            \r\n    },\r\n    {\r\n      \"tag\": \"udp-noisesv6\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {\r\n        \"domainStrategy\": \"ForceIPv6\",\r\n        \"noises\": [\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"},\r\n          {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}, {\"type\": \"rand\", \"packet\": \"1230\", \"delay\": \"10\"}\r\n        ]\r\n      }            \r\n    }          \r\n  ],\r\n\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [                  \r\n      {\"outboundTag\": \"dns-out\",\r\n       \"inboundTag\": [\"dns-in\"]\r\n      },\r\n      {\"outboundTag\": \"dns-out\",\r\n       \"inboundTag\": [\"socks-in\"], \"port\": 53\r\n      },\r\n      {\"outboundTag\": \"tls-repack-dns\",\r\n       \"inboundTag\": [\"dns-query\"]\r\n      },\r\n      {\"outboundTag\": \"block\",\r\n       \"domain\": [\"geosite:category-ads-all\"]\r\n      },\r\n      {\"outboundTag\": \"block\",\r\n       \"ip\": [\"10.10.34.0/24\", \"2001:4188:2:600:10:10:34:36\", \"2001:4188:2:600:10:10:34:35\", \"2001:4188:2:600:10:10:34:34\"]\r\n      },           \r\n      {\"outboundTag\": \"direct\",\r\n       \"domain\": [\"geosite:private\", \"geosite:category-ir\"]\r\n      },      \r\n      {\"outboundTag\": \"direct\",\r\n       \"ip\": [\"geoip:private\", \"geoip:ir\"]\r\n      },\r\n      {\"outboundTag\": \"chain1-fragment\",  // or \"super-fragment\"\r\n       \"inboundTag\": [\"socks-in\"],\r\n       \"network\": \"tcp\",\r\n       \"ip\": [\"geoip:cloudflare\", \"geoip:cloudfront\"]\r\n      },\r\n      {\r\n        \"outboundTag\": \"redirect-out-h11\",\r\n        \"inboundTag\": [\"socks-in\"],\r\n        \"network\": \"tcp\",\r\n        \"protocol\": [\"tls\"],\r\n        \"port\": 443,\r\n        \"domain\": [\"domain:googlevideo.com\"]\r\n      },\r\n      {\r\n        \"outboundTag\": \"redirect-out-h211\",\r\n        \"inboundTag\": [\"socks-in\"],\r\n        \"network\": \"tcp\",\r\n        \"protocol\": [\"tls\"],\r\n        \"port\": 443,\r\n        \"domain\": [\"geosite:youtube\", \"geosite:x\", \"geosite:reddit\", \"geosite:meta\"]       \r\n      },\r\n      {\"outboundTag\": \"tls-repack-google\",\r\n       \"domain\": [\"geosite:youtube\", \"domain:googlevideo.com\"],\r\n       \"inboundTag\": [\"tls-decrypt-h11\", \"tls-decrypt-h211\"]\r\n      },\r\n      {\"outboundTag\": \"tls-repack-meta\",\r\n       \"domain\": [\"geosite:meta\"],\r\n       \"inboundTag\": [\"tls-decrypt-h11\", \"tls-decrypt-h211\"]\r\n      },\r\n      {\"outboundTag\": \"tls-repack-fastly\",\r\n       \"domain\": [\"geosite:x\", \"geosite:reddit\"],\r\n       \"inboundTag\": [\"tls-decrypt-h11\", \"tls-decrypt-h211\"]\r\n      },                                                         \t                                                        \r\n      {\"outboundTag\": \"udp-noisesv4\",\r\n       \"network\": \"udp\", \"ip\": [\"0.0.0.0/0\"], \"port\": 443\r\n      },\r\n      {\"outboundTag\": \"udp-noisesv6\",\r\n       \"network\": \"udp\", \"ip\": [\"::/0\"], \"port\": 443\r\n      },\r\n      {\"outboundTag\": \"direct\",\r\n       \"network\": \"udp\"\r\n      },\r\n      {\"outboundTag\": \"chain1-fragment\",  // or \"super-fragment\"\r\n       \"network\": \"tcp\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning",
                "dnsLog": false,
                "access": "none"
            },
            "dns": {
                "hosts": {
                    "geosite:category-ads-all": [
                        "10.10.34.36",
                        "2001:4188:2:600:10:10:34:36"
                    ]
                },
                "servers": [
                    "h2c://1.1.1.1/dns-query",
                    {
                        "address": "localhost",
                        "domains": [
                            "geosite:private",
                            "geosite:category-ir"
                        ]
                    }
                ],
                "tag": "dns-query",
                "disableFallback": true
            },
            "inbounds": [
                {
                    "tag": "dns-in",
                    "port": 10853,
                    "protocol": "dokodemo-door",
                    "settings": {
                        "address": "1.1.1.1",
                        "port": 53,
                        "network": "tcp,udp"
                    }
                },
                {
                    "tag": "socks-in",
                    "port": 10808,
                    "protocol": "socks",
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ],
                        "routeOnly": false
                    },
                    "settings": {
                        "udp": true
                    }
                },
                {
                    "port": 4431,
                    "tag": "tls-decrypt-h11",
                    "protocol": "dokodemo-door",
                    "settings": {
                        "network": "tcp",
                        "port": 443,
                        "followRedirect": true
                    },
                    "streamSettings": {
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "usage": "issue",
                                    "certificateFile": "mycert.crt",
                                    "keyFile": "mycert.key"
                                }
                            ]
                        }
                    }
                },
                {
                    "port": 4432,
                    "tag": "tls-decrypt-h211",
                    "protocol": "dokodemo-door",
                    "settings": {
                        "network": "tcp",
                        "port": 443,
                        "followRedirect": true
                    },
                    "streamSettings": {
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "h2",
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "usage": "issue",
                                    "certificateFile": "mycert.crt",
                                    "keyFile": "mycert.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "block",
                    "protocol": "blackhole"
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {
                        "domainStrategy": "ForceIP"
                    }
                },
                {
                    "tag": "redirect-out-h11",
                    "protocol": "freedom",
                    "settings": {
                        "redirect": "127.0.0.1:4431"
                    }
                },
                {
                    "tag": "redirect-out-h211",
                    "protocol": "freedom",
                    "settings": {
                        "redirect": "127.0.0.1:4432"
                    }
                },
                {
                    "tag": "tls-repack-dns",
                    "protocol": "freedom",
                    "settings": {
                        "domainStrategy": "ForceIP"
                    },
                    "streamSettings": {
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "www.microsoft.com",
                            "verifyPeerCertByName": "fromMitM,www.microsoft.com",
                            "alpn": [
                                "fromMitM"
                            ],
                            "fingerprint": "chrome"
                        }
                    }
                },
                {
                    "tag": "tls-repack-google",
                    "protocol": "freedom",
                    "settings": {
                        "domainStrategy": "ForceIP"
                    },
                    "streamSettings": {
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "www.google.com",
                            "verifyPeerCertByName": "fromMitM,www.google.com,dns.google,www.googlevideo.com,www.youtube.com",
                            "alpn": [
                                "fromMitM"
                            ],
                            "fingerprint": "chrome"
                        }
                    }
                },
                {
                    "tag": "tls-repack-meta",
                    "protocol": "freedom",
                    "settings": {
                        "domainStrategy": "ForceIP"
                    },
                    "streamSettings": {
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "www.whatsapp.com",
                            "verifyPeerCertByName": "fromMitM,www.whatsapp.com,www.facebook.com,www.ar.meta.com,www.fb.com,www.whatsapp.net,www.atlassolutions.com,www.secure.facebook.com,www.extern.facebook.com,www.internet.org,www.oculus.com,www.wit.ai,www.facebook-dns.com,www.instagram.com,www.meta.com,www.external-disputes.meta.com,www.fbe2e.com,www.cloud.x2p.facebook.net,www.secure.latest.facebook.com",
                            "alpn": [
                                "fromMitM"
                            ],
                            "fingerprint": "chrome"
                        }
                    }
                },
                {
                    "tag": "tls-repack-fastly",
                    "protocol": "freedom",
                    "settings": {
                        "domainStrategy": "ForceIP"
                    },
                    "streamSettings": {
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "www.fastly.com",
                            "verifyPeerCertByName": "fromMitM,www.fastly.com,www.reddit.com,x.com",
                            "alpn": [
                                "fromMitM"
                            ],
                            "fingerprint": "chrome"
                        }
                    }
                },
                {
                    "tag": "dns-out",
                    "protocol": "dns",
                    "settings": {
                        "nonIPQuery": "skip",
                        "network": "tcp",
                        "address": "1.1.1.1",
                        "port": 53
                    },
                    "streamSettings": {
                        "sockopt": {
                            "dialerProxy": "chain1-fragment"
                        }
                    }
                },
                {
                    "tag": "super-fragment",
                    "protocol": "freedom",
                    "settings": {
                        "fragment": {
                            "packets": "tlshello",
                            "length": "6",
                            "interval": "0"
                        }
                    },
                    "streamSettings": {
                        "sockopt": {
                            "dialerProxy": "chain1-fragment"
                        }
                    }
                },
                {
                    "tag": "chain1-fragment",
                    "protocol": "freedom",
                    "settings": {
                        "fragment": {
                            "packets": "1-3",
                            "length": "517",
                            "interval": "1"
                        }
                    },
                    "streamSettings": {
                        "sockopt": {
                            "dialerProxy": "chain2-fragment"
                        }
                    }
                },
                {
                    "tag": "chain2-fragment",
                    "protocol": "freedom",
                    "settings": {
                        "domainStrategy": "ForceIP",
                        "fragment": {
                            "packets": "1-1",
                            "length": "1",
                            "interval": "2"
                        }
                    }
                },
                {
                    "tag": "udp-noisesv4",
                    "protocol": "freedom",
                    "settings": {
                        "domainStrategy": "ForceIPv4",
                        "noises": [
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1250",
                                "delay": "10"
                            }
                        ]
                    }
                },
                {
                    "tag": "udp-noisesv6",
                    "protocol": "freedom",
                    "settings": {
                        "domainStrategy": "ForceIPv6",
                        "noises": [
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            },
                            {
                                "type": "rand",
                                "packet": "1230",
                                "delay": "10"
                            }
                        ]
                    }
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "outboundTag": "dns-out",
                        "inboundTag": [
                            "dns-in"
                        ]
                    },
                    {
                        "outboundTag": "dns-out",
                        "inboundTag": [
                            "socks-in"
                        ],
                        "port": 53
                    },
                    {
                        "outboundTag": "tls-repack-dns",
                        "inboundTag": [
                            "dns-query"
                        ]
                    },
                    {
                        "outboundTag": "block",
                        "domain": [
                            "geosite:category-ads-all"
                        ]
                    },
                    {
                        "outboundTag": "block",
                        "ip": [
                            "10.10.34.0/24",
                            "2001:4188:2:600:10:10:34:36",
                            "2001:4188:2:600:10:10:34:35",
                            "2001:4188:2:600:10:10:34:34"
                        ]
                    },
                    {
                        "outboundTag": "direct",
                        "domain": [
                            "geosite:private",
                            "geosite:category-ir"
                        ]
                    },
                    {
                        "outboundTag": "direct",
                        "ip": [
                            "geoip:private",
                            "geoip:ir"
                        ]
                    },
                    {
                        "outboundTag": "chain1-fragment",
                        "inboundTag": [
                            "socks-in"
                        ],
                        "network": "tcp",
                        "ip": [
                            "geoip:cloudflare",
                            "geoip:cloudfront"
                        ]
                    },
                    {
                        "outboundTag": "redirect-out-h11",
                        "inboundTag": [
                            "socks-in"
                        ],
                        "network": "tcp",
                        "protocol": [
                            "tls"
                        ],
                        "port": 443,
                        "domain": [
                            "domain:googlevideo.com"
                        ]
                    },
                    {
                        "outboundTag": "redirect-out-h211",
                        "inboundTag": [
                            "socks-in"
                        ],
                        "network": "tcp",
                        "protocol": [
                            "tls"
                        ],
                        "port": 443,
                        "domain": [
                            "geosite:youtube",
                            "geosite:x",
                            "geosite:reddit",
                            "geosite:meta"
                        ]
                    },
                    {
                        "outboundTag": "tls-repack-google",
                        "domain": [
                            "geosite:youtube",
                            "domain:googlevideo.com"
                        ],
                        "inboundTag": [
                            "tls-decrypt-h11",
                            "tls-decrypt-h211"
                        ]
                    },
                    {
                        "outboundTag": "tls-repack-meta",
                        "domain": [
                            "geosite:meta"
                        ],
                        "inboundTag": [
                            "tls-decrypt-h11",
                            "tls-decrypt-h211"
                        ]
                    },
                    {
                        "outboundTag": "tls-repack-fastly",
                        "domain": [
                            "geosite:x",
                            "geosite:reddit"
                        ],
                        "inboundTag": [
                            "tls-decrypt-h11",
                            "tls-decrypt-h211"
                        ]
                    },
                    {
                        "outboundTag": "udp-noisesv4",
                        "network": "udp",
                        "ip": [
                            "0.0.0.0/0"
                        ],
                        "port": 443
                    },
                    {
                        "outboundTag": "udp-noisesv6",
                        "network": "udp",
                        "ip": [
                            "::/0"
                        ],
                        "port": 443
                    },
                    {
                        "outboundTag": "direct",
                        "network": "udp"
                    },
                    {
                        "outboundTag": "chain1-fragment",
                        "network": "tcp"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-shadowsocks-tcp-client-jsonc",
        "title": "Shadowsocks-TCP/client",
        "path": "examples/Shadowsocks-TCP/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "shadowsocks",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"shadowsocks\",\r\n            \"settings\": {\r\n                \"servers\": [\r\n                    {\r\n                        \"address\": \"{{ host }}\",\r\n                        \"port\": \"{{ port }}\",\r\n                        \"method\": \"chacha20-ietf-poly1305\",\r\n                        \"password\": \"{{ password}}\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\"\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "shadowsocks",
                    "settings": {
                        "servers": [
                            {
                                "address": "{{ host }}",
                                "port": "{{ port }}",
                                "method": "chacha20-ietf-poly1305",
                                "password": "{{ password}}"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp"
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-shadowsocks-tcp-server-jsonc",
        "title": "Shadowsocks-TCP/server",
        "path": "examples/Shadowsocks-TCP/server.jsonc",
        "role": "server",
        "protocols": [
            "shadowsocks",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"shadowsocks\",\r\n            \"settings\": {\r\n                \"method\": \"chacha20-ietf-poly1305\",\r\n                \"password\": \"{{ password }}\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\"\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "shadowsocks",
                    "settings": {
                        "method": "chacha20-ietf-poly1305",
                        "password": "{{ password }}"
                    },
                    "streamSettings": {
                        "network": "tcp"
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-socks5-tls-config-client-jsonc",
        "title": "Socks5-TLS/config_client",
        "path": "examples/Socks5-TLS/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"servers\": [\r\n                    {\r\n                        \"address\": \"\",\r\n                        \"port\": 1234,\r\n                        \"users\": [\r\n                            {\r\n                                \"user\": \"\",\r\n                                \"pass\": \"\"\r\n                            }\r\n                        ]\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.domain\",\r\n                    \"allowInsecure\": false\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "socks",
                    "settings": {
                        "servers": [
                            {
                                "address": "",
                                "port": 1234,
                                "users": [
                                    {
                                        "user": "",
                                        "pass": ""
                                    }
                                ]
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "example.domain",
                            "allowInsecure": false
                        }
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-socks5-tls-config-server-jsonc",
        "title": "Socks5-TLS/config_server",
        "path": "examples/Socks5-TLS/config_server.jsonc",
        "role": "server",
        "protocols": [
            "socks",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"password\",\r\n                \"accounts\": [\r\n                    {\r\n                        \"user\": \"\",\r\n                        \"pass\": \"\"\r\n                    }\r\n                ],\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/certificate.crt\",\r\n                            \"keyFile\": \"/path/to/key.key\"\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "socks",
                    "settings": {
                        "auth": "password",
                        "accounts": [
                            {
                                "user": "",
                                "pass": ""
                            }
                        ],
                        "udp": true,
                        "ip": "127.0.0.1"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/certificate.crt",
                                    "keyFile": "/path/to/key.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-trojan-grpc-caddy2-ef-bc-8fnginx-client-jsonc",
        "title": "Trojan-gRPC-Caddy2%EF%BC%8FNginx/client",
        "path": "examples/Trojan-gRPC-Caddy2%EF%BC%8FNginx/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "trojan",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "gRPC",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {},\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true\r\n      }\r\n    },\r\n    {\r\n      \"port\": \"1081\",\r\n      \"protocol\": \"http\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"servers\": [\r\n          {\r\n            \"address\": \"example.com\",\r\n            \"port\": 443,\r\n            \"password\": \"\" //填写你的 password\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"security\": \"tls\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"\", //填写你的 ServiceName\r\n          //\"idle_timeout\": 60, //当这段时间内没有数据传输时，将会进行健康检查。可能会解决一些“断流”问题。\r\n          //\"initial_windows_size\": 65536, //通过 Cloudflare CDN 时，防止 Cloudflare CDN 发送意外的 h2 GOAWAY 帧以关闭现有连接。\r\n          //\"permit_without_stream\": true //通过 Cloudflare CDN 且空闲（没有子连接）时，防止 Cloudflare CDN 关闭连接。\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {},
            "inbounds": [
                {
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true
                    }
                },
                {
                    "port": "1081",
                    "protocol": "http",
                    "settings": {}
                }
            ],
            "outbounds": [
                {
                    "protocol": "trojan",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "password": ""
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "security": "tls",
                        "grpcSettings": {
                            "serviceName": ""
                        }
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-trojan-grpc-caddy2-ef-bc-8fnginx-server-jsonc",
        "title": "Trojan-gRPC-Caddy2%EF%BC%8FNginx/server",
        "path": "examples/Trojan-gRPC-Caddy2%EF%BC%8FNginx/server.jsonc",
        "role": "server",
        "protocols": [
            "trojan",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [],
        "features": [
            "gRPC",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"/dev/shm/Xray-Trojan-gRPC.socket,0666\",\r\n      \"protocol\": \"trojan\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"password\": \"\" // 填写你的 password\r\n          }\r\n        ]\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"\" // 填写你的 ServiceName\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"AsIs\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"blocked\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "/dev/shm/Xray-Trojan-gRPC.socket,0666",
                    "protocol": "trojan",
                    "settings": {
                        "clients": [
                            {
                                "password": ""
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "grpcSettings": {
                            "serviceName": ""
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "blocked"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-trojan-tcp-tls-20-minimal-config-client-jsonc",
        "title": "Trojan-TCP-TLS%20(minimal)/config_client",
        "path": "examples/Trojan-TCP-TLS%20(minimal)/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "trojan"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 10800,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"trojan\",\r\n            \"settings\": {\r\n                \"servers\": [\r\n                    {\r\n                        \"address\": \"example.com\",\r\n                        \"port\": 443,\r\n                        \"password\": \"your password\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\"\r\n            }\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 10800,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "trojan",
                    "settings": {
                        "servers": [
                            {
                                "address": "example.com",
                                "port": 443,
                                "password": "your password"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls"
                    }
                }
            ]
        }
    },
    {
        "id": "examples-trojan-tcp-tls-20-minimal-config-server-jsonc",
        "title": "Trojan-TCP-TLS%20(minimal)/config_server",
        "path": "examples/Trojan-TCP-TLS%20(minimal)/config_server.jsonc",
        "role": "server",
        "protocols": [
            "trojan",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 443,\r\n            \"protocol\": \"trojan\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"password\":\"your password\",\r\n                        \"email\": \"love@example.com\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"alpn\": [\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/fullchain.crt\",\r\n                            \"keyFile\": \"/path/to/private.key\"\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 443,
                    "protocol": "trojan",
                    "settings": {
                        "clients": [
                            {
                                "password": "your password",
                                "email": "love@example.com"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/fullchain.crt",
                                    "keyFile": "/path/to/private.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom"
                }
            ]
        }
    },
    {
        "id": "examples-vless-grpc-reality-config-client-jsonc",
        "title": "VLESS-gRPC-REALITY/config_client",
        "path": "examples/VLESS-gRPC-REALITY/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [
            "auto",
            "reality"
        ],
        "features": [
            "REALITY",
            "gRPC",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"access\": \"\",\r\n        \"error\": \"\",\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"tag\": \"socks\",\r\n            \"port\": 800,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\"\r\n                ],\r\n                \"routeOnly\": false\r\n            },\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"allowTransparent\": false\r\n            }\r\n        },\r\n        {\r\n            \"tag\": \"http\",\r\n            \"port\": 801,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"http\",\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\"\r\n                ],\r\n                \"routeOnly\": false\r\n            },\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"allowTransparent\": false\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"tag\": \"proxy\",\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"1.2.3.4\", // Server IPv4\r\n                \"port\": 80,\r\n                \"id\": \"drEwvgYhS15C\",\r\n                \"email\": \"t@t.tt\",\r\n                \"security\": \"auto\",\r\n                \"encryption\": \"none\",\r\n                \"flow\": \"\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"grpc\",\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    \"serverName\": \"www.yahoo.com\",\r\n                    \"fingerprint\": \"chrome\",\r\n                    \"show\": false,\r\n                    \"publicKey\": \"OBR2JYROQB8odK5glVW_KLnsWl3UZ-voyGq_9ihQgTI\",\r\n                    \"shortId\": \"d49d578f280fd83a\",\r\n                    \"spiderX\": \"\"\r\n                },\r\n                \"grpcSettings\": {\r\n                    \"serviceName\": \"\",\r\n                    \"multiMode\": false,\r\n                    \"idle_timeout\": 60,\r\n                    \"health_check_timeout\": 20,\r\n                    \"permit_without_stream\": false,\r\n                    \"initial_windows_size\": 0\r\n                }\r\n            },\r\n            \"mux\": {\r\n                \"enabled\": false,\r\n                \"concurrency\": -1\r\n            }\r\n        },\r\n        {\r\n            \"tag\": \"direct\",\r\n            \"protocol\": \"freedom\",\r\n            \"settings\": {}\r\n        },\r\n        {\r\n            \"tag\": \"block\",\r\n            \"protocol\": \"blackhole\",\r\n            \"settings\": {\r\n                \"response\": {\r\n                    \"type\": \"http\"\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"inboundTag\": [\r\n                    \"api\"\r\n                ],\r\n                \"outboundTag\": \"api\",\r\n                \"enabled\": true\r\n            },\r\n            {\r\n                \"id\": \"5708766234462982042\",\r\n                \"outboundTag\": \"direct\",\r\n                \"ip\": [\r\n                    \"127.0.0.1\",\r\n                    \"192.168.1.1\"\r\n                ],\r\n                \"enabled\": true\r\n            },\r\n            {\r\n                \"id\": \"4875564606963903266\",\r\n                \"outboundTag\": \"proxy\",\r\n                \"domain\": [\r\n                    \"dns.digitalsize.net\"\r\n                ],\r\n                \"enabled\": true\r\n            }\r\n        ]\r\n    }\r\n}\r\n",
        "config": {
            "log": {
                "access": "",
                "error": "",
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "tag": "socks",
                    "port": 800,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ],
                        "routeOnly": false
                    },
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "allowTransparent": false
                    }
                },
                {
                    "tag": "http",
                    "port": 801,
                    "listen": "127.0.0.1",
                    "protocol": "http",
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ],
                        "routeOnly": false
                    },
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "allowTransparent": false
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "proxy",
                    "protocol": "vless",
                    "settings": {
                        "address": "1.2.3.4",
                        "port": 80,
                        "id": "drEwvgYhS15C",
                        "email": "t@t.tt",
                        "security": "auto",
                        "encryption": "none",
                        "flow": ""
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "security": "reality",
                        "realitySettings": {
                            "serverName": "www.yahoo.com",
                            "fingerprint": "chrome",
                            "show": false,
                            "publicKey": "OBR2JYROQB8odK5glVW_KLnsWl3UZ-voyGq_9ihQgTI",
                            "shortId": "d49d578f280fd83a",
                            "spiderX": ""
                        },
                        "grpcSettings": {
                            "serviceName": "",
                            "multiMode": false,
                            "idle_timeout": 60,
                            "health_check_timeout": 20,
                            "permit_without_stream": false,
                            "initial_windows_size": 0
                        }
                    },
                    "mux": {
                        "enabled": false,
                        "concurrency": -1
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "block",
                    "protocol": "blackhole",
                    "settings": {
                        "response": {
                            "type": "http"
                        }
                    }
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "inboundTag": [
                            "api"
                        ],
                        "outboundTag": "api",
                        "enabled": true
                    },
                    {
                        "id": "5708766234462982042",
                        "outboundTag": "direct",
                        "ip": [
                            "127.0.0.1",
                            "192.168.1.1"
                        ],
                        "enabled": true
                    },
                    {
                        "id": "4875564606963903266",
                        "outboundTag": "proxy",
                        "domain": [
                            "dns.digitalsize.net"
                        ],
                        "enabled": true
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-grpc-reality-config-server-jsonc",
        "title": "VLESS-gRPC-REALITY/config_server",
        "path": "examples/VLESS-gRPC-REALITY/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "udp",
            "grpc"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY",
            "gRPC",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"IPIfNonMatch\",\r\n        \"rules\": [\r\n            {\r\n                \"port\": \"80\",\r\n                \"network\": \"udp\",\r\n                \"outboundTag\": \"block\"\r\n            },\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 80,\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"drEwvgYhS15C\",\r\n                        \"flow\": \"\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"grpc\",\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    \"show\": false,\r\n                    \"dest\": \"www.yahoo.com:443\",\r\n                    \"xver\": 0,\r\n                    \"serverNames\": [\r\n                        \"www.yahoo.com\",\r\n                        \"news.yahoo.com\"\r\n                    ],\r\n                    \"privateKey\": \"kOsBHSgxhAfCeQIQyJvupiXTmQrMmsqi6y6Wc5OQZXc\",\r\n                    \"shortIds\": [\r\n                        \"d49d578f280fd83a\"\r\n                    ]\r\n                },\r\n                \"grpcSettings\": {\r\n                    \"serviceName\": \"\"\r\n                }\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ]\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ],\r\n    \"policy\": {\r\n        \"levels\": {\r\n            \"0\": {\r\n                \"handshake\": 2,\r\n                \"connIdle\": 120\r\n            }\r\n        }\r\n    }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "port": "80",
                        "network": "udp",
                        "outboundTag": "block"
                    },
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 80,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "drEwvgYhS15C",
                                "flow": ""
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "security": "reality",
                        "realitySettings": {
                            "show": false,
                            "dest": "www.yahoo.com:443",
                            "xver": 0,
                            "serverNames": [
                                "www.yahoo.com",
                                "news.yahoo.com"
                            ],
                            "privateKey": "kOsBHSgxhAfCeQIQyJvupiXTmQrMmsqi6y6Wc5OQZXc",
                            "shortIds": [
                                "d49d578f280fd83a"
                            ]
                        },
                        "grpcSettings": {
                            "serviceName": ""
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ],
            "policy": {
                "levels": {
                    "0": {
                        "handshake": 2,
                        "connIdle": 120
                    }
                }
            }
        }
    },
    {
        "id": "examples-vless-grpc-client-jsonc",
        "title": "VLESS-GRPC/client",
        "path": "examples/VLESS-GRPC/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "gRPC",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {},\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true\r\n      }\r\n    },\r\n    {\r\n      \"port\": \"1081\",\r\n      \"protocol\": \"http\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"xx.com\",\r\n        \"port\": 443,\r\n        \"id\": \"\", //填写你的 UUID\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"security\": \"tls\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"\", //填写你的 ServiceName，不带任何斜杠\r\n          \"multiMode\": false,\r\n          //\"idle_timeout\": 60, //当这段时间内没有数据传输时，将会进行健康检查。可能会解决一些“断流”问题。\r\n          //\"initial_windows_size\": 35536, //通过 Cloudflare CDN 时，防止 Cloudflare CDN 发送意外的 h2 GOAWAY 帧以关闭现有连接。\r\n          //\"permit_without_stream\": true //通过 Cloudflare CDN 且空闲（没有子连接）时，防止 Cloudflare CDN 关闭连接。\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {},
            "inbounds": [
                {
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true
                    }
                },
                {
                    "port": "1081",
                    "protocol": "http",
                    "settings": {}
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "xx.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "security": "tls",
                        "grpcSettings": {
                            "serviceName": "",
                            "multiMode": false
                        }
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-grpc-server-jsonc",
        "title": "VLESS-GRPC/server",
        "path": "examples/VLESS-GRPC/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "grpc"
        ],
        "securities": [],
        "features": [
            "gRPC",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"/dev/shm/Xray-VLESS-gRPC.socket,0666\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\" // 填写你的 UUID\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"grpc\",\r\n        \"grpcSettings\": {\r\n          \"serviceName\": \"\" // 填写你的 ServiceName\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"AsIs\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"blocked\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "/dev/shm/Xray-VLESS-gRPC.socket,0666",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "grpc",
                        "grpcSettings": {
                            "serviceName": ""
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "blocked"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-http-caddy-vless-h2c-caddy-client-jsonc",
        "title": "VLESS-HTTP-Caddy/VLESS-H2C-Caddy/client",
        "path": "examples/VLESS-HTTP-Caddy/VLESS-H2C-Caddy/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "h2"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "routing"
        ],
        "raw": "{\r\n  \"log\": {},\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true\r\n      }\r\n    },\r\n    {\r\n      \"port\": \"1081\",\r\n      \"protocol\": \"http\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"xx.com\",\r\n        \"port\": 443,\r\n        \"id\": \"\",\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"h2\",\r\n        \"security\": \"tls\",\r\n        \"httpSettings\": {\r\n          \"host\": [\r\n            \"xx.com\"\r\n          ],\r\n          \"path\": \"/path\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {},
            "inbounds": [
                {
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true
                    }
                },
                {
                    "port": "1081",
                    "protocol": "http",
                    "settings": {}
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "xx.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "h2",
                        "security": "tls",
                        "httpSettings": {
                            "host": [
                                "xx.com"
                            ],
                            "path": "/path"
                        }
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-http-caddy-vless-h2c-caddy-server-jsonc",
        "title": "VLESS-HTTP-Caddy/VLESS-H2C-Caddy/server",
        "path": "examples/VLESS-HTTP-Caddy/VLESS-H2C-Caddy/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "h2"
        ],
        "securities": [
            "none"
        ],
        "features": [
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": 2001,\r\n      \"listen\": \"127.0.0.1\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\",\r\n            \"email\": \"love@example.com\"\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"security\": \"none\",\r\n        \"network\": \"h2\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/path\",\r\n          \"host\": [\r\n            \"xx.com\"\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"AsIs\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"blocked\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 2001,
                    "listen": "127.0.0.1",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "security": "none",
                        "network": "h2",
                        "httpSettings": {
                            "path": "/path",
                            "host": [
                                "xx.com"
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "blocked"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-http-caddy-vless-h3-caddy-client-jsonc",
        "title": "VLESS-HTTP-Caddy/VLESS-H3-Caddy/client",
        "path": "examples/VLESS-HTTP-Caddy/VLESS-H3-Caddy/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {},\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true\r\n      }\r\n    },\r\n    {\r\n      \"port\": \"1081\",\r\n      \"protocol\": \"http\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"xx.com\",\r\n        \"port\": 443,\r\n        \"id\": \"\",\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"http\",\r\n        \"security\": \"tls\",\r\n        \"httpSettings\": {\r\n          \"host\": [\r\n            \"xx.com\"\r\n          ],\r\n          \"path\": \"/path\"\r\n        }\r\n      },\r\n      \"tlsSettings\": {\r\n        \"alpn\": [\r\n          \"h3\"\r\n        ],\r\n        \"serverName\": \"xx.com\"\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {},
            "inbounds": [
                {
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true
                    }
                },
                {
                    "port": "1081",
                    "protocol": "http",
                    "settings": {}
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "xx.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "http",
                        "security": "tls",
                        "httpSettings": {
                            "host": [
                                "xx.com"
                            ],
                            "path": "/path"
                        }
                    },
                    "tlsSettings": {
                        "alpn": [
                            "h3"
                        ],
                        "serverName": "xx.com"
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-http-caddy-vless-h3-caddy-server-jsonc",
        "title": "VLESS-HTTP-Caddy/VLESS-H3-Caddy/server",
        "path": "examples/VLESS-HTTP-Caddy/VLESS-H3-Caddy/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": 2001,\r\n      \"listen\": \"127.0.0.1\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\",\r\n            \"email\": \"love@example.com\"\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"security\": \"tls\",\r\n        \"network\": \"http\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/path\",\r\n          \"host\": [\r\n            \"xx.com\"\r\n          ]\r\n        },\r\n        \"tlsSettings\": {\r\n          // \"rejectUnknownSni\": true,\r\n          \"minVersion\": \"1.3\",\r\n          \"alpn\": [\r\n            \"h3\"\r\n          ],\r\n          \"certificates\": [\r\n            {\r\n              \"certificateFile\": \"CA.crt\", // 换成你的证书，绝对路径\r\n              \"keyFile\": \"priv.key\" // 换成你的私钥，绝对路径\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"AsIs\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"blocked\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 2001,
                    "listen": "127.0.0.1",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "security": "tls",
                        "network": "http",
                        "httpSettings": {
                            "path": "/path",
                            "host": [
                                "xx.com"
                            ]
                        },
                        "tlsSettings": {
                            "minVersion": "1.3",
                            "alpn": [
                                "h3"
                            ],
                            "certificates": [
                                {
                                    "certificateFile": "CA.crt",
                                    "keyFile": "priv.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "blocked"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-http-caddy-vless-h3-to-h2c-caddy-client-jsonc",
        "title": "VLESS-HTTP-Caddy/VLESS-H3-To-H2C-Caddy/client",
        "path": "examples/VLESS-HTTP-Caddy/VLESS-H3-To-H2C-Caddy/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {},\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true\r\n      }\r\n    },\r\n    {\r\n      \"port\": \"1081\",\r\n      \"protocol\": \"http\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"xx.com\",\r\n        \"port\": 443,\r\n        \"id\": \"\",\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"http\",\r\n        \"security\": \"tls\",\r\n        \"httpSettings\": {\r\n          \"host\": [\r\n            \"xx.com\"\r\n          ],\r\n          \"path\": \"/path\"\r\n        },\r\n        \"tlsSettings\": {\r\n          \"alpn\": [\r\n            \"h3\"\r\n          ],\r\n          \"serverName\": \"xx.com\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {},
            "inbounds": [
                {
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true
                    }
                },
                {
                    "port": "1081",
                    "protocol": "http",
                    "settings": {}
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "xx.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "http",
                        "security": "tls",
                        "httpSettings": {
                            "host": [
                                "xx.com"
                            ],
                            "path": "/path"
                        },
                        "tlsSettings": {
                            "alpn": [
                                "h3"
                            ],
                            "serverName": "xx.com"
                        }
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-http-caddy-vless-h3-to-h2c-caddy-server-jsonc",
        "title": "VLESS-HTTP-Caddy/VLESS-H3-To-H2C-Caddy/server",
        "path": "examples/VLESS-HTTP-Caddy/VLESS-H3-To-H2C-Caddy/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "none"
        ],
        "features": [
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": 2001,\r\n      \"listen\": \"127.0.0.1\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\",\r\n            \"email\": \"love@example.com\"\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"security\": \"none\",\r\n        \"network\": \"http\",\r\n        \"httpSettings\": {\r\n          \"path\": \"/path\",\r\n          \"host\": [\r\n            \"xx.com\"\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"AsIs\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"blocked\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 2001,
                    "listen": "127.0.0.1",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "security": "none",
                        "network": "http",
                        "httpSettings": {
                            "path": "/path",
                            "host": [
                                "xx.com"
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "blocked"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-mkcpseed-config-client-jsonc",
        "title": "VLESS-mKCPSeed/config_client",
        "path": "examples/VLESS-mKCPSeed/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [],
        "securities": [],
        "features": [
            "mKCP"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 1080,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"{{ host }}\",\r\n                \"port\": {{ port }},\r\n                \"id\": \"{{ uuid }}\",\r\n                \"encryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"kcp\",\r\n                \"kcpSettings\": {\r\n                    \"seed\": \"{{ seed }}\"\r\n                }\r\n            }\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 1080,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "{{ host }}",
                        "port": {}
                    },
                    "id": "{{ uuid }}",
                    "encryption": "none"
                },
                "streamSettings",
                "kcpSettings"
            ]
        }
    },
    {
        "id": "examples-vless-mkcpseed-config-server-jsonc",
        "title": "VLESS-mKCPSeed/config_server",
        "path": "examples/VLESS-mKCPSeed/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless"
        ],
        "transports": [],
        "securities": [],
        "features": [
            "mKCP"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"port\": {{ port }}, \r\n            \"settings\": {\r\n                \"decryption\":\"none\",\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"{{ uuid }}\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"kcp\",\r\n                \"kcpSettings\": {\r\n                    \"seed\": \"{{ seed }}\"\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "protocol": "vless",
                    "port": {}
                },
                "settings",
                "clients"
            ]
        }
    },
    {
        "id": "examples-vless-tcp-reality-20-without-20being-20stolen-config-client-jsonc",
        "title": "VLESS-TCP-REALITY%20(without%20being%20stolen)/config_client",
        "path": "examples/VLESS-TCP-REALITY%20(without%20being%20stolen)/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY"
        ],
        "raw": "// 直接从其他示例里 copy 过来的，客户端不需要任何特殊修改，要填的东西也一致\r\n{\r\n    \"log\": {\r\n        \"loglevel\": \"debug\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\", \r\n            \"port\": 10808, \r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ],\r\n                \"routeOnly\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"127.0.0.1\",\r\n                \"port\": 443,\r\n                \"id\": \"\", // Needs to match server side\r\n                \"encryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    \"fingerprint\": \"chrome\", \r\n                    \"serverName\": \"speed.cloudflare.com\",\r\n                    \"publicKey\": \"\",\r\n                    \"spiderX\": \"\",\r\n                    \"shortId\": \"\"\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 10808,
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ],
                        "routeOnly": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "127.0.0.1",
                        "port": 443,
                        "id": "",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "reality",
                        "realitySettings": {
                            "fingerprint": "chrome",
                            "serverName": "speed.cloudflare.com",
                            "publicKey": "",
                            "spiderX": "",
                            "shortId": ""
                        }
                    },
                    "tag": "proxy"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-reality-20-without-20being-20stolen-config-server-jsonc",
        "title": "VLESS-TCP-REALITY%20(without%20being%20stolen)/config_server",
        "path": "examples/VLESS-TCP-REALITY%20(without%20being%20stolen)/config_server.jsonc",
        "role": "server",
        "protocols": [
            "dokodemo-door",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"debug\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"tag\": \"dokodemo-in\",\r\n            \"port\": 4431, // 任意空闲端口，如果要自己修改记得这里和下面的 reality 入站 dest 要同步修改\r\n            \"protocol\": \"dokodemo-door\",\r\n            \"settings\": {\r\n                // reality dest 的实际设置位置 和普通 reality 要求相同\r\n                // 这里演示 dest 设置为 cloudflare 不被偷跑流量所以设置为 speed.cloudflare.com 了\r\n                \"address\": \"speed.cloudflare.com\",\r\n                \"port\": 443,\r\n                \"network\": \"tcp\"\r\n            },\r\n            \"sniffing\": { // 这里的 sniffing 不是多余的，别乱动\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"tls\"\r\n                ],\r\n                \"routeOnly\": true\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 443,\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\" // uuid\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    // 指向前面设置的 dokodemo-door 入站\r\n                    \"dest\": \"127.0.0.1:4431\",\r\n                    // serverNames 仍然需要在这里正常填写\r\n                    \"serverNames\": [\r\n                        \"speed.cloudflare.com\"\r\n                    ],\r\n                    \"privateKey\": \"\", // 运行 `xray x25519` 生成\r\n                    \"shortIds\": [\r\n                        \"\",\r\n                        \"0123456789abcdef\"\r\n                    ]\r\n                }\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ],\r\n                \"routeOnly\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ],\r\n    \"routing\": {\r\n        \"rules\": [\r\n            {\r\n                \"inboundTag\": [\r\n                    \"dokodemo-in\"\r\n                ],\r\n                // 重要，这个域名列表需要和 realitySettings 的 serverNames 保持一致\r\n                \"domain\": [\r\n                    \"speed.cloudflare.com\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            },\r\n            {\r\n                \"inboundTag\": [\r\n                    \"dokodemo-in\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    }\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "tag": "dokodemo-in",
                    "port": 4431,
                    "protocol": "dokodemo-door",
                    "settings": {
                        "address": "speed.cloudflare.com",
                        "port": 443,
                        "network": "tcp"
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "tls"
                        ],
                        "routeOnly": true
                    }
                },
                {
                    "listen": "0.0.0.0",
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "reality",
                        "realitySettings": {
                            "dest": "127.0.0.1:4431",
                            "serverNames": [
                                "speed.cloudflare.com"
                            ],
                            "privateKey": "",
                            "shortIds": [
                                "",
                                "0123456789abcdef"
                            ]
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ],
                        "routeOnly": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ],
            "routing": {
                "rules": [
                    {
                        "inboundTag": [
                            "dokodemo-in"
                        ],
                        "domain": [
                            "speed.cloudflare.com"
                        ],
                        "outboundTag": "direct"
                    },
                    {
                        "inboundTag": [
                            "dokodemo-in"
                        ],
                        "outboundTag": "block"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-tcp-tls-proxy-20protocol-config-client-jsonc",
        "title": "VLESS-TCP-TLS-proxy%20protocol/config_client",
        "path": "examples/VLESS-TCP-TLS-proxy%20protocol/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"1.2.3.4\",\r\n                \"port\": 443,\r\n                \"id\": \"\",\r\n                \"encryption\": \"none\",\r\n                \"level\": 0\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.domain\",\r\n                    \"allowInsecure\": false,\r\n                    \"alpn\": [\r\n                        \"h2\",\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"disableSessionResumption\": true\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ],\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"tag\": \"direct\"\r\n            }\r\n        ]\r\n    }\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "1.2.3.4",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "example.domain",
                            "allowInsecure": false,
                            "alpn": [
                                "h2",
                                "http/1.1"
                            ],
                            "disableSessionResumption": true
                        }
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "tag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-tcp-tls-proxy-20protocol-config-server-jsonc",
        "title": "VLESS-TCP-TLS-proxy%20protocol/config_server",
        "path": "examples/VLESS-TCP-TLS-proxy%20protocol/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "fallbacks"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 443,\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\",\r\n                        \"level\": 0,\r\n                        \"email\": \"love@example.com\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\",\r\n                \"fallbacks\": [\r\n                    {\r\n                        \"dest\": 8001,\r\n                        \"xver\": 1\r\n                    },\r\n                    {\r\n                        \"alpn\": \"h2\",\r\n                        \"dest\": 8002,\r\n                        \"xver\": 1\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.domain\",\r\n                    \"alpn\": [\r\n                        \"h2\",\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/fullchain.crt\",\r\n                            \"keyFile\": \"/path/to/private.key\"\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "dest": 8001,
                                "xver": 1
                            },
                            {
                                "alpn": "h2",
                                "dest": 8002,
                                "xver": 1
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "example.domain",
                            "alpn": [
                                "h2",
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/fullchain.crt",
                                    "keyFile": "/path/to/private.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-tls-ws-config-client-tcp-tls-jsonc",
        "title": "VLESS-TCP-TLS-WS/config_client_tcp_tls",
        "path": "examples/VLESS-TCP-TLS-WS/config_client_tcp_tls.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 10800,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"example.com\", // 换成你的域名或服务器 IP（发起请求时无需解析域名了）\r\n                \"port\": 443,\r\n                \"id\": \"\", // 填写你的 UUID\r\n                \"encryption\": \"none\",\r\n                \"level\": 0\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.com\" // 换成你的域名\r\n                }\r\n            }\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 10800,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "example.com"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-tls-ws-config-client-ws-tls-jsonc",
        "title": "VLESS-TCP-TLS-WS/config_client_ws_tls",
        "path": "examples/VLESS-TCP-TLS-WS/config_client_ws_tls.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 10800,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"example.com\", // 换成你的域名或服务器 IP（发起请求时无需解析域名了）\r\n                \"port\": 443,\r\n                \"id\": \"\", // 填写你的 UUID\r\n                \"encryption\": \"none\",\r\n                \"level\": 0\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"ws\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.com\" // 换成你的域名\r\n                },\r\n                \"wsSettings\": {\r\n                    \"path\": \"/websocket\" // 必须换成自定义的 PATH，需要和服务端的一致\r\n                }\r\n            }\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 10800,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "example.com"
                        },
                        "wsSettings": {
                            "path": "/websocket"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-tls-ws-config-server-jsonc",
        "title": "VLESS-TCP-TLS-WS/config_server",
        "path": "examples/VLESS-TCP-TLS-WS/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp",
            "ws"
        ],
        "securities": [
            "tls",
            "none"
        ],
        "features": [
            "TLS",
            "fallbacks",
            "WebSocket",
            "PROXY protocol"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 443,\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\", // 填写你的 UUID\r\n                        \"level\": 0,\r\n                        \"email\": \"love@example.com\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\",\r\n                \"fallbacks\": [\r\n                    {\r\n                        \"dest\": 80\r\n                    },\r\n                    {\r\n                        \"path\": \"/websocket\", // 必须换成自定义的 PATH\r\n                        \"dest\": 1234,\r\n                        \"xver\": 1\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"alpn\": [\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/fullchain.crt\", // 换成你的证书，绝对路径\r\n                            \"keyFile\": \"/path/to/private.key\" // 换成你的私钥，绝对路径\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        },\r\n        {\r\n            \"port\": 1234,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\", // 填写你的 UUID\r\n                        \"level\": 0,\r\n                        \"email\": \"love@example.com\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"ws\",\r\n                \"security\": \"none\",\r\n                \"wsSettings\": {\r\n                    \"acceptProxyProtocol\": true, // 提醒：若你用 Nginx/Caddy 等反代 WS，需要删掉这行\r\n                    \"path\": \"/websocket\" // 必须换成自定义的 PATH，需要和上面的一致\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "dest": 80
                            },
                            {
                                "path": "/websocket",
                                "dest": 1234,
                                "xver": 1
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/fullchain.crt",
                                    "keyFile": "/path/to/private.key"
                                }
                            ]
                        }
                    }
                },
                {
                    "port": 1234,
                    "listen": "127.0.0.1",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "none",
                        "wsSettings": {
                            "acceptProxyProtocol": true,
                            "path": "/websocket"
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-tls-config-client-jsonc",
        "title": "VLESS-TCP-TLS/config_client",
        "path": "examples/VLESS-TCP-TLS/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"1.2.3.4\",\r\n                \"port\": 443,\r\n                \"id\": \"\",\r\n                \"encryption\": \"none\",\r\n                \"level\": 0\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.domain\",\r\n                    \"allowInsecure\": false,\r\n                    \"alpn\": [\r\n                        \"h2\",\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"disableSessionResumption\": true\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ],\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    }\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "1.2.3.4",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "example.domain",
                            "allowInsecure": false,
                            "alpn": [
                                "h2",
                                "http/1.1"
                            ],
                            "disableSessionResumption": true
                        }
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-tcp-tls-config-server-jsonc",
        "title": "VLESS-TCP-TLS/config_server",
        "path": "examples/VLESS-TCP-TLS/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "fallbacks"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 443,\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\",\r\n                        \"level\": 0,\r\n                        \"email\": \"love@example.com\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\",\r\n                \"fallbacks\": [\r\n                    {\r\n                        \"dest\": 8001\r\n                    },\r\n                    {\r\n                        \"alpn\": \"h2\",\r\n                        \"dest\": 8002\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.domain\",\r\n                    \"alpn\": [\r\n                        \"h2\",\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/fullchain.crt\",\r\n                            \"keyFile\": \"/path/to/private.key\"\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "dest": 8001
                            },
                            {
                                "alpn": "h2",
                                "dest": 8002
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "example.domain",
                            "alpn": [
                                "h2",
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/fullchain.crt",
                                    "keyFile": "/path/to/private.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-tls-20-maximal-20by-20rprx-config-client-jsonc",
        "title": "VLESS-TCP-TLS%20(maximal%20by%20rprx)/config_client",
        "path": "examples/VLESS-TCP-TLS%20(maximal%20by%20rprx)/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 10800,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"example.com\", // 换成你的域名或服务器 IP（发起请求时无需解析域名了）\r\n                \"port\": 443,\r\n                \"id\": \"\", // 填写你的 UUID\r\n                \"encryption\": \"none\",\r\n                \"level\": 0\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.com\" // 换成你的域名\r\n                }\r\n            }\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 10800,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "example.com"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-tls-20-maximal-20by-20rprx-config-server-jsonc",
        "title": "VLESS-TCP-TLS%20(maximal%20by%20rprx)/config_server",
        "path": "examples/VLESS-TCP-TLS%20(maximal%20by%20rprx)/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "fallbacks"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 443,\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\", // 填写你的 UUID\r\n                        \"level\": 0,\r\n                        \"email\": \"love@example.com\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\",\r\n                \"fallbacks\": [\r\n                    {\r\n                        \"dest\": \"/dev/shm/default.sock\",\r\n                        \"xver\": 1\r\n                    },\r\n                    {\r\n                        \"alpn\": \"h2\",\r\n                        \"dest\": \"/dev/shm/h2c.sock\",\r\n                        \"xver\": 1\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"alpn\": [\r\n                        \"h2\",\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/fullchain.crt\", // 换成你的证书，绝对路径\r\n                            \"keyFile\": \"/path/to/private.key\" // 换成你的私钥，绝对路径\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "dest": "/dev/shm/default.sock",
                                "xver": 1
                            },
                            {
                                "alpn": "h2",
                                "dest": "/dev/shm/h2c.sock",
                                "xver": 1
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "h2",
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/fullchain.crt",
                                    "keyFile": "/path/to/private.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-tls-20-minimal-20by-20rprx-config-client-jsonc",
        "title": "VLESS-TCP-TLS%20(minimal%20by%20rprx)/config_client",
        "path": "examples/VLESS-TCP-TLS%20(minimal%20by%20rprx)/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 10800,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"example.com\", // 换成你的域名\r\n                \"port\": 443,\r\n                \"id\": \"\", // 填写你的 UUID\r\n                \"encryption\": \"none\",\r\n                \"level\": 0\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\"\r\n            }\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 10800,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls"
                    }
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-tls-20-minimal-20by-20rprx-config-server-jsonc",
        "title": "VLESS-TCP-TLS%20(minimal%20by%20rprx)/config_server",
        "path": "examples/VLESS-TCP-TLS%20(minimal%20by%20rprx)/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "fallbacks"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 443,\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\", // 填写你的 UUID\r\n                        \"level\": 0,\r\n                        \"email\": \"love@example.com\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\",\r\n                \"fallbacks\": [\r\n                    {\r\n                        \"dest\": 80\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"alpn\": [\r\n                        \"http/1.1\"\r\n                    ],\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/fullchain.crt\", // 换成你的证书，绝对路径\r\n                            \"keyFile\": \"/path/to/private.key\" // 换成你的私钥，绝对路径\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "dest": 80
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "http/1.1"
                            ],
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/fullchain.crt",
                                    "keyFile": "/path/to/private.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-xtls-vision-reality-config-client-jsonc",
        "title": "VLESS-TCP-XTLS-Vision-REALITY/config_client",
        "path": "examples/VLESS-TCP-XTLS-Vision-REALITY/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"debug\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\", \r\n            \"port\": 10808, \r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ],\r\n                \"routeOnly\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"\",\r\n                \"port\": 443,\r\n                \"id\": \"\", // Needs to match server side\r\n                \"encryption\": \"none\",\r\n                \"flow\": \"xtls-rprx-vision\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    \"fingerprint\": \"chrome\", \r\n                    \"serverName\": \"\", // A website that support TLS1.3 and h2. If your dest is `1.1.1.1:443`, then leave it empty\r\n                    \"publicKey\": \"\", // run `xray x25519` to generate. Public and private keys need to be corresponding.\r\n                    \"spiderX\": \"\", // If your dest is `1.1.1.1:443`, then you can fill it with `/dns-query/` or just leave it empty\r\n                    \"shortId\": \"\" // Required\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 10808,
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ],
                        "routeOnly": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "flow": "xtls-rprx-vision"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "reality",
                        "realitySettings": {
                            "fingerprint": "chrome",
                            "serverName": "",
                            "publicKey": "",
                            "spiderX": "",
                            "shortId": ""
                        }
                    },
                    "tag": "proxy"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-xtls-vision-reality-config-server-jsonc",
        "title": "VLESS-TCP-XTLS-Vision-REALITY/config_server",
        "path": "examples/VLESS-TCP-XTLS-Vision-REALITY/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"debug\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 443, \r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\", // run `xray uuid` to generate\r\n                        \"flow\": \"xtls-rprx-vision\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    \"dest\": \"\", // A website that support TLS1.3 and h2. You can also use `1.1.1.1:443` as dest\r\n                    \"serverNames\": [\r\n                        \"\"    // A server name in the cert of dest site. If you use `1.1.1.1:443` as dest, then you can leave `serverNames` empty, it is a possible ways to bypass Iran's internet speed restrictions.\r\n                    ],\r\n                    \"privateKey\": \"\", // run `xray x25519` to generate. Public and private keys need to be corresponding.\r\n                    \"shortIds\": [// Required, list of shortIds available to clients, can be used to distinguish different clients\r\n                        \"\", // If this item exists, client shortId can be empty\r\n                        \"0123456789abcdef\" // 0 to f, length is a multiple of 2, maximum length is 16\r\n                    ]\r\n                }\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ],\r\n                \"routeOnly\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "debug"
            },
            "inbounds": [
                {
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "flow": "xtls-rprx-vision"
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "reality",
                        "realitySettings": {
                            "dest": "",
                            "serverNames": [
                                ""
                            ],
                            "privateKey": "",
                            "shortIds": [
                                "",
                                "0123456789abcdef"
                            ]
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ],
                        "routeOnly": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-xtls-vision-config-client-jsonc",
        "title": "VLESS-TCP-XTLS-Vision/config_client",
        "path": "examples/VLESS-TCP-XTLS-Vision/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"IPIfNonMatch\",\r\n        \"rules\": [\r\n            {\r\n                \"domain\": [\r\n                    \"geosite:cn\",\r\n                    \"geosite:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            },\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:cn\",\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\", // Fill in 0.0.0.0 to allow connections from LAN\r\n            \"port\": 10808, // local socks listening port\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\"\r\n                ]\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\", // Fill in \"0.0.0.0\" to allow connections from LAN\r\n            \"port\": 10809, // Local http listening port\r\n            \"protocol\": \"http\",\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\"\r\n                ]\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"\", // Address, domain name or IP of the server\r\n                \"port\": 443, // Port, consistent with the server\r\n                \"id\": \"\", // User ID, consistent with the server\r\n                \"encryption\": \"none\",\r\n                \"flow\": \"xtls-rprx-vision\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"\", // SNI, if \"address\" is filled with the domain name of the server, it can be left blank. If \"address\" is filled with the IP of the server, fill in the domain name contained in the certificate of the server here\r\n                    \"allowInsecure\": false,\r\n                    \"fingerprint\": \"chrome\" // Used to configure the fingerprint of the specified TLS Client Hello, Xray will simulate the TLS fingerprint through the uTLS library, or generate it randomly\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "domain": [
                            "geosite:cn",
                            "geosite:private"
                        ],
                        "outboundTag": "direct"
                    },
                    {
                        "ip": [
                            "geoip:cn",
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 10808,
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": 10809,
                    "protocol": "http",
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "flow": "xtls-rprx-vision"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": "",
                            "allowInsecure": false,
                            "fingerprint": "chrome"
                        }
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tcp-xtls-vision-config-server-jsonc",
        "title": "VLESS-TCP-XTLS-Vision/config_server",
        "path": "examples/VLESS-TCP-XTLS-Vision/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "fallbacks",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"IPIfNonMatch\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:cn\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\", // \"0.0.0.0\" Indicates listening to both IPv4 and IPv6\r\n            \"port\": 443, // The port on which the server listens\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\", // User ID, perform xray uuid generation, or a string of 1-30 bytes\r\n                        \"flow\": \"xtls-rprx-vision\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\",\r\n                \"fallbacks\": [\r\n                    {\r\n                        \"dest\": \"8001\",\r\n                        \"xver\": 1\r\n                    },\r\n                    {\r\n                        \"alpn\": \"h2\",\r\n                        \"dest\": \"8002\",\r\n                        \"xver\": 1\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"rejectUnknownSni\": true,\r\n                    \"minVersion\": \"1.2\",\r\n                    \"certificates\": [\r\n                        {\r\n                            \"ocspStapling\": 3600,\r\n                            \"certificateFile\": \"/etc/ssl/private/fullchain.cer\", // For the certificate file, it is recommended to use fullchain (full SSL certificate chain). If there is only a website certificate, v2rayN can be used but v2rayNG cannot be used. Usually, the extension is not distinguished\r\n                            \"keyFile\": \"/etc/ssl/private/private.key\" // private key file\r\n                        }\r\n                    ]\r\n                }\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\"\r\n                ]\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ],\r\n    \"policy\": {\r\n        \"levels\": {\r\n            \"0\": {\r\n                \"handshake\": 2, // The handshake time limit when the connection is established, in seconds, the default value is 4, it is recommended to be different from the default value\r\n                \"connIdle\": 120 // Connection idle time limit in seconds, the default value is 300, it is recommended to be different from the default value\r\n            }\r\n        }\r\n    }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "ip": [
                            "geoip:cn"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "flow": "xtls-rprx-vision"
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "dest": "8001",
                                "xver": 1
                            },
                            {
                                "alpn": "h2",
                                "dest": "8002",
                                "xver": 1
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "rejectUnknownSni": true,
                            "minVersion": "1.2",
                            "certificates": [
                                {
                                    "ocspStapling": 3600,
                                    "certificateFile": "/etc/ssl/private/fullchain.cer",
                                    "keyFile": "/etc/ssl/private/private.key"
                                }
                            ]
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ],
            "policy": {
                "levels": {
                    "0": {
                        "handshake": 2,
                        "connIdle": 120
                    }
                }
            }
        }
    },
    {
        "id": "examples-vless-tcp-config-client-jsonc",
        "title": "VLESS-TCP/config_client",
        "path": "examples/VLESS-TCP/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"1.2.3.4\",\r\n                \"port\": 1234,\r\n                \"id\": \"\",\r\n                \"encryption\": \"none\",\r\n                \"level\": 0\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\"\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ],\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    }\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "1.2.3.4",
                        "port": 1234,
                        "id": "",
                        "encryption": "none",
                        "level": 0
                    },
                    "streamSettings": {
                        "network": "tcp"
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-tcp-config-server-jsonc",
        "title": "VLESS-TCP/config_server",
        "path": "examples/VLESS-TCP/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "fallbacks"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\",\r\n                        \"level\": 0,\r\n                        \"email\": \"love@example.com\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\",\r\n                \"fallbacks\": [\r\n                    {\r\n                        \"dest\": 8001\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\"\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "level": 0,
                                "email": "love@example.com"
                            }
                        ],
                        "decryption": "none",
                        "fallbacks": [
                            {
                                "dest": 8001
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp"
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tls-splithttp-caddynginx-client-jsonc",
        "title": "VLESS-TLS-SplitHTTP-CaddyNginx/client",
        "path": "examples/VLESS-TLS-SplitHTTP-CaddyNginx/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "splithttp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "SplitHTTP"
        ],
        "raw": "{\r\n    \"log\": {\r\n      \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n      {\r\n        \"listen\": \"127.0.0.1\",\r\n        \"port\": 10808,\r\n        \"protocol\": \"socks\",\r\n        \"settings\": {\r\n            \"udp\": true\r\n        }\r\n      }\r\n    ],\r\n    \"outbounds\": [\r\n      {\r\n        \"protocol\": \"vless\",\r\n        \"settings\": {\r\n          \"address\": \"\",\r\n          \"port\": 443,\r\n          \"id\": \"\",\r\n          \"encryption\": \"none\"\r\n        },\r\n        \"streamSettings\": {\r\n          \"network\": \"splithttp\",\r\n          \"splithttpSettings\": {\r\n            \"path\": \"/split\"\r\n          },\r\n          \"security\": \"tls\",\r\n          \"tlsSettings\": {\r\n            \"serverName\": \"\"\r\n          }\r\n        },\r\n        \"tag\": \"proxy\"\r\n      }\r\n    ]\r\n  }\r\n  \r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 10808,
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "",
                        "port": 443,
                        "id": "",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "splithttp",
                        "splithttpSettings": {
                            "path": "/split"
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "serverName": ""
                        }
                    },
                    "tag": "proxy"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tls-splithttp-caddynginx-server-jsonc",
        "title": "VLESS-TLS-SplitHTTP-CaddyNginx/server",
        "path": "examples/VLESS-TLS-SplitHTTP-CaddyNginx/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "splithttp"
        ],
        "securities": [],
        "features": [
            "SplitHTTP"
        ],
        "raw": "{\r\n    \"log\": {\r\n      \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n      {\r\n        \"listen\": \"127.0.0.1\",\r\n        \"port\": 1234,\r\n        \"protocol\": \"vless\",\r\n        \"settings\": {\r\n          \"clients\": [\r\n            {\r\n              \"id\": \"\"\r\n            }\r\n          ],\r\n          \"decryption\": \"none\"\r\n        },\r\n        \"streamSettings\": {\r\n          \"network\": \"splithttp\",\r\n          \"splithttpSettings\": {\r\n            \"path\": \"/split\"\r\n          }\r\n        },\r\n        \"sniffing\": {\r\n          \"enabled\": true,\r\n          \"destOverride\": [\r\n            \"http\",\r\n            \"tls\",\r\n            \"quic\"\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"outbounds\": [\r\n      {\r\n        \"protocol\": \"freedom\",\r\n        \"tag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n  \r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 1234,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "splithttp",
                        "splithttpSettings": {
                            "path": "/split"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vless-tls-splithttp-h3-client-jsonc",
        "title": "VLESS-TLS-SplitHTTP-H3/client",
        "path": "examples/VLESS-TLS-SplitHTTP-H3/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless"
        ],
        "transports": [
            "splithttp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "SplitHTTP"
        ],
        "raw": "{\r\n    \"inbounds\": [\r\n        {\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ]\r\n            },\r\n            \"port\": 10808,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"example.com\", // Change to your domain.\r\n                \"port\": 443,\r\n                \"id\": \"UUID\", // Change to your UUID.\r\n                \"encryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"splithttp\",\r\n                \"security\": \"tls\",\r\n                \"splithttpSettings\": {\r\n                    \"path\": \"/splithttp\",\r\n                    \"host\": \"example.com\" // Change to your domain.\r\n                },\r\n                \"tlsSettings\": {\r\n                    \"serverName\": \"example.com\", // Change to your domain.\r\n                    \"alpn\": [\r\n                        \"h3\"\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ]\r\n}\r\n\r\n",
        "config": {
            "inbounds": [
                {
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ]
                    },
                    "port": 10808,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "UUID",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "splithttp",
                        "security": "tls",
                        "splithttpSettings": {
                            "path": "/splithttp",
                            "host": "example.com"
                        },
                        "tlsSettings": {
                            "serverName": "example.com",
                            "alpn": [
                                "h3"
                            ]
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-vless-tls-splithttp-h3-server-jsonc",
        "title": "VLESS-TLS-SplitHTTP-H3/server",
        "path": "examples/VLESS-TLS-SplitHTTP-H3/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom"
        ],
        "transports": [
            "splithttp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "SplitHTTP"
        ],
        "raw": "{\r\n    \"inbounds\": [\r\n        {\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ]\r\n            },\r\n            \"port\": 443,\r\n            \"listen\": \"0.0.0.0\",\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"UUID\" // Change to your UUID.\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"splithttp\",\r\n                \"security\": \"tls\",\r\n                \"splithttpSettings\": {\r\n                    \"path\": \"/splithttp\",\r\n                    \"host\": \"example.com\" // Change to your domain.\r\n                },\r\n                \"tlsSettings\": {\r\n                    \"rejectUnknownSni\": true,\r\n                    \"minVersion\": \"1.3\",\r\n                    \"alpn\": [\r\n                        \"h3\" // If you want to use with CDN, you need to change alpn to [\"h2\", \"http/1.1\"].\r\n                    ],\r\n                    \"certificates\": [\r\n                        {\r\n                            \"ocspStapling\": 3600,\r\n                            \"certificateFile\": \"/path/to/fullchain.pem\", // Change to your fullchain file path.\r\n                            \"keyFile\": \"/path/to/privkey.pem\" // Change to your private key file path.\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"tag\": \"direct\",\r\n            \"protocol\": \"freedom\"\r\n        }\r\n    ]\r\n}\r\n\r\n",
        "config": {
            "inbounds": [
                {
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ]
                    },
                    "port": 443,
                    "listen": "0.0.0.0",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "UUID"
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "splithttp",
                        "security": "tls",
                        "splithttpSettings": {
                            "path": "/splithttp",
                            "host": "example.com"
                        },
                        "tlsSettings": {
                            "rejectUnknownSni": true,
                            "minVersion": "1.3",
                            "alpn": [
                                "h3"
                            ],
                            "certificates": [
                                {
                                    "ocspStapling": 3600,
                                    "certificateFile": "/path/to/fullchain.pem",
                                    "keyFile": "/path/to/privkey.pem"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "direct",
                    "protocol": "freedom"
                }
            ]
        }
    },
    {
        "id": "examples-vless-wss-nginx-client-jsonc",
        "title": "VLESS-WSS-Nginx/client",
        "path": "examples/VLESS-WSS-Nginx/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {},\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": \"1080\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"auth\": \"noauth\",\r\n        \"udp\": true\r\n      }\r\n    },\r\n    {\r\n      \"port\": \"1081\",\r\n      \"protocol\": \"http\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"xx.com\",\r\n        \"port\": 443,\r\n        \"id\": \"\", //填写你的 UUID\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"security\": \"tls\",\r\n        \"wsSettings\": {\r\n          \"path\": \"/Path2WS?ed=2560\" //?ed=2560 前面填写你的 path\r\n        },\r\n        \"tlsSettings\": {\r\n          \"allowInsecure\": false,\r\n          \"serverName\": \"xx.com\", //Equal to \"SNI\"\r\n          \"fingerprint\": \"chrome\" //\"chrome\" or \"firefox\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {},
            "inbounds": [
                {
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true
                    }
                },
                {
                    "port": "1081",
                    "protocol": "http",
                    "settings": {}
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "xx.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "tls",
                        "wsSettings": {
                            "path": "/Path2WS?ed=2560"
                        },
                        "tlsSettings": {
                            "allowInsecure": false,
                            "serverName": "xx.com",
                            "fingerprint": "chrome"
                        }
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-wss-nginx-server-jsonc",
        "title": "VLESS-WSS-Nginx/server",
        "path": "examples/VLESS-WSS-Nginx/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "ws"
        ],
        "securities": [],
        "features": [
            "WebSocket",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"127.0.0.1\",\r\n      \"port\": 1234,\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\" // 填写你的 UUID\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"ws\",\r\n        \"wsSettings\": {\r\n          \"path\": \"/Path2WS\" // 填写你的 path\r\n        }\r\n      },\r\n      \"sniffing\": {\r\n        \"enabled\": true,\r\n        \"destOverride\": [\r\n          \"http\",\r\n          \"tls\"\r\n        ]\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPIfNonMatch\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:cn\",\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"blocked\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 1234,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "wsSettings": {
                            "path": "/Path2WS"
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "ip": [
                            "geoip:cn",
                            "geoip:private"
                        ],
                        "outboundTag": "blocked"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-xhttp-reality-minimal-steal-others-client-bypass-cn-jsonc",
        "title": "VLESS-XHTTP-Reality/minimal-steal_others/client-bypass-cn",
        "path": "examples/VLESS-XHTTP-Reality/minimal-steal_others/client-bypass-cn.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "xhttp"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY",
            "XHTTP",
            "routing"
        ],
        "raw": "{\r\n    \"routing\": {\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            },\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:cn\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            },\r\n            {\r\n                \"domain\": [\r\n                    \"geosite:cn\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": 10808,\r\n            \"protocol\": \"socks\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"\", // 服务端的域名或 IP\r\n                \"port\": 443, // 填入配置服务器入站时设定的监听端口\r\n                \"id\": \"\", // 与服务端一致\r\n                \"encryption\": \"none\",\r\n                \"flow\": \"\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"xhttp\",\r\n                \"xhttpSettings\": {\r\n                    \"path\": \"/yourpath\" // 与服务端一致\r\n                },\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    \"serverName\": \"\", // 在服务端所设serverNames列表中选择一个填入\r\n                    \"publicKey\": \"\", // 服务端执行 xray x25519 生成，私钥对应的公钥，填 \"Public key\" 的值\r\n                    \"shortId\": \"\", // 服务端 shortIds 之一\r\n                    \"spiderX\": \"/somepath\", // 爬虫初始路径与参数，建议每个客户端不同\r\n                    \"fingerprint\": \"chrome\" // 使用 uTLS 库模拟客户端 TLS 指纹。，为强调而保留。\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "routing": {
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    },
                    {
                        "ip": [
                            "geoip:cn"
                        ],
                        "outboundTag": "direct"
                    },
                    {
                        "domain": [
                            "geosite:cn"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 10808,
                    "protocol": "socks"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "flow": ""
                    },
                    "streamSettings": {
                        "network": "xhttp",
                        "xhttpSettings": {
                            "path": "/yourpath"
                        },
                        "security": "reality",
                        "realitySettings": {
                            "serverName": "",
                            "publicKey": "",
                            "shortId": "",
                            "spiderX": "/somepath",
                            "fingerprint": "chrome"
                        }
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vless-xhttp-reality-minimal-steal-others-client-jsonc",
        "title": "VLESS-XHTTP-Reality/minimal-steal_others/client",
        "path": "examples/VLESS-XHTTP-Reality/minimal-steal_others/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "xhttp"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY",
            "XHTTP",
            "routing"
        ],
        "raw": "{\r\n    \"routing\": {\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": 10808,\r\n            \"protocol\": \"socks\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"address\": \"\", // 服务端的域名或 IP\r\n                \"port\": 443, // 填入配置服务器入站时设定的监听端口\r\n                \"id\": \"\", // 与服务端一致\r\n                \"encryption\": \"none\",\r\n                \"flow\": \"\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"xhttp\",\r\n                \"xhttpSettings\": {\r\n                    \"path\": \"/yourpath\" // 与服务端一致\r\n                },\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    \"serverName\": \"\", // 在服务端所设serverNames列表中选择一个填入\r\n                    \"publicKey\": \"\", // 服务端执行 xray x25519 生成，私钥对应的公钥，填 \"Public key\" 的值\r\n                    \"shortId\": \"\", // 服务端 shortIds 之一\r\n                    \"spiderX\": \"/somepath\", // 爬虫初始路径与参数，建议每个客户端不同\r\n                    \"fingerprint\": \"chrome\" // 使用 uTLS 库模拟客户端 TLS 指纹。，为强调而保留。\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n\r\n    ]\r\n}\r\n",
        "config": {
            "routing": {
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": 10808,
                    "protocol": "socks"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "",
                        "port": 443,
                        "id": "",
                        "encryption": "none",
                        "flow": ""
                    },
                    "streamSettings": {
                        "network": "xhttp",
                        "xhttpSettings": {
                            "path": "/yourpath"
                        },
                        "security": "reality",
                        "realitySettings": {
                            "serverName": "",
                            "publicKey": "",
                            "shortId": "",
                            "spiderX": "/somepath",
                            "fingerprint": "chrome"
                        }
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vless-xhttp-reality-minimal-steal-others-server-block-cn-jsonc",
        "title": "VLESS-XHTTP-Reality/minimal-steal_others/server-block-cn",
        "path": "examples/VLESS-XHTTP-Reality/minimal-steal_others/server-block-cn.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "xhttp"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY",
            "XHTTP",
            "routing"
        ],
        "raw": "{\r\n    \"routing\": {\r\n        \"domainStrategy\": \"IPIfNonMatch\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:cn\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            },\r\n            {\r\n                \"domain\": [\r\n                    \"geosite:cn\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 443, // 可根据实际情况更换端口\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\", // 长度为 1-30 字节的任意字符串，或执行 xray uuid 生成\r\n                        \"flow\": \"\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"xhttp\",\r\n                \"xhttpSettings\": {\r\n                    \"path\": \"/yourpath\" // 自行设定路径\r\n                },\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    // 此target字段原名为dest，从24.10.31版本开始开始使用新名称。\r\n                    // 目标网站最低标准：国外网站，支持 TLSv1.3 与 H2，域名非跳转用（主域名可能被用于跳转到 www）。详见 https://github.com/XTLS/REALITY\r\n                    \"target\": \"example.com:443\",\r\n                    \"serverNames\": [\r\n                        // 客户端可用的 serverName 列表，暂不支持 * 通配符\r\n                        // 执行 xray tls ping 目标网站网址，填 \"Allowed domains\" 的值\r\n                    ],\r\n                    \"privateKey\": \"\", // 执行 xray x25519 生成，填 \"Private key\" 的值\r\n                    \"shortIds\": [ // 客户端可用的 shortId 列表，可用于区分不同的客户端\r\n                        // \"\", // 若有此项，客户端 shortId 可为空\r\n                        \"00\", // 0 到 f，长度为 2 的倍数，长度上限为 16\r\n                        \"01\",\r\n                        \"02\"\r\n                    ]\r\n                }\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ]\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "routing": {
                "domainStrategy": "IPIfNonMatch",
                "rules": [
                    {
                        "ip": [
                            "geoip:cn"
                        ],
                        "outboundTag": "block"
                    },
                    {
                        "domain": [
                            "geosite:cn"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "flow": ""
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "xhttp",
                        "xhttpSettings": {
                            "path": "/yourpath"
                        },
                        "security": "reality",
                        "realitySettings": {
                            "target": "example.com:443",
                            "serverNames": [],
                            "privateKey": "",
                            "shortIds": [
                                "00",
                                "01",
                                "02"
                            ]
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vless-xhttp-reality-minimal-steal-others-server-jsonc",
        "title": "VLESS-XHTTP-Reality/minimal-steal_others/server",
        "path": "examples/VLESS-XHTTP-Reality/minimal-steal_others/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "xhttp"
        ],
        "securities": [
            "reality"
        ],
        "features": [
            "REALITY",
            "XHTTP"
        ],
        "raw": "{\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 443, // 可根据实际情况更换端口\r\n            \"protocol\": \"vless\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\", // 长度为 1-30 字节的任意字符串，或执行 xray uuid 生成\r\n                        \"flow\": \"\"\r\n                    }\r\n                ],\r\n                \"decryption\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"xhttp\",\r\n                \"xhttpSettings\": {\r\n                    \"path\": \"/yourpath\" // 自行设定路径\r\n                },\r\n                \"security\": \"reality\",\r\n                \"realitySettings\": {\r\n                    // 此target字段原名为dest，从24.10.31版本开始开始使用新名称。\r\n                    // 目标网站最低标准：国外网站，支持 TLSv1.3 与 H2，域名非跳转用（主域名可能被用于跳转到 www）。详见 https://github.com/XTLS/REALITY\r\n                    \"target\": \"example.com:443\",\r\n                    \"serverNames\": [\r\n                    // 客户端可用的 serverName 列表，暂不支持 * 通配符\r\n                    // 执行 xray tls ping 目标网站网址，填 \"Allowed domains\" 的值\r\n                    ],\r\n                    \"privateKey\": \"\", // 执行 xray x25519 生成，填 \"Private key\" 的值\r\n                    \"shortIds\": [ // 客户端可用的 shortId 列表，可用于区分不同的客户端\r\n                        // \"\", // 若有此项，客户端 shortId 可为空\r\n                        \"00\", // 0 到 f，长度为 2 的倍数，长度上限为 16\r\n                        \"01\",\r\n                        \"02\"\r\n                    ]\r\n                }\r\n            },\r\n            \"sniffing\": {\r\n                \"enabled\": true,\r\n                \"destOverride\": [\r\n                    \"http\",\r\n                    \"tls\",\r\n                    \"quic\"\r\n                ]\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n\r\n    ]\r\n}\r\n",
        "config": {
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 443,
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": "",
                                "flow": ""
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "xhttp",
                        "xhttpSettings": {
                            "path": "/yourpath"
                        },
                        "security": "reality",
                        "realitySettings": {
                            "target": "example.com:443",
                            "serverNames": [],
                            "privateKey": "",
                            "shortIds": [
                                "00",
                                "01",
                                "02"
                            ]
                        }
                    },
                    "sniffing": {
                        "enabled": true,
                        "destOverride": [
                            "http",
                            "tls",
                            "quic"
                        ]
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vless-xhttp3-nginx-client-jsonc",
        "title": "VLESS-XHTTP3-Nginx/client",
        "path": "examples/VLESS-XHTTP3-Nginx/client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "xhttp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "XHTTP",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {},\r\n  \"inbounds\": [\r\n    {\r\n      \"port\": \"1080\",\r\n      \"listen\": \"::1\",\r\n      \"protocol\": \"socks\",\r\n      \"settings\": {\r\n        \"udp\": true\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"address\": \"example.com\",\r\n        \"port\": 443,\r\n        \"id\": \"\", //填写你的 UUID\r\n        \"encryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"xhttp\",\r\n        \"xhttpSettings\": {\r\n          \"path\": \"\", //填写你的 path\r\n          \"mode\": \"stream-one\", //如使用 downloadSettings（下行），不可用 stream-one；可用 stream-up。\r\n          \"#xmux\": { //使用默认值。如需自定义：移除前面的 #（井号）。注意：不可超过 Nginx 的最高（上限）值。\r\n            \"maxConcurrency\": 128, //Nginx 默认上限 128。https://nginx.org/en/docs/http/ngx_http_v3_module.html#http3_max_concurrent_streams\r\n            \"hMaxRequestTimes\": 1000, //Nginx 默认上限 1000。https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_requests\r\n            \"hMaxReusableSecs\": 3600 //Nginx 默认上限 3600s(1h)。https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_time\r\n          },\r\n          \"#downloadSettings\": { //如需 H2 下行：移除前面的 #（井号）以使用 downloadSettings；上面和 server.json 的 mode 更改为 stream-up。\r\n            \"address\": \"example.com\",\r\n            \"port\": 443,\r\n            \"network\": \"xhttp\",\r\n            \"xhttpSettings\": {\r\n              \"path\": \"\", //填写你的 path（同上）\r\n              \"#xmux\": { //使用默认值。如需自定义：移除前面的 #（井号）。注意：不可超过 Nginx 的最高（上限）值。\r\n                \"maxConcurrency\": 128, //Nginx 默认上限 128。https://nginx.org/en/docs/http/ngx_http_v3_module.html#http3_max_concurrent_streams\r\n                \"hMaxRequestTimes\": 1000, //Nginx 默认上限 1000。https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_requests\r\n                \"hMaxReusableSecs\": 3600 //Nginx 默认上限 3600s(1h)。https://nginx.org/en/docs/http/ngx_http_core_module.html#keepalive_time\r\n              }\r\n            },\r\n            \"security\": \"tls\"\r\n          }\r\n        },\r\n        \"security\": \"tls\",\r\n        \"tlsSettings\": {\r\n          \"alpn\": [\r\n            \"h3\" //如遇到性能远不及预期并且 log 伴随“QUIC flood detected”，可参考：https://github.com/XTLS/Xray-core/discussions/4197\r\n          ]\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"IPOnDemand\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"direct\"\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
        "config": {
            "log": {},
            "inbounds": [
                {
                    "port": "1080",
                    "listen": "::1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vless",
                    "settings": {
                        "address": "example.com",
                        "port": 443,
                        "id": "",
                        "encryption": "none"
                    },
                    "streamSettings": {
                        "network": "xhttp",
                        "xhttpSettings": {
                            "path": "",
                            "mode": "stream-one",
                            "#xmux": {
                                "maxConcurrency": 128,
                                "hMaxRequestTimes": 1000,
                                "hMaxReusableSecs": 3600
                            },
                            "#downloadSettings": {
                                "address": "example.com",
                                "port": 443,
                                "network": "xhttp",
                                "xhttpSettings": {
                                    "path": "",
                                    "#xmux": {
                                        "maxConcurrency": 128,
                                        "hMaxRequestTimes": 1000,
                                        "hMaxReusableSecs": 3600
                                    }
                                },
                                "security": "tls"
                            }
                        },
                        "security": "tls",
                        "tlsSettings": {
                            "alpn": [
                                "h3"
                            ]
                        }
                    }
                },
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "IPOnDemand",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vless-xhttp3-nginx-server-jsonc",
        "title": "VLESS-XHTTP3-Nginx/server",
        "path": "examples/VLESS-XHTTP3-Nginx/server.jsonc",
        "role": "server",
        "protocols": [
            "vless",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "xhttp"
        ],
        "securities": [],
        "features": [
            "XHTTP",
            "routing"
        ],
        "raw": "{\r\n  \"log\": {\r\n    \"loglevel\": \"warning\"\r\n  },\r\n  \"inbounds\": [\r\n    {\r\n      \"listen\": \"/dev/shm/xrxh.socket,0666\",\r\n      \"protocol\": \"vless\",\r\n      \"settings\": {\r\n        \"clients\": [\r\n          {\r\n            \"id\": \"\" // 填写你的 UUID\r\n          }\r\n        ],\r\n        \"decryption\": \"none\"\r\n      },\r\n      \"streamSettings\": {\r\n        \"network\": \"xhttp\",\r\n        \"xhttpSettings\": {\r\n          \"mode\": \"stream-one\", //如在 config.jsonc 使用 downloadSettings（下行），不可用 stream-one；可用 stream-up。\r\n          \"path\": \"\" // 填写你的 path\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"outbounds\": [\r\n    {\r\n      \"tag\": \"direct\",\r\n      \"protocol\": \"freedom\",\r\n      \"settings\": {}\r\n    },\r\n    {\r\n      \"tag\": \"blocked\",\r\n      \"protocol\": \"blackhole\",\r\n      \"settings\": {}\r\n    }\r\n  ],\r\n  \"routing\": {\r\n    \"domainStrategy\": \"AsIs\",\r\n    \"rules\": [\r\n      {\r\n        \"ip\": [\r\n          \"geoip:private\"\r\n        ],\r\n        \"outboundTag\": \"blocked\"\r\n      }\r\n    ]\r\n  }\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "listen": "/dev/shm/xrxh.socket,0666",
                    "protocol": "vless",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ],
                        "decryption": "none"
                    },
                    "streamSettings": {
                        "network": "xhttp",
                        "xhttpSettings": {
                            "mode": "stream-one",
                            "path": ""
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "tag": "direct",
                    "protocol": "freedom",
                    "settings": {}
                },
                {
                    "tag": "blocked",
                    "protocol": "blackhole",
                    "settings": {}
                }
            ],
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "blocked"
                    }
                ]
            }
        }
    },
    {
        "id": "examples-vmess-http-config-client-jsonc",
        "title": "VMess-HTTP/config_client",
        "path": "examples/VMess-HTTP/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vmess",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "none"
        ],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"address\": \"\",\r\n                \"port\": 1234,\r\n                \"id\": \"\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"tcpSettings\": {\r\n                    \"header\": {\r\n                        \"type\": \"http\",\r\n                        \"request\": {\r\n                            \"version\": \"1.1\",\r\n                            \"method\": \"GET\",\r\n                            \"path\": [\r\n                                \"/\"\r\n                            ],\r\n                            \"headers\": {\r\n                                \"Host\": [\r\n                                    \"www.bing.com\",\r\n                                    \"www.cloudflare.com\",\r\n                                    \"www.amazon.com\"\r\n                                ],\r\n                                \"User-Agent\": [\r\n                                    \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.49\",\r\n                                    \"Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/84.0.4147.71 Mobile/15E148 Safari/604.1\"\r\n                                ],\r\n                                \"Accept-Encoding\": [\r\n                                    \"gzip, deflate\"\r\n                                ],\r\n                                \"Connection\": [\r\n                                    \"keep-alive\"\r\n                                ],\r\n                                \"Pragma\": \"no-cache\"\r\n                            }\r\n                        }\r\n                    }\r\n                },\r\n                \"security\": \"none\"\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "",
                        "port": 1234,
                        "id": ""
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "tcpSettings": {
                            "header": {
                                "type": "http",
                                "request": {
                                    "version": "1.1",
                                    "method": "GET",
                                    "path": [
                                        "/"
                                    ],
                                    "headers": {
                                        "Host": [
                                            "www.bing.com",
                                            "www.cloudflare.com",
                                            "www.amazon.com"
                                        ],
                                        "User-Agent": [
                                            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.49",
                                            "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/84.0.4147.71 Mobile/15E148 Safari/604.1"
                                        ],
                                        "Accept-Encoding": [
                                            "gzip, deflate"
                                        ],
                                        "Connection": [
                                            "keep-alive"
                                        ],
                                        "Pragma": "no-cache"
                                    }
                                }
                            }
                        },
                        "security": "none"
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-http-config-server-jsonc",
        "title": "VMess-HTTP/config_server",
        "path": "examples/VMess-HTTP/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vmess",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "none"
        ],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"tcpSettings\": {\r\n                    \"header\": {\r\n                        \"type\": \"http\",\r\n                        \"response\": {\r\n                            \"version\": \"1.1\",\r\n                            \"status\": \"200\",\r\n                            \"reason\": \"OK\",\r\n                            \"headers\": {\r\n                                \"Content-Type\": [\r\n                                    \"application/octet-stream\",\r\n                                    \"video/mpeg\",\r\n                                    \"application/x-msdownload\",\r\n                                    \"text/html\",\r\n                                    \"application/x-shockwave-flash\"\r\n                                ],\r\n                                \"Transfer-Encoding\": [\r\n                                    \"chunked\"\r\n                                ],\r\n                                \"Connection\": [\r\n                                    \"keep-alive\"\r\n                                ],\r\n                                \"Pragma\": \"no-cache\"\r\n                            }\r\n                        }\r\n                    }\r\n                },\r\n                \"security\": \"none\"\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "tcpSettings": {
                            "header": {
                                "type": "http",
                                "response": {
                                    "version": "1.1",
                                    "status": "200",
                                    "reason": "OK",
                                    "headers": {
                                        "Content-Type": [
                                            "application/octet-stream",
                                            "video/mpeg",
                                            "application/x-msdownload",
                                            "text/html",
                                            "application/x-shockwave-flash"
                                        ],
                                        "Transfer-Encoding": [
                                            "chunked"
                                        ],
                                        "Connection": [
                                            "keep-alive"
                                        ],
                                        "Pragma": "no-cache"
                                    }
                                }
                            }
                        },
                        "security": "none"
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-http2-config-client-jsonc",
        "title": "VMess-HTTP2/config_client",
        "path": "examples/VMess-HTTP2/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vmess",
            "freedom"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "none",
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"address\": \"\",\r\n                \"port\": 1234,\r\n                \"id\": \"\",\r\n                \"security\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"http\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"fingerprint\": \"chrome\" // uTLS fingerprint as traffic camouflage, can be either \"chrome\" or \"firefox\" or deleted entirely to disable uTLS\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "",
                        "port": 1234,
                        "id": "",
                        "security": "none"
                    },
                    "streamSettings": {
                        "network": "http",
                        "security": "tls",
                        "tlsSettings": {
                            "fingerprint": "chrome"
                        }
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-http2-config-server-jsonc",
        "title": "VMess-HTTP2/config_server",
        "path": "examples/VMess-HTTP2/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vmess",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "http"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"http\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/certificate.crt\",\r\n                            \"keyFile\": \"/path/to/key.key\"\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "http",
                        "security": "tls",
                        "tlsSettings": {
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/certificate.crt",
                                    "keyFile": "/path/to/key.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-mkcpseed-config-client-jsonc",
        "title": "VMess-mKCPSeed/config_client",
        "path": "examples/VMess-mKCPSeed/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "vmess"
        ],
        "transports": [
            "kcp"
        ],
        "securities": [],
        "features": [
            "mKCP"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"port\": 1080,\r\n            \"listen\": \"127.0.0.1\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"udp\": true\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"address\": \"{{ host }}\",\r\n                \"port\": \"{{ port }}\",\r\n                \"id\": \"{{ uuid }}\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"kcp\",\r\n                \"kcpSettings\": {\r\n                    \"seed\": \"{{ seed }}\"\r\n                }\r\n            }\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "port": 1080,
                    "listen": "127.0.0.1",
                    "protocol": "socks",
                    "settings": {
                        "udp": true
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "{{ host }}",
                        "port": "{{ port }}",
                        "id": "{{ uuid }}"
                    },
                    "streamSettings": {
                        "network": "kcp",
                        "kcpSettings": {
                            "seed": "{{ seed }}"
                        }
                    }
                }
            ]
        }
    },
    {
        "id": "examples-vmess-mkcpseed-config-server-jsonc",
        "title": "VMess-mKCPSeed/config_server",
        "path": "examples/VMess-mKCPSeed/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vmess",
            "freedom"
        ],
        "transports": [
            "kcp"
        ],
        "securities": [],
        "features": [
            "mKCP"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"port\": \"{{ port }}\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\"id\": \"{{  }}\"}\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"kcp\",\r\n                \"kcpSettings\": {\r\n                    \"seed\": \"{{ seed }}\"\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\"protocol\": \"freedom\"}\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "inbounds": [
                {
                    "protocol": "vmess",
                    "port": "{{ port }}",
                    "settings": {
                        "clients": [
                            {
                                "id": "{{  }}"
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "kcp",
                        "kcpSettings": {
                            "seed": "{{ seed }}"
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-tcp-tls-config-client-jsonc",
        "title": "VMess-TCP-TLS/config_client",
        "path": "examples/VMess-TCP-TLS/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vmess",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "none",
            "tls"
        ],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"address\": \"\",\r\n                \"port\": 1234,\r\n                \"id\": \"\",\r\n                \"security\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\"\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "",
                        "port": 1234,
                        "id": "",
                        "security": "none"
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls"
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-tcp-tls-config-server-jsonc",
        "title": "VMess-TCP-TLS/config_server",
        "path": "examples/VMess-TCP-TLS/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vmess",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/certificate.crt\",\r\n                            \"keyFile\": \"/path/to/key.key\"\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp",
                        "security": "tls",
                        "tlsSettings": {
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/certificate.crt",
                                    "keyFile": "/path/to/key.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-tcp-config-client-jsonc",
        "title": "VMess-TCP/config_client",
        "path": "examples/VMess-TCP/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vmess",
            "freedom"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"address\": \"\",\r\n                \"port\": 1234,\r\n                \"id\": \"\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\"\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "",
                        "port": 1234,
                        "id": ""
                    },
                    "streamSettings": {
                        "network": "tcp"
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-tcp-config-server-jsonc",
        "title": "VMess-TCP/config_server",
        "path": "examples/VMess-TCP/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vmess",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "tcp"
        ],
        "securities": [],
        "features": [
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"tcp\"\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "tcp"
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-websocket-tls-config-client-jsonc",
        "title": "VMess-Websocket-TLS/config_client",
        "path": "examples/VMess-Websocket-TLS/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vmess",
            "freedom"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "none",
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"address\": \"\",\r\n                \"port\": 1234,\r\n                \"id\": \"\",\r\n                \"security\": \"none\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"ws\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"fingerprint\": \"chrome\" // uTLS fingerprint as traffic camouflage, can be either \"chrome\" or \"firefox\" or deleted entirely to disable uTLS\r\n                }\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "",
                        "port": 1234,
                        "id": "",
                        "security": "none"
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "tls",
                        "tlsSettings": {
                            "fingerprint": "chrome"
                        }
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-websocket-tls-config-server-jsonc",
        "title": "VMess-Websocket-TLS/config_server",
        "path": "examples/VMess-Websocket-TLS/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vmess",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "tls"
        ],
        "features": [
            "TLS",
            "WebSocket",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"ws\",\r\n                \"security\": \"tls\",\r\n                \"tlsSettings\": {\r\n                    \"certificates\": [\r\n                        {\r\n                            \"certificateFile\": \"/path/to/certificate.crt\",\r\n                            \"keyFile\": \"/path/to/key.key\"\r\n                        }\r\n                    ]\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "tls",
                        "tlsSettings": {
                            "certificates": [
                                {
                                    "certificateFile": "/path/to/certificate.crt",
                                    "keyFile": "/path/to/key.key"
                                }
                            ]
                        }
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-websocket-config-client-jsonc",
        "title": "VMess-Websocket/config_client",
        "path": "examples/VMess-Websocket/config_client.jsonc",
        "role": "client",
        "protocols": [
            "socks",
            "http",
            "vmess",
            "freedom"
        ],
        "transports": [
            "ws"
        ],
        "securities": [],
        "features": [
            "WebSocket",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"direct\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1080\",\r\n            \"protocol\": \"socks\",\r\n            \"settings\": {\r\n                \"auth\": \"noauth\",\r\n                \"udp\": true,\r\n                \"ip\": \"127.0.0.1\"\r\n            }\r\n        },\r\n        {\r\n            \"listen\": \"127.0.0.1\",\r\n            \"port\": \"1081\",\r\n            \"protocol\": \"http\"\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"address\": \"\",\r\n                \"port\": 1234,\r\n                \"id\": \"\"\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"ws\"\r\n            },\r\n            \"tag\": \"proxy\"\r\n        },\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        }\r\n    ]\r\n}\r\n",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "direct"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "127.0.0.1",
                    "port": "1080",
                    "protocol": "socks",
                    "settings": {
                        "auth": "noauth",
                        "udp": true,
                        "ip": "127.0.0.1"
                    }
                },
                {
                    "listen": "127.0.0.1",
                    "port": "1081",
                    "protocol": "http"
                }
            ],
            "outbounds": [
                {
                    "protocol": "vmess",
                    "settings": {
                        "address": "",
                        "port": 1234,
                        "id": ""
                    },
                    "streamSettings": {
                        "network": "ws"
                    },
                    "tag": "proxy"
                },
                {
                    "protocol": "freedom",
                    "tag": "direct"
                }
            ]
        }
    },
    {
        "id": "examples-vmess-websocket-config-server-jsonc",
        "title": "VMess-Websocket/config_server",
        "path": "examples/VMess-Websocket/config_server.jsonc",
        "role": "server",
        "protocols": [
            "vmess",
            "freedom",
            "blackhole"
        ],
        "transports": [
            "ws"
        ],
        "securities": [
            "none"
        ],
        "features": [
            "WebSocket",
            "routing"
        ],
        "raw": "{\r\n    \"log\": {\r\n        \"loglevel\": \"warning\"\r\n    },\r\n    \"routing\": {\r\n        \"domainStrategy\": \"AsIs\",\r\n        \"rules\": [\r\n            {\r\n                \"ip\": [\r\n                    \"geoip:private\"\r\n                ],\r\n                \"outboundTag\": \"block\"\r\n            }\r\n        ]\r\n    },\r\n    \"inbounds\": [\r\n        {\r\n            \"listen\": \"0.0.0.0\",\r\n            \"port\": 1234,\r\n            \"protocol\": \"vmess\",\r\n            \"settings\": {\r\n                \"clients\": [\r\n                    {\r\n                        \"id\": \"\"\r\n                    }\r\n                ]\r\n            },\r\n            \"streamSettings\": {\r\n                \"network\": \"ws\",\r\n                \"security\": \"none\"\r\n            }\r\n        }\r\n    ],\r\n    \"outbounds\": [\r\n        {\r\n            \"protocol\": \"freedom\",\r\n            \"tag\": \"direct\"\r\n        },\r\n        {\r\n            \"protocol\": \"blackhole\",\r\n            \"tag\": \"block\"\r\n        }\r\n    ]\r\n}",
        "config": {
            "log": {
                "loglevel": "warning"
            },
            "routing": {
                "domainStrategy": "AsIs",
                "rules": [
                    {
                        "ip": [
                            "geoip:private"
                        ],
                        "outboundTag": "block"
                    }
                ]
            },
            "inbounds": [
                {
                    "listen": "0.0.0.0",
                    "port": 1234,
                    "protocol": "vmess",
                    "settings": {
                        "clients": [
                            {
                                "id": ""
                            }
                        ]
                    },
                    "streamSettings": {
                        "network": "ws",
                        "security": "none"
                    }
                }
            ],
            "outbounds": [
                {
                    "protocol": "freedom",
                    "tag": "direct"
                },
                {
                    "protocol": "blackhole",
                    "tag": "block"
                }
            ]
        }
    }
] satisfies ExampleCatalogItem[];
