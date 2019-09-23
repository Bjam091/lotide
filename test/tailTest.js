const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("for the array [Yo Yo, Lighthouse, Labs] return [Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("for the array [1, 2, 3, 4, 5] return [2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });


});

