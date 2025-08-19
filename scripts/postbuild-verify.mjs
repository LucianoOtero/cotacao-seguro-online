import fs from 'node:fs/promises';
import path from 'node:path';

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const outDir = '.next/server/app';
  const requiredPages = [
    'page.js', // root
    'blog/page.js',
  ];

  const missing = [];
  for (const rel of requiredPages) {
    const file = path.join(outDir, rel);
    if (!(await exists(file))) missing.push(rel);
  }

  if (missing.length) {
    console.error('[postbuild-verify] Missing compiled pages:', missing.join(', '));
    process.exitCode = 1;
  } else {
    console.log('[postbuild-verify] All required pages found.');
  }
}

main().catch((e) => {
  console.error('[postbuild-verify] Error:', e);
  process.exitCode = 1;
});


