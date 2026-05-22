import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { extname, relative } from 'node:path';
import { parse } from 'jsonc-parser';

const root = new URL('../', import.meta.url);
const examplesDir = new URL('../examples/', import.meta.url);
const outputFile = new URL('../src/domain/exampleCatalog.generated.ts', import.meta.url);

const files = await collectFiles(examplesDir);
const items = [];

for (const fileUrl of files) {
  const raw = await readFile(fileUrl, 'utf8');
  const path = normalizePath(relative(root.pathname.slice(1), fileUrl.pathname.slice(1)));
  const parsed = parse(raw, undefined, { allowTrailingComma: true, disallowComments: false });
  const config = parsed && typeof parsed === 'object' ? parsed : undefined;
  const protocols = unique(findValues(config, 'protocol').filter(isString));
  const transports = unique(findValues(config, 'network').filter(isString));
  const securities = unique(findValues(config, 'security').filter(isString));
  const features = inferFeatures(config, raw);
  const role = inferRole(path, config);

  items.push({
    id: slug(path),
    title: titleFromPath(path),
    path,
    role,
    protocols,
    transports,
    securities,
    features,
    raw,
    config: config ?? null,
  });
}

items.sort((a, b) => a.path.localeCompare(b.path));

await mkdir(new URL('../src/domain/', import.meta.url), { recursive: true });
await writeFile(
  outputFile,
  `export type ExampleConfig = Record<string, unknown>;\n\nexport interface ExampleCatalogItem {\n  id: string;\n  title: string;\n  path: string;\n  role: 'server' | 'client' | 'mixed' | 'other';\n  protocols: string[];\n  transports: string[];\n  securities: string[];\n  features: string[];\n  raw: string;\n  config: ExampleConfig | null;\n}\n\nexport const exampleCatalog = ${JSON.stringify(items, null, 2)} satisfies ExampleCatalogItem[];\n`,
  'utf8',
);

console.log(`Generated ${items.length} example catalog entries.`);

async function collectFiles(dirUrl) {
  let entries;
  try {
    entries = await readdir(dirUrl, { withFileTypes: true });
  } catch {
    return [];
  }

  const nested = await Promise.all(
    entries.map((entry) => {
      const childUrl = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, dirUrl);
      if (entry.isDirectory()) return collectFiles(childUrl);
      return ['.json', '.jsonc'].includes(extname(entry.name).toLowerCase()) ? [childUrl] : [];
    }),
  );

  return nested.flat();
}

function inferRole(path, config) {
  const lower = path.toLowerCase();
  const inboundCount = Array.isArray(config?.inbounds) ? config.inbounds.length : 0;
  const outboundCount = Array.isArray(config?.outbounds) ? config.outbounds.length : 0;

  if (lower.includes('server') || lower.includes('portal')) return 'server';
  if (lower.includes('client') || lower.includes('bridge')) return 'client';
  if (inboundCount > 0 && outboundCount > 0) return 'mixed';
  if (inboundCount > 0) return 'server';
  if (outboundCount > 0) return 'client';
  return 'other';
}

function inferFeatures(config, raw) {
  const lower = raw.toLowerCase();
  const features = [];
  if (lower.includes('realitysettings')) features.push('REALITY');
  if (lower.includes('tlssettings')) features.push('TLS');
  if (lower.includes('fallbacks')) features.push('fallbacks');
  if (lower.includes('xhttp')) features.push('XHTTP');
  if (lower.includes('splithttp')) features.push('SplitHTTP');
  if (lower.includes('grpc')) features.push('gRPC');
  if (lower.includes('wssettings') || lower.includes('"network": "ws"')) features.push('WebSocket');
  if (lower.includes('"network": "kcp"')) features.push('mKCP');
  if (lower.includes('"network": "hysteria"')) features.push('Hysteria transport');
  if (lower.includes('reverse')) features.push('reverse');
  if (lower.includes('proxyprotocol') || lower.includes('proxy protocol')) features.push('PROXY protocol');
  if (config?.routing) features.push('routing');
  if (config?.dns) features.push('DNS');
  return unique(features);
}

function findValues(value, key) {
  if (!value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap((item) => findValues(item, key));

  return Object.entries(value).flatMap(([entryKey, entryValue]) => {
    const own = entryKey === key ? [entryValue] : [];
    return [...own, ...findValues(entryValue, key)];
  });
}

function titleFromPath(path) {
  return path.replace(/^examples\//, '').replace(/\.(jsonc|json)$/i, '');
}

function normalizePath(path) {
  return path.replaceAll('\\', '/');
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function isString(value) {
  return typeof value === 'string';
}
