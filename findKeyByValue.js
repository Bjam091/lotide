const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const findKeyByValue = function(shows, value) {
  for (let genre in shows) {
    if (shows[genre] === value) {
      return genre;
    }
  } return undefined;
};




const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  animation: "Bob's Burgers",
  reality: "Big Brother"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Big Brother"), "reality");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Law and Order"), undefined);