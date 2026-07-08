/**
 * @jest-environment jsdom
 */

// Exercises the content-script bootstrap in convert.js, which only runs when a
// `chrome.storage.sync` API is present. The module is loaded in isolation with a
// mocked chrome API so the auto-run logic executes against a real jsdom DOM.

const flushMicrotasks = async () => {
  for (let i = 0; i < 5; i += 1) {
    await Promise.resolve();
  }
};

function mockChrome(store) {
  return {
    storage: {
      sync: {
        get: (key) => Promise.resolve({ [key]: store[key] })
      }
    }
  };
}

describe('content-script bootstrap (runContentScript)', () => {
  const originalChrome = global.chrome;

  afterEach(() => {
    if (originalChrome === undefined) {
      delete global.chrome;
    } else {
      global.chrome = originalChrome;
    }
    jest.useRealTimers();
    jest.resetModules();
  });

  it('translates the page body using the synced settings', async () => {
    jest.useFakeTimers();
    document.body.innerHTML = '<p>简体中文</p>';
    global.chrome = mockChrome({ setting: 2, dialect: 0, wlist: '', blist: '' });

    jest.isolateModules(() => {
      require('../gb2312-big5/js/convert.js');
    });

    await flushMicrotasks();
    expect(document.body.textContent).toBe('簡體中文');

    // The bootstrap re-applies the conversion a few times via setTimeout.
    jest.advanceTimersByTime(5000);
    await flushMicrotasks();
    expect(document.body.textContent).toBe('簡體中文');
  });

  it('skips translation when the page is blacklisted', async () => {
    jest.useFakeTimers();
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    document.body.innerHTML = '<p>简体中文</p>';
    // Default jsdom URL is http://localhost/, so blacklist "localhost".
    global.chrome = mockChrome({ setting: 2, dialect: 0, wlist: '', blist: 'localhost' });

    jest.isolateModules(() => {
      require('../gb2312-big5/js/convert.js');
    });

    await flushMicrotasks();
    jest.advanceTimersByTime(5000);
    await flushMicrotasks();

    expect(document.body.textContent).toBe('简体中文');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('skipped by whitelist/blacklist'));
    logSpy.mockRestore();
  });
});
