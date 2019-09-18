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

const middle = function(a){
  let emptyArray = []
  let newArray = []
  if( a.length <= 2){
  } else if ((a.length - 1) % 2 === 0) {
    newArray.push(a[Math.floor((a.length / 2))]);
  } else {
    newArray.push(a.length / 2);
    newArray.push((a.length / 2) +1);
  }
  
return newArray
}


assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
