const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([0, 1], [0, 1]);
assertArraysEqual([], []);
assertArraysEqual([0], [0,1]);