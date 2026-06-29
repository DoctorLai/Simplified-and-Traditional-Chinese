const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-config-prettier');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      // Vendored third-party libraries.
      'gb2312-big5/js/jquery.js',
      'gb2312-big5/js/jquery-ui.js',
      'gb2312-big5/bs/**',
      // Large generated/data tables.
      'gb2312-big5/js/pinyin.js',
      'gb2312-big5/js/dialect.js'
    ]
  },
  js.configs.recommended,
  {
    // Extension source (content scripts, popup, service worker).
    files: ['gb2312-big5/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...globals.webextensions,
        // jQuery (loaded via <script> tags).
        $: 'readonly',
        jQuery: 'readonly',
        // Globals provided by sibling content-script files at runtime.
        pinyin_data: 'readonly',
        tone_a: 'readonly',
        tone_o: 'readonly',
        tone_e: 'readonly',
        tone_i: 'readonly',
        tone_u: 'readonly',
        C2M: 'readonly',
        M2C: 'readonly',
        C2M_keys: 'readonly',
        M2C_keys: 'readonly',
        // CommonJS export shim (used only under Node/Jest).
        module: 'writable'
      }
    },
    rules: {
      'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', varsIgnorePattern: '^_' }]
    }
  },
  {
    // Build tooling runs on Node.
    files: ['scripts/**/*.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    }
  },
  {
    // Jest tests run on Node; the DOM suite uses the jsdom environment.
    files: ['tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser
      }
    }
  },
  prettier
];
