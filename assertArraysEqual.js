const eqArrays = function(a, b){
  if (a === b) return console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  for (var i = 0; i < a.length; ++i) {
  if (a[i] !== b[i]) return console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${a} == ${b}`);
}


eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1,2,4], [1,3,6]);