# Xray Configurator

Static server-side JSON configurator for Xray-core. The app is designed to run on GitHub Pages and keeps all work in the
browser: no backend, no telemetry, no remote validation.

## Features

- Protocol-aware server config builder for inbounds, outbounds, stream settings, TLS, REALITY and socket options.
- Global sections for `log`, `dns`, `routing`, `policy`, `api`, `metrics`, `fakeDns`, `observatory`, `burstObservatory`,
  `geodata` and `version`.
- Nested editors for common high-friction structures: inbound clients, DNS servers and routing rules.
- Import existing JSON, edit it visually or as raw JSON, then export a clean config.
- Built-in presets for common server deployments.
- EN/RU UI switch.
- GitHub Pages-ready Vite build with relative asset paths.

## Development

```bash
git submodule update --init --recursive
npm ci
npm run dev
```

## Checks

```bash
npm test
npm run build
npm audit --omit=dev
```

If Xray is installed locally, validate example configs with the real core parser:

```bash
npm run validate:xray
```

Use `XRAY_BIN` when the binary is not on `PATH`:

```bash
XRAY_BIN=/usr/local/bin/xray npm run validate:xray
```

## Deployment

The repository includes `.github/workflows/deploy.yml`. Enable GitHub Pages in repository settings and select GitHub
Actions as the source. Every push to `main` builds and publishes `dist`.

## Examples

The `examples` directory is a Git submodule pointing to the official `XTLS/Xray-examples` repository.

When cloning manually, use:

```bash
git clone --recurse-submodules <repo-url>
```

For an existing checkout:

```bash
git submodule update --init --recursive
```

## Coverage Notes

Xray-core evolves quickly and some fields are only discoverable from `infra/conf` source structs. The visual UI covers
the most common server-side and advanced fields, while raw JSON inputs remain available for experimental, newly added or
rarely used options. For strict runtime validation, export the JSON and run:

```bash
xray run -test -config xray-server-config.json
```
