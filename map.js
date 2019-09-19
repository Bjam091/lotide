const assertArraysEqual = function(actual, expected) {
  const same = eqArrays(actual, expected);
  if(same) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const eqArrays = function(a, b){
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
  if (a[i] !== b[i]) return false;
  }
  return true;
}








const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);