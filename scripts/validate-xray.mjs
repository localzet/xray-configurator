import {readdir} from 'node:fs/promises';
import {extname, join} from 'node:path';
import {spawnSync} from 'node:child_process';

const target = process.argv[2] ?? 'examples';
const binary = process.env.XRAY_BIN ?? 'xray';

const files = (await collectJsonFiles(target)).sort();

if (files.length === 0) {
    console.error(`No JSON files found in ${target}`);
    process.exit(1);
}

let failed = false;

for (const file of files) {
    const result = spawnSync(binary, ['run', '-test', '-config', file], {
        encoding: 'utf8',
        stdio: 'pipe',
    });

    if (result.status === 0) {
        console.log(`OK ${file}`);
        continue;
    }

    failed = true;
    console.error(`FAIL ${file}`);
    if (result.stdout) console.error(result.stdout.trim());
    if (result.stderr) console.error(result.stderr.trim());
}

process.exit(failed ? 1 : 0);

async function collectJsonFiles(path) {
    if (extname(path) === '.json') {
        return [path];
    }

    const entries = await readdir(path, {withFileTypes: true});
    const nested = await Promise.all(
        entries.map((entry) => {
            const entryPath = join(path, entry.name);
            if (entry.isDirectory()) return collectJsonFiles(entryPath);
            return extname(entry.name) === '.json' ? [entryPath] : [];
        }),
    );

    return nested.flat();
}
