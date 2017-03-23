"use strict";

function calcBmi(weight, height) {
  return weight / (Math.pow(height, 2));
}

module.exports = {
  "add": (a, b) => a + b,
  "bmi": (weight, height) => {
    if (isNaN(Number(weight))) {
      return `Invalid input for weight: ${weight}`;
    }

    if (isNaN(Number(height))) {
      return `Invalid input for height: ${height}`;
    }

    const bmi = calcBmi(weight, height).toFixed(1);
    return `${weight} / (${height.toFixed(2)}^2) = ${bmi}`;
  }
};
