const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// const eqArrays = function(a, b){
//   if (a.length !== b.length) return false;
//   for (var i = 0; i < a.length; ++i) {
//   if (a[i] !== b[i]) return false;
//   }
//   return true;
// }


const flatArray = function(arr){
  let newArray = [].concat.apply([],arr)
  return newArray

}
//console.log(flatArray((([1, 2, [3, 4], 5, [6]])), ([1, 2, 3, 4, 5, 6])))

assertEqual((flatArray(([1, 2, [3, 4], 5, [6]]))), ([1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]