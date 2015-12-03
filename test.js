import assert from 'power-assert';

import isEquals from '.';

describe('isEquals', () => {
  it('valid', () => {
    assert(isEquals('a', 'a', 'a', 'a'));
  });

  it('invalid', () => {
    assert(!isEquals('a', 'b', 'a', 'a'));
  });
});
