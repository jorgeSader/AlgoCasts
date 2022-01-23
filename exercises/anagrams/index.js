// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// // my original solution
//
// function anagrams(stringA, stringB) {
//   const normalizedA = stringA
//     .replace(/\W/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
//   const normalizedB = stringB
//     .replace(/\W/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
//   return normalizedA === normalizedB;
// }

// // refactored solution (helper function)
//
// function anagrams(stringA, stringB) {
//   return normalize(stringA) === normalize(stringB);
// }

// function normalize(str) {
//   return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
// }

// // third Solution (char maps)
//
function anagrams(stringA, stringB) {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/\W/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

module.exports = anagrams;
