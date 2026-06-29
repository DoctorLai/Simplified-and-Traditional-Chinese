# Contributing

Thanks for your interest in improving the **Simplified / Traditional Chinese Converter**
Chrome extension! Contributions of all kinds are welcome — bug reports, feature
requests, documentation fixes and pull requests.

## Project layout

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

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm (ships with Node.js)

## Getting started

```bash
git clone https://github.com/DoctorLai/Simplified-and-Traditional-Chinese.git
cd Simplified-and-Traditional-Chinese
npm install
```

## Available scripts

| Command                | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run lint`         | Lint the source with ESLint.                                      |
| `npm run lint:fix`     | Lint and auto-fix where possible.                                 |
| `npm run format`       | Format the codebase with Prettier.                                |
| `npm run format:check` | Verify formatting without writing changes.                        |
| `npm test`             | Run the Jest unit tests.                                          |
| `npm run coverage`     | Run the tests and enforce the coverage threshold.                 |
| `npm run check`        | Run lint + format check + coverage (what CI runs).                |
| `npm run build`        | Package the extension into `dist/*.zip` for the Chrome Web Store. |

Please make sure `npm run check` passes before opening a pull request.

## Loading the extension locally

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode** (top-right toggle).
3. Click **Load unpacked** and select the `gb2312-big5/` folder.
4. Pin the extension and open any web page to test conversions.

After editing a content script, reload the extension and refresh the page.

## Coding conventions

- Code style is enforced by **Prettier** and **ESLint** (see `.prettierrc.json`
  and `eslint.config.js`). Run `npm run lint:fix` and `npm run format` before
  committing.
- The core conversion logic in `gb2312-big5/js/convert.js` is unit tested. If you
  change conversion behaviour, please add or update tests in `tests/`.
- Keep the content-script files free of Node-only APIs; they run in the browser.

## Pull request checklist

- [ ] `npm run check` passes locally.
- [ ] New behaviour is covered by tests where practical.
- [ ] Documentation (README/CONTRIBUTING) updated if needed.
- [ ] Commit messages are clear and descriptive.

## Reporting bugs

Open an issue on
[GitHub](https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/issues)
with steps to reproduce, the URL where the problem occurs, and your Chrome
version. Security-sensitive reports can be sent privately via the contact form on
[justyy.com](https://justyy.com).

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](LICENSE).
