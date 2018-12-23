import { getParameterByName } from '../url';

describe('This is a simple test', () => {

  test('get query params by name from url', () => {

    let testArr = [
      { url: '/?', e: { q: undefined } },
      { url: '/?q=1', e: { q: '1' } },
      { url: '/?q=1&qq=2', e: { q: '1', qq: '2' } },
      { url: '/?q=1&qq=2&y=xkjhasdas?asd?asd', e: { q: '1', qq: '2', 'x': undefined } },
    ];

    testArr.map((item) => {
      const url = `${ item.url }`;
      for (let key in item.e) {
        let rs = getParameterByName(key, url);
        expect(rs).toBe(item.e[key]);
      }
    });
  });

});
