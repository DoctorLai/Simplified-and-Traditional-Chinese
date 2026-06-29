const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOCALES_DIR = path.join(ROOT, 'gb2312-big5', '_locales');
const MANIFEST_PATH = path.join(ROOT, 'gb2312-big5', 'manifest.json');

const TOP_20_LOCALES = [
  'en',
  'zh_CN',
  'zh_TW',
  'es',
  'ar',
  'pt_BR',
  'id',
  'fr',
  'ja',
  'ru',
  'de',
  'ko',
  'hi',
  'tr',
  'it',
  'nl',
  'pl',
  'vi',
  'fa',
  'th'
];

function readLocale(locale) {
  return JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, locale, 'messages.json'), 'utf8'));
}

describe('extension i18n metadata', () => {
  it('uses localized manifest metadata', () => {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

    expect(manifest.name).toBe('__MSG_appName__');
    expect(manifest.description).toBe('__MSG_appDesc__');
    expect(manifest.action.default_title).toBe('__MSG_appName__');
  });

  it('includes top-20 language locale coverage', () => {
    const localeDirs = fs
      .readdirSync(LOCALES_DIR)
      .filter((fileName) => fs.statSync(path.join(LOCALES_DIR, fileName)).isDirectory());

    expect(localeDirs).toEqual(expect.arrayContaining(TOP_20_LOCALES));
  });

  it('defines required messages for every locale within Chrome manifest limits', () => {
    const localeDirs = fs
      .readdirSync(LOCALES_DIR)
      .filter((fileName) => fs.statSync(path.join(LOCALES_DIR, fileName)).isDirectory());

    for (const locale of localeDirs) {
      const messages = readLocale(locale);

      expect(messages.appName?.message).toEqual(expect.any(String));
      expect(messages.appDesc?.message).toEqual(expect.any(String));
      expect(messages.appName.description).toEqual(expect.any(String));
      expect(messages.appDesc.description).toEqual(expect.any(String));
      expect(messages.appName.message.length).toBeLessThanOrEqual(75);
      expect(messages.appDesc.message.length).toBeLessThanOrEqual(132);
    }
  });
});
