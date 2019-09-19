const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const key of obj1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


const eqArrays = function(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};


// FUNCTION IMPLEMENTATION

const assertObjectsEqual = function(actual, expected) {
  const same = eqObjects(actual, expected);
  const inspect = require('util').inspect;
  if (same) {
    return console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
};



const ab = { a: "1", b: 2};
const ba = { b: 2, a: "1"};

assertObjectsEqual(ab, ba);

