"use strict";
const rewire = require('rewire');
const assert = require('assert');

describe('module', () => {
  let module;
  beforeEach(() => {
    module = rewire('../index');
  });

  describe('#add()', () => {
    it('is a function', () => {
      assert.strictEqual('function', typeof module.add);
    });
    it('should add numbers', () => {
      assert.equal(3, module.add(1, 2));
    });
    it('concats strings', () => {
      assert.equal('foobar', module.add('foo', 'bar'));
    })
  });

  describe('#bmi()', function () {
    const weight = 68;
    const height = 1.65;

    it('is a function', () => {
      assert.strictEqual('function', typeof module.bmi);
    });
    it('returns a string', () => {
      assert.strictEqual('string', typeof module.bmi(weight, height));
    });
    it('calculates the BMI with 1 digit', () => {
      assert.equal('68 / (1.65^2) = 25.0', module.bmi(weight, height));
    });
    it('has inner function to calculate the BMI', () => {
      assert('undefined', typeof module.calcBmi);

      let calcBmi = module.__get__('calcBmi');
      assert.equal(25, Math.round(calcBmi(weight, height)));
    });
  })
});