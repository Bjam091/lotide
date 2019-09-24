const findKeyByValue = function(shows, value) {
  for (let genre in shows) {
    if (shows[genre] === value) {
      return genre;
    }
  } return undefined;
};

module.exports = findKeyByValue;