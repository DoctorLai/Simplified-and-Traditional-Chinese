#!/usr/bin/env node
/**
 * Build script: packages the unpacked extension in `gb2312-big5/` into a
 * versioned .zip inside `dist/`, ready to upload to the Chrome Web Store.
 *
 * Usage: `npm run build`
 */
'use strict';

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'gb2312-big5');
const DIST_DIR = path.join(ROOT, 'dist');

function readManifestVersion() {
  const manifestPath = path.join(SRC_DIR, 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!manifest.version) {
    throw new Error('manifest.json is missing a "version" field.');
  }
  return manifest.version;
}

function build() {
  if (!fs.existsSync(SRC_DIR)) {
    throw new Error(`Source directory not found: ${SRC_DIR}`);
  }

  const version = readManifestVersion();
  fs.mkdirSync(DIST_DIR, { recursive: true });

  const outFile = path.join(DIST_DIR, `simplified-and-traditional-chinese-v${version}.zip`);
  if (fs.existsSync(outFile)) {
    fs.rmSync(outFile);
  }

  const output = fs.createWriteStream(outFile);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    const kb = (archive.pointer() / 1024).toFixed(1);
    console.log(`Created ${path.relative(ROOT, outFile)} (${kb} KB)`);
  });

  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      console.warn(err.message);
    } else {
      throw err;
    }
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  // Place the contents of gb2312-big5/ at the root of the zip so that
  // manifest.json sits at the archive root (required by the Chrome Web Store).
  // Source maps are development-only artifacts and are excluded from the package.
  archive.glob('**/*', {
    cwd: SRC_DIR,
    ignore: ['**/*.map'],
    dot: false,
    nodir: true
  });
  return archive.finalize();
}

build().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
