// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
// Solution 3 (whiout split) LEAST FAVORITE!
function capitalize(str) {
  let sentence = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
      sentence += str[i].toUpperCase();
    } else {
      sentence += str[i];
    }
  }
  console.log('sentence: ', sentence);
  return sentence;
}

// function capitalize(str) {
//   // My solution 2 (using slice)
//   const sentence = [];
//   for (let word of str.split(' ')) {
//     sentence.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return sentence.join(' ');
// }

// // my Original Solution
// function capitalize(str) {
//   const words = str.split(' ');
//   let sentence = [];

//   for (let word of words) {
//     sentence.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   return sentence.join(' ');
// }

module.exports = capitalize;
