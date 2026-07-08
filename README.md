# Simplified / Traditional Chinese Converter （简体 / 繁体 / 拼音 / 广东话）

> Automatically convert any web page between **Simplified Chinese**, **Traditional
> Chinese**, **Pinyin**, and **Cantonese** — a lightweight, privacy‑friendly
> Manifest V3 Chrome extension.

<!-- Badges -->

<!-- Build & quality -->

[![CI](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/actions/workflows/ci.yml/badge.svg)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/actions/workflows/ci.yml)
[![Node.js](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/DoctorLai/Simplified-and-Traditional-Chinese/master/package.json&query=$.engines.node&label=node&logo=node.js&logoColor=white&color=339933)](https://nodejs.org/)
[![Manifest](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/DoctorLai/Simplified-and-Traditional-Chinese/master/gb2312-big5/manifest.json&query=$.manifest_version&label=manifest&prefix=v&logo=googlechrome&logoColor=white&color=4285F4)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?logo=prettier&logoColor=white)](https://prettier.io/)
[![License: MIT](https://img.shields.io/github/license/DoctorLai/Simplified-and-Traditional-Chinese)](LICENSE)
[![Privacy Policy](https://img.shields.io/badge/privacy-policy-0f766e)](PRIVACY.md)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/DoctorLai/Simplified-and-Traditional-Chinese)

<!-- Repository stats -->

[![GitHub stars](https://img.shields.io/github/stars/DoctorLai/Simplified-and-Traditional-Chinese?logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/DoctorLai/Simplified-and-Traditional-Chinese?logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/DoctorLai/Simplified-and-Traditional-Chinese?logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/watchers)
[![GitHub open issues](https://img.shields.io/github/issues/DoctorLai/Simplified-and-Traditional-Chinese?logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/issues)
[![GitHub open PRs](https://img.shields.io/github/issues-pr/DoctorLai/Simplified-and-Traditional-Chinese?logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/pulls)
[![Last commit](https://img.shields.io/github/last-commit/DoctorLai/Simplified-and-Traditional-Chinese?logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/commits)
[![Commit activity](https://img.shields.io/github/commit-activity/m/DoctorLai/Simplified-and-Traditional-Chinese?logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/commits)
[![Repo size](https://img.shields.io/github/repo-size/DoctorLai/Simplified-and-Traditional-Chinese?logo=github)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese)
[![Top language](https://img.shields.io/github/languages/top/DoctorLai/Simplified-and-Traditional-Chinese?logo=javascript&logoColor=black)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese)
[![JavaScript](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/DoctorLai/Simplified-and-Traditional-Chinese/badges/javascript.json)](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/search?l=javascript)

<!-- Chrome Web Store -->

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/olpihmabpjpllgmahlgiakkgaccigpfo?label=chrome%20web%20store&logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/olpihmabpjpllgmahlgiakkgaccigpfo)
[![Users](https://img.shields.io/chrome-web-store/users/olpihmabpjpllgmahlgiakkgaccigpfo?label=users)](https://chromewebstore.google.com/detail/olpihmabpjpllgmahlgiakkgaccigpfo)
[![Rating](https://img.shields.io/chrome-web-store/rating/olpihmabpjpllgmahlgiakkgaccigpfo?label=rating)](https://chromewebstore.google.com/detail/olpihmabpjpllgmahlgiakkgaccigpfo)

<img width="1164" height="882" alt="image" src="https://github.com/user-attachments/assets/b4f75021-1b72-44e6-a8a3-4a438e4b9f8c" />
<img width="1133" height="394" alt="image" src="https://github.com/user-attachments/assets/1c65b389-88a8-4694-b44b-97ba9203dc33" />

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
- 🌍 **Localized metadata** — Chrome Web Store metadata now covers 25 major
  language targets, including English, Chinese, Spanish, Arabic, Portuguese,
  Indonesian, French, Japanese, Russian, German, Korean, Hindi, Turkish,
  Italian, Dutch, Polish, Vietnamese, Persian, Thai, Bengali, Marathi, Telugu,
  Tamil and Filipino.

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
| `npm run fix`          | Auto‑fix lint issues and reformat in one step.                    |
| `npm test`             | Run the Jest unit tests.                                          |
| `npm run test:watch`   | Run the Jest unit tests in watch mode.                            |
| `npm run coverage`     | Run the tests and enforce the coverage threshold.                 |
| `npm run check`        | Run lint + format check + coverage + build (the CI gate).         |
| `npm run build`        | Package the extension into `dist/*.zip` for the Chrome Web Store. |
| `npm run clean`        | Remove the `dist/` and `coverage/` build artifacts.               |

### Build a publishable package

```bash
npm run build
# -> dist/simplified-and-traditional-chinese-v<version>.zip
```

The generated `.zip` has `manifest.json` at its root and can be uploaded
directly to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).

## Testing

Unit tests run on [Jest](https://jestjs.io/) and cover the pure conversion
helpers, DOM traversal, the localized metadata, and the content-script bootstrap:

```bash
npm test          # run the suite
npm run coverage  # run with coverage and enforce the thresholds
```

Coverage is collected from `gb2312-big5/js/convert.js` and gated in CI. Please
add or update tests when you change conversion behaviour.

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
  _locales/             # i18n messages (25 locales)
scripts/build.js        # Packages the extension into dist/*.zip
tests/                  # Jest unit tests (convert, DOM, i18n, content-script)
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md), follow
our [Code of Conduct](CODE_OF_CONDUCT.md), and make sure `npm run check` passes
before opening a pull request. Notable changes are recorded in the
[Changelog](CHANGELOG.md).

## Privacy

This extension runs locally in your browser and does not collect, transmit, sell,
or share personal data. See the [Privacy Policy](PRIVACY.md) for details.

## Security

Found a vulnerability? Please report it privately — see our
[Security Policy](SECURITY.md) for how to disclose issues responsibly.

## Support

Enjoy what I am doing? Support me via:

- [Buy me a coffee please ☕](https://buymeacoffee.com/y0btg5r)
- [Become a Github Sponsor 💰](https://github.com/sponsors/DoctorLai)
- [Become a Patreon 💰](https://www.patreon.com/doctorlai)
- **[Crypto Payment Accepted ₿](https://buymeacoffee.com/y0btg5r/crypto-payment-accepted)**
- [Paypal 🅿️](https://paypal.me/doctorlai/5)

More free online tools: <https://helloacm.com/tools/>

## Related posts

- [为了 SteemIt 开发了一个 中文简体和繁体自动切换的 Chrome 浏览器插件 — Chrome Extension to Switch between Simplified Chinese and Traditional Chinese Automatically](https://steemit.com/cn/@justyy/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically-steemit-chrome)
- [Chrome Extension to Switch between Simplified Chinese and Traditional Chinese Automatically](https://helloacm.com/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically/)
- [为了 SteemIt 开发了一个 中文简体和繁体自动切换的 Chrome 浏览器插件](https://justyy.com/archives/5016)

## License

Released under the [MIT License](LICENSE).
