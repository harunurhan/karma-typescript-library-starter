import { Library } from './index';

describe('Library', () => {
  it('shoud do thing', () => {
    const library = new Library();
    expect(library.doThing()).toBe('done');
  });
});
