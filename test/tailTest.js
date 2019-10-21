const expect = require('chai').expect;
const tail = require('../tail');

describe("#tail", () => {
  it("should not modify the original array when tail is called", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    expect(words).to.have.lengthOf(3);
  });
});