/**
 * @jest-environment jsdom
 */
const { translateBody } = require('../gb2312-big5/js/convert.js');

describe('translateBody', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('does nothing when both encoding and dialect are 0', () => {
    document.body.innerHTML = '<p>简体</p>';
    translateBody(document.body, 0, 0);
    expect(document.body.textContent).toBe('简体');
  });

  it('converts nested text nodes to traditional', () => {
    document.body.innerHTML = '<div><span>简体中文</span></div>';
    translateBody(document.body, 2, 0);
    expect(document.body.textContent).toBe('簡體中文');
  });

  it('converts nested text nodes to simplified', () => {
    document.body.innerHTML = '<div>簡體中文</div>';
    translateBody(document.body, 1, 0);
    expect(document.body.textContent).toBe('简体中文');
  });

  it('keeps 著名 when simplifying page text', () => {
    document.body.innerHTML = '<div>最著名的人</div>';
    translateBody(document.body, 1, 0);
    expect(document.body.textContent).toBe('最著名的人');
  });

  it('translates the alt attribute of elements', () => {
    document.body.innerHTML = '<img alt="简体">';
    translateBody(document.body, 2, 0);
    expect(document.querySelector('img').getAttribute('alt')).toBe('簡體');
  });

  it('leaves the contents of a textarea untouched', () => {
    document.body.innerHTML = '<textarea>简体</textarea>';
    translateBody(document.body, 2, 0);
    expect(document.querySelector('textarea').textContent).toBe('简体');
  });
});
