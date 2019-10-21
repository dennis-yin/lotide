const assertEqual = require('./assertEqual');

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
      return eqArrays(arrOne[i], arrTwo[i]);
    }

    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;