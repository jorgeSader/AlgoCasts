// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// My Memoized Recursive Solution

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

// function fib(n, fibN = [0, 1]) {
//   if (fibN.length > n) {
//     return fibN[n];
//   }
//   fibN.push(fibN[fibN.length - 2] + fibN[fibN.length - 1]);
//   return fib(n, fibN);
// }

//courses, super short recursive solution
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
}

fib = memoize(fib);

// // My Recursive Solution
// function fib(n, fibN = [0, 1]) {
//   if (fibN.length > n) {
//     return fibN[n];
//   }
//   fibN.push(fibN[fibN.length - 2] + fibN[fibN.length - 1]);
//   console.log('fibN: ', fibN);
//   return fib(n, fibN);
// }

// // My Iterative solution
// function fib(n) {
//   const fibN = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fibN.push(fibN[i - 2] + fibN[i - 1]);
//   }
//   console.log('fibN: ', fibN);

//   return fibN[n];
// }

module.exports = fib;
