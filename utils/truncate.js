const truncate = function(sentence, length) {
  if (sentence.length < length) return sentence;
  let foundSpace = false;
  let splitPoint = null;
  let i = length;
  while (foundSpace == false || splitPoint == null) {
    let isSpace = sentence.charAt(i) == " ";
    if (foundSpace == true && !isSpace) splitPoint = i; 
    if (isSpace) foundSpace = true;
    i--;
  };
  return sentence.substring(0, splitPoint + 1) + "...";
}

module.exports = truncate;