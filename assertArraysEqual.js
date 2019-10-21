const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log("Assertion Passed: The two arrays are equal.")
  } else {
    console.log("Assertion Failed: The two arrays are not equal.")
  }
};

module.exports = assertArraysEqual;