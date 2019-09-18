const assertArraysEqual = function(actual, expected) {
  if (without(actual, expected) === false) {
   return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  };   
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) 
  };


// const eqArrays = function(a, b){
//   if (a.length !== b.length) return false;
//   for (var i = 0; i < a.length; ++i) {
//   if (a[i] !== b[i]) return false;
//   }
//   return true;
// }

const without = function(arr1, arr2) {
  var newArr = [];
   function isIn(value){
      if (arr2.indexOf(value) === -1){
         return true;  
      }
      arr2.splice(arr2.indexOf(value), 1); 
   }
   newArr = arr1.filter(isIn);
   return newArr.concat(arr2);
 }


assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []); // => true
assertArraysEqual(without(["1", "2", "3"], ["1", "2"]), ["3"]); // => false