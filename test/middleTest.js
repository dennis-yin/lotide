const assert = require('chai').assert;
const expect = require('chai').expect;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1,2,3]", () => {
    // assert.strictEqual(middle([1,2,3]), [2]);
    expect(middle([1,2,3])).to.eql([2])
  });

  it("returns [2,3] for [1,2,3,4]", () => {
    expect(middle([1,2,3,4])).to.eql([2,3]); 
  });

  it("returns [] for [1]", () => {
    expect(middle([1])).to.eql([]);
  });

  it("returns [] for []", () => {
    expect(middle([])).to.eql([]);
  });
});