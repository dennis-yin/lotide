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
    console.log("Assertion Failed; The two arrays are not equal.")
  }
};

const middle = function(arr) {
  let result = [];
  let midIndex = Math.floor(arr.length/2);

  if (arr.length === 0 || arr.length === 1) {
    return result;
  } else if (arr.length % 2 == 1) {
    result.push(arr[midIndex]);
  } else {
    result.push(arr[midIndex - 1], arr[midIndex]);
  }
  return result;
};

// assertArraysEqual(middle([1,2,3]), [2]);
// assertArraysEqual(middle([1,2,3,4]), [2,3]);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([]), []);