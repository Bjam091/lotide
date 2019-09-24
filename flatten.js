const flatten = function(arr) {
  let newArray = [].concat.apply([],arr);
  return newArray;
};

module.exports = flatten;