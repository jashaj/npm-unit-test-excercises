"use strict";
const assert = require('assert');
describe('module', () => {
  let module;
  beforeEach(() => {
    module = require('../index');
  });
  describe('#add()', function () {
    it('is a function', () => {
      console.assert(typeof module.add === 'function');
    });
    it('should add numbers', () => {
      assert.equal(3, module.add(1, 2));
    });
    it('concats strings', () => {
      assert.equal('foobar', module.add('foo', 'bar'));
    })
  });
});