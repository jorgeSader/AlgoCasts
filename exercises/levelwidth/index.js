// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const q = [root, 'end'];
  const lvlCount = [0];

  while (q.length > 1) {
    const node = q.shift();

    if (node === 'end') {
      q.push('end');
      lvlCount.push(0);
    } else {
      q.push(...node.children);
      lvlCount[lvlCount.length - 1]++;
    }
  }
  console.log('lvlCount: ', lvlCount);

  return lvlCount;
}

module.exports = levelWidth;
