# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-07-08

### Added

- Repository documentation and automation: `SECURITY.md`, `CODE_OF_CONDUCT.md`,
  `CHANGELOG.md`, a pull request template, and a Dependabot configuration for npm
  and GitHub Actions updates.
- Localized Chrome Web Store metadata for **25** languages — added Bengali,
  Marathi, Telugu, Tamil, and Filipino.
- A self-updating, dynamic **JavaScript percentage** badge plus additional
  repository badges (forks, watchers, open PRs, commit activity, repo size, top
  language, Ask DeepWiki).
- New npm scripts: `fix` (lint + format auto-fix), `test:watch`, and `clean`.
- Expanded the Jest suite with Pinyin edge cases, dialect (Mandarin → Cantonese)
  conversion, DOM attribute handling, and the content-script bootstrap, reaching
  100% statement/function/line coverage of `convert.js`.

### Changed

- `npm run check` now also runs the build, and coverage thresholds were raised.
- Continuous integration runs on release branches and refreshes the language
  badge automatically.

## [1.1.0] - 2025

### Added

- Privacy Policy (`PRIVACY.md`).

### Fixed

- Keep 著 in simplified phrases such as 著名, 著作, and 顯著 while still converting
  a standalone 著 to 着.

## [1.0.0]

### Added

- Initial public release of the Manifest V3 Chrome extension:
  - Simplified ⇄ Traditional Chinese conversion.
  - Tone-marked Hanyu Pinyin annotation.
  - Experimental Cantonese ⇄ Mandarin dialect conversion.
  - Domain whitelist and blacklist (substring or regular expression).
  - Settings synced via `chrome.storage.sync`.

[unreleased]: https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/compare/v1.1...v1.2.0
[1.1.0]: https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/releases/tag/v1.1
[1.0.0]: https://github.com/DoctorLai/Simplified-and-Traditional-Chinese/releases/tag/v1.0
