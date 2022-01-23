// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1, level = '') {
  //My Recursive Solution
  if (row > n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let pad = '';
  for (let fill = 0; fill < n - row; fill++) {
    pad += ' ';
  }
  let output = '';
  for (let hash = 1; hash < row * 2; hash++) {
    output += '#';
  }
  // level = pad + output + pad;

  pyramid(n, row, pad + output + pad);
}

// //My First Solution
// for (let row = 1; row <= n; row++) {
//   let output = '';
//   let pad = '';

//   for (let fill = 0; fill < n - row; fill++) {
//     pad += ' ';
//   }
//   for (let hash = 1; hash < row * 2; hash++) {
//     output += '#';
//   }
//   console.log(pad + output + pad);
// }
// return;
// }

module.exports = pyramid;
