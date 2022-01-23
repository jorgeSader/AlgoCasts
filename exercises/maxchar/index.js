// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  for (char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  // console.log('charMap: ', charMap);
  let mostRep = '';
  let reps = 0;

  for (char in charMap) {
    if (charMap[char] > reps) {
      reps = charMap[char];
      mostRep = char;
    }
  }
  return mostRep;
}

module.exports = maxChar;
