const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, [2, [3, 4, 5]]], [1, [2, [3,4 , 5]]]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false);
assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);