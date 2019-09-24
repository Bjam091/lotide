const takeUntil = function(array, callback) {
  for (let item in array) {
    if (callback(array[item])) {
      array.splice(item);
    }
  }
  return array;
};


module.exports = takeUntil;