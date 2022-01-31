// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let a = arr[j];
      let b = arr[j + 1];

      if (a > b) {
        arr[j] = b;
        arr[j + 1] = a;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  // let min;
  for (let j = 0; j < arr.length; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      let a = arr[j];
      let b = arr[i];

      if (b < a) {
        arr[i] = a;
        arr[j] = b;
      }
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  if (left.length > 0) {
    result.push(...left);
  } else {
    result.push(...right);
  }
  return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
