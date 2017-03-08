"use strict";

function calcBmi(weight, height) {
  return weight / (Math.pow(height, 2));
}

module.exports = {
  "add": (a, b) => a + b,
  "bmi": (weight, height) => {
    let bmi = calcBmi(weight, height).toFixed(1);
    return `${weight} / (${height}^2) = ${bmi}`;
  }
};
