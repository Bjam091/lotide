const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const same = eqObjects(actual, expected);
  const inspect = require('util').inspect;
  if (same) {
    return console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;