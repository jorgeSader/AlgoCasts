// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  //my Original solution
  for (let lineNum = 1; lineNum <= n; lineNum++) {
    let output = '';
    for (let hash = 1; hash <= lineNum; hash++) {
      output += '#';
    }
    for (let fill = 0; fill < n - lineNum; fill++) {
      output += ' ';
    }
    console.log(output);
  }
  return;
}

module.exports = steps;
