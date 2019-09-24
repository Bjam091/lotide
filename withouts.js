const withouts = function(a, b) {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    let itemsFound = b.indexOf(a[i]);
    while (itemsFound !== -1) {
      newArray.push(a[i]);
      itemsFound = b.indexOf(a[i], itemsFound + 1);
    }
  }
  console.log(newArray);
};

module.exports = withouts;