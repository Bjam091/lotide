const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
   return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  };   
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) 
  };


const eqArrays = function(a, b){
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
  if (a[i] !== b[i]) return false;
  }
  return true;
}


assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false