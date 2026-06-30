# Simplified / Traditional Chinese Converter （简体 / 繁体 / 拼音 / 广东话）

> Automatically convert any web page between **Simplified Chinese**, **Traditional
> Chinese**, **Pinyin**, and **Cantonese** — a lightweight, privacy‑friendly
> Manifest V3 Chrome extension.

<!-- Badges -->

[![CI](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/actions/workflows/ci.yml/badge.svg)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/actions/workflows/ci.yml)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Manifest V3](https://img.shields.io/badge/manifest-v3-4285F4?logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)
[![License: MIT](https://img.shields.io/github/license/DoctorLai/Simplified-and-Traditional-Chinese)](LICENSE)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?logo=prettier&logoColor=white)](https://prettier.io/)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Privacy Policy](https://img.shields.io/badge/privacy-policy-0f766e)](PRIVACY.md)

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/olpihmabpjpllgmahlgiakkgaccigpfo?label=chrome%20web%20store&logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/olpihmabpjpllgmahlgiakkgaccigpfo)
[![Users](https://img.shields.io/chrome-web-store/users/olpihmabpjpllgmahlgiakkgaccigpfo?label=users)](https://chromewebstore.google.com/detail/olpihmabpjpllgmahlgiakkgaccigpfo)
[![Rating](https://img.shields.io/chrome-web-store/rating/olpihmabpjpllgmahlgiakkgaccigpfo?label=rating)](https://chromewebstore.google.com/detail/olpihmabpjpllgmahlgiakkgaccigpfo)
[![GitHub stars](https://img.shields.io/github/stars/DoctorLai/Simplified-and-Traditional-Chinese?style=flat&logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/DoctorLai/Simplified-and-Traditional-Chinese)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/commits)

<img width="1164" height="882" alt="image" src="https://github.com/user-attachments/assets/b4f75021-1b72-44e6-a8a3-4a438e4b9f8c" />
<img width="1138" height="641" alt="image" src="https://github.com/user-attachments/assets/2f7fa5c8-1457-4ad1-8ef6-8ebee20ddf95" />


## Features

- 🔁 **Simplified ⇄ Traditional** — convert any page between Simplified Chinese
  (ZH‑CN / GB2312) and Traditional Chinese (ZH‑TW / BIG5) with one click.
- 🅿️ **Pinyin** — annotate Chinese characters with tone‑marked Hanyu Pinyin.
- 🗣️ **Cantonese ⇄ Mandarin** — experimental dialect conversion (alpha).
- ✅ / 🚫 **Domain whitelist & blacklist** — enable only selected domains, or
  disable specific domains, using plain substrings or regular expressions (one
  pattern per line). Blacklist rules take precedence.
- ☁️ **Synced settings** — your preferences follow you across devices via
  `chrome.storage.sync`.
- 🔒 **Privacy‑friendly** — runs entirely on your machine, collects no data, and
  requests only the `storage` permission.
- ⚡ **Manifest V3** — built on the modern, service‑worker based extension
  platform.
- 🌍 **Localized metadata** — Chrome Web Store metadata now covers 20 major
  language/region targets, including English, Chinese, Spanish, Arabic,
  Portuguese, Indonesian, French, Japanese, Russian, German, Korean, Hindi,
  Turkish, Italian, Dutch, Polish, Vietnamese, Persian and Thai.

## Install

### From the Chrome Web Store (recommended)

Install the published extension here:

👉 **[Chrome Web Store](https://chromewebstore.google.com/detail/olpihmabpjpllgmahlgiakkgaccigpfo)**

### From source (unpacked)

1. Clone this repository (see [Development](#development)).
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode** (top‑right).
4. Click **Load unpacked** and select the [`gb2312-big5/`](gb2312-big5) folder.

## Usage

1. Click the extension icon in the toolbar.
2. Under **Setting**, choose a target:
   - `关闭 Turn Off`
   - `中文简体 Simplified Chinese`
   - `中文繁體 Traditional Chinese`
   - `拼音 Pinyin`
3. (Optional) Choose a **Dialect** (Mandarin / Cantonese — alpha).
4. (Optional) Add **whitelist** domain patterns to enable the extension only on
   selected sites.
5. (Optional) Add **blacklist** domain patterns to skip specific sites.
   Blacklist rules override whitelist rules.
6. Click **Apply & Reload Page** for the changes to take effect.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18 and npm.

### Setup

```bash
git clone https://github.com/DoctorLai/Simplified-and-Traditional-Chinese.git
cd Simplified-and-Traditional-Chinese
npm install
```

### Scripts

| Command                | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run lint`         | Lint the source with ESLint.                                      |
| `npm run lint:fix`     | Lint and auto‑fix where possible.                                 |
| `npm run format`       | Format the codebase with Prettier.                                |
| `npm run format:check` | Verify formatting without writing changes.                        |
| `npm test`             | Run the Jest unit tests.                                          |
| `npm run coverage`     | Run the tests and enforce the coverage threshold.                 |
| `npm run check`        | Run lint + format check + coverage (the CI gate).                 |
| `npm run build`        | Package the extension into `dist/*.zip` for the Chrome Web Store. |

### Build a publishable package

```bash
npm run build
# -> dist/simplified-and-traditional-chinese-v<version>.zip
```

The generated `.zip` has `manifest.json` at its root and can be uploaded
directly to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).

## Project structure

```
gb2312-big5/            # The unpacked extension (this is what gets zipped & published)
  manifest.json         # Manifest V3
  main.html             # Popup UI
  js/
    background.js       # Service worker
    convert.js          # Core conversion logic + content-script bootstrap
    main.js             # Popup logic
    dialect.js          # Cantonese <-> Mandarin tables
    pinyin.js           # Pinyin lookup table (generated data)
  _locales/             # i18n messages
scripts/build.js        # Packages the extension into dist/*.zip
tests/                  # Jest unit tests
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and make
sure `npm run check` passes before opening a pull request.

## Privacy

This extension runs locally in your browser and does not collect, transmit, sell,
or share personal data. See the [Privacy Policy](PRIVACY.md) for details.

## Support

Enjoy what I am doing? Support me via:

- [Buy me a coffee please ☕](https://helloacm.com/out/buymecoffee)
- [Become a Github Sponsor 💰](https://github.com/sponsors/DoctorLai)
- [Become a Patreon 💰](https://www.patreon.com/doctorlai)
- **[Crypto Payment Accepted ₿](https://justyy.com/out/cryptopayment)**
- [Paypal 🅿️](https://justyy.com/out/paypal)

More free online tools: <https://helloacm.com/tools/>

## Related posts

- [为了 SteemIt 开发了一个 中文简体和繁体自动切换的 Chrome 浏览器插件 — Chrome Extension to Switch between Simplified Chinese and Traditional Chinese Automatically](https://steemit.com/cn/@justyy/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically-steemit-chrome)
- [Chrome Extension to Switch between Simplified Chinese and Traditional Chinese Automatically](https://helloacm.com/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically/)
- [为了 SteemIt 开发了一个 中文简体和繁体自动切换的 Chrome 浏览器插件](https://justyy.com/archives/5016)

## License

Released under the [MIT License](LICENSE).
