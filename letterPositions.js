
const assertArraysEqual = function(actual, expected) {
  if (letterPositions(actual, expected) === false) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};



// const eqArrays = function(a, b){
//   if (a.length !== b.length) return false;
//   for (var i = 0; i < a.length; ++i) {
//   if (a[i] !== b[i]) return false;
//   }
//   return true;
// }

const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  //console.log(sentence)
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};



console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
