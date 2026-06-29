const {
  testChinese,
  Pinyin,
  Traditionalized,
  Simplized,
  translateText,
  checkList,
  getDomain,
  shouldTranslatePage
} = require('../gb2312-big5/js/convert.js');

describe('testChinese', () => {
  it('detects CJK characters', () => {
    expect(testChinese('简', 0)).toBe(true);
    expect(testChinese('繁', 0)).toBe(true);
  });

  it('returns false for ASCII characters', () => {
    expect(testChinese('A', 0)).toBe(false);
    expect(testChinese('1', 0)).toBe(false);
    expect(testChinese(' ', 0)).toBe(false);
  });
});

describe('Traditionalized / Simplized', () => {
  it('converts simplified to traditional', () => {
    expect(Traditionalized('简体中文')).toBe('簡體中文');
  });

  it('converts traditional to simplified', () => {
    expect(Simplized('簡體中文')).toBe('简体中文');
  });

  it('leaves non-Chinese text untouched', () => {
    expect(Traditionalized('Hello 123!')).toBe('Hello 123!');
    expect(Simplized('Hello 123!')).toBe('Hello 123!');
  });

  it('round-trips simplified -> traditional -> simplified', () => {
    const original = '语言转换测试';
    expect(Simplized(Traditionalized(original))).toBe(original);
  });
});

describe('Pinyin', () => {
  it('produces toned pinyin for a Chinese character', () => {
    expect(Pinyin('中')).toBe('Zhōng');
  });

  it('keeps non-Chinese characters in place', () => {
    expect(Pinyin('A')).toBe('A');
  });
});

describe('translateText', () => {
  it('returns an empty string for empty or null input', () => {
    expect(translateText('', 1, 0)).toBe('');
    expect(translateText(null, 1, 0)).toBe('');
  });

  it('returns the text unchanged when target encoding is 0', () => {
    expect(translateText('简体', 0, 0)).toBe('简体');
  });

  it('converts to simplified (encoding 1)', () => {
    expect(translateText('簡體', 1, 0)).toBe('简体');
  });

  it('converts to traditional (encoding 2)', () => {
    expect(translateText('简体', 2, 0)).toBe('簡體');
  });

  it('converts to pinyin (encoding 3)', () => {
    expect(translateText('中', 3, 0)).toBe('Zhōng');
  });

  it('applies the Cantonese -> Mandarin dialect mapping', () => {
    expect(translateText('係', 0, 1)).toBe('是');
  });
});

describe('checkList (blacklist matching)', () => {
  it('returns false for empty, null, undefined or non-string input', () => {
    expect(checkList('https://example.com', '')).toBe(false);
    expect(checkList('https://example.com', null)).toBe(false);
    expect(checkList('https://example.com', undefined)).toBe(false);
    expect(checkList('https://example.com', 123)).toBe(false);
  });

  it('returns false when only blank lines are provided', () => {
    expect(checkList('https://example.com', '\n\n   \n')).toBe(false);
  });

  it('matches by plain substring', () => {
    expect(checkList('https://www.google.com/search', 'google.com')).toBe(true);
  });

  it('matches domain substrings case-insensitively', () => {
    expect(checkList('https://News.Example.COM/article', 'example.com')).toBe(true);
  });

  it('matches domain regular expressions', () => {
    expect(checkList('https://docs.example.edu/page', '(^|\\.)example\\.edu$')).toBe(true);
  });

  it('matches by regular expression', () => {
    expect(checkList('https://mail.example.org', '^https://mail\\.')).toBe(true);
  });

  it('does not match unrelated URLs', () => {
    expect(checkList('https://example.com', 'github.com\nstackoverflow.com')).toBe(false);
  });

  it('handles invalid regular expressions without throwing', () => {
    expect(() => checkList('https://example.com', '(')).not.toThrow();
    expect(checkList('https://example.com', '(')).toBe(false);
    // Falls back to a substring match when the pattern is not a valid RegExp.
    expect(checkList('https://example.com/path(', '(')).toBe(true);
  });
});

describe('domain whitelist / blacklist gating', () => {
  it('extracts hostnames from valid URLs', () => {
    expect(getDomain('https://sub.example.com/path')).toBe('sub.example.com');
  });

  it('falls back to the original value when URL parsing fails', () => {
    expect(getDomain('example.com')).toBe('example.com');
  });

  it('allows all domains when whitelist and blacklist are empty', () => {
    expect(shouldTranslatePage('https://example.com', '', '')).toBe(true);
  });

  it('allows matching whitelist domains', () => {
    expect(shouldTranslatePage('https://docs.example.com/path', 'example.com', '')).toBe(true);
  });

  it('allows matching whitelist regex domains', () => {
    expect(shouldTranslatePage('https://news.example.org', '^news\\.example\\.org$', '')).toBe(
      true
    );
  });

  it('blocks domains outside a non-empty whitelist', () => {
    expect(shouldTranslatePage('https://blocked.example.com', 'allowed.example.com', '')).toBe(
      false
    );
  });

  it('lets blacklist override whitelist', () => {
    expect(
      shouldTranslatePage('https://docs.example.com', 'example.com', 'docs\\.example\\.com')
    ).toBe(false);
  });
});
