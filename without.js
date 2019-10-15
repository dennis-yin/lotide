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

const without = function(source, itemsToRemove) {
  let output = [];

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      continue;
    } else {
      output.push(source[i]);
    }
  }

  return output;
};

// assertArraysEqual(without([1,2,3],[5]), [1,2,3]);
// assertArraysEqual(without([1,2,3],[]), [1,2,3]);
// assertArraysEqual(without([1,2,3],[2]), [1,3]);
// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);