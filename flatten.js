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

const flatten = function(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      output.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    }
  }
  return output;
};

module.exports = flatten;

// assertArraysEqual(flatten([1,2,[3,4]]), [1,2,3,4]);
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6])
// assertArraysEqual(flatten([1,2,3]), [1,2,3]);