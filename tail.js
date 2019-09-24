const tail = function(words) {
  let wordsCopy = [...words];
  wordsCopy.shift();
  return wordsCopy;
};

module.exports = tail;