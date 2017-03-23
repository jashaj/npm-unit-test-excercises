"use strict";
const rewire = require('rewire');
const assert = require('assert');
const describe = require("mocha").describe;
const it = require("mocha").it;
const beforeEach = require("mocha").beforeEach;

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

  describe('#bmi()', () => {
    const weight = 80;
    const height = 1.80;

    it('is a function', () => {
      assert.strictEqual('function', typeof module.bmi);
    });
    it('returns a string', () => {
      assert.strictEqual('string', typeof module.bmi(weight, height));
    });
    describe('invalid input', () => {
      it('rejects input if weight is not a number', () => {
        assert.equal('Invalid input for weight: 80kg', module.bmi('80kg', height));
      });
      it('rejects input if height is not a number', () => {
        assert.equal('Invalid input for height: 1m80', module.bmi(weight, '1m80'));
      })
    });
    it('calculates the BMI with 1 digit', () => {
      assert.equal('80 / (1.80^2) = 24.7', module.bmi(weight, height));
    });
    it('has inner function to calculate the BMI', () => {
      assert('undefined', typeof module.calcBmi);

      const calcBmi = module.__get__('calcBmi');
      assert.equal(25, Math.round(calcBmi(weight, height)));
    });
  })
});