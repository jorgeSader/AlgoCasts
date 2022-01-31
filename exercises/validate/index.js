// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  //there is a max and we are out of bounds
  if (max !== null && node.data > max) {
    return false;
  }

  // there is a min and we are out of bounds
  if (min !== null && node.data < min) return false;

  // validate child with new max
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  // validate child with new min
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
