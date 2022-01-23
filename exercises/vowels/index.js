// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // My includes Solution
  let count = 0;
  let allVowels = ['a', 'e', 'i', 'o', 'u'];

  for (char of str.toLowerCase()) {
    if (allVowels.includes(char)) {
      count++;
    }
  }
  return count;

  // // My regex solution
  // return str.replace(/[^aeiou]/gi, '').length;
  // return str.match(/[aeiou]/gi).length || 0;

  // // My Iterative solution
  // let count = 0;
  // for (let char of str.toLowerCase()) {
  //   if (
  //     char === 'a' ||
  //     char === 'e' ||
  //     char === 'i' ||
  //     char === 'o' ||
  //     char === 'u'
  //   ) {
  //     count++;
  //   }
  // }
  // return count;
}

module.exports = vowels;
