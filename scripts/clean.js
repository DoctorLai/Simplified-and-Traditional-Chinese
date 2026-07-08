#!/usr/bin/env node
/**
 * Clean script: removes build and coverage artifacts (`dist/` and `coverage/`).
 *
 * Usage: `npm run clean`
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TARGETS = ['dist', 'coverage'];

for (const target of TARGETS) {
  const dir = path.join(ROOT, target);
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`Removed ${target}/`);
  } else {
    console.log(`Skipped ${target}/ (not present)`);
  }
}
