// Expose the data-module globals (pinyin + dialect tables) that the
// content-script functions in convert.js expect to find on the global scope
// when they run inside the browser as separate <script> tags.
const pinyin = require('../gb2312-big5/js/pinyin.js');
const dialect = require('../gb2312-big5/js/dialect.js');

Object.assign(global, pinyin, dialect);
