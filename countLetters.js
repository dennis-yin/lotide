const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  str = str.replace(/\s+/g, '');    // Remove spaces from the string

  for (const letter of str) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

const test = countLetters("aeiou");
assertEqual(test["a"], 1);
assertEqual(test["e"], 1);
assertEqual(test["i"], 1);
assertEqual(test["o"], 1);
assertEqual(test["u"], 1);
assertEqual(test["x"], undefined);

module.exports = countLetters;