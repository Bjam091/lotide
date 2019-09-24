const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  //console.log(sentence)
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};


module.exports = letterPositions;