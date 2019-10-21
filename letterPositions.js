const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log("Assertion Passed: The two arrays are equal.")
  } else {
    console.log("Assertion Failed: The two arrays are not equal.")
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    } else {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [];
        results[letter].push(i);
      }
    }
  }

  return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2,3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);