const middle = function(a) {
  let newArray = [];
  if (a.length <= 2) {
  } else if ((a.length - 1) % 2 === 0) {
    newArray.push(a[Math.floor((a.length / 2))]);
  } else {
    newArray.push(a.length / 2);
    newArray.push((a.length / 2) + 1);
  }
  
  return newArray;
};


module.exports = middle;