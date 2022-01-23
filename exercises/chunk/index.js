// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    if (i + size < array.length) {
      chunked.push(array.slice(i, i + size));
    } else {
      chunked.push(array.slice(i, array.length));
    }
  }
  console.log('chunked: ', chunked);

  return chunked;
}

module.exports = chunk;

// // My frist solution
// const chunked = [];
// for (let i = 0; i < array.length; i += size) {
//   const chunk = [];
//   for (let j = 0; j < size; j++) {
//     if (i + j < array.length) {
//       chunk.push(array[i + j]);
//     }
//   }
//   chunked.push(chunk);
// }
// return chunked;
