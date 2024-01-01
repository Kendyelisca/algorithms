// Definition for a binary tree node.
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root The root of the binary tree.
 * @return {string} The serialized string representation of the tree.
 */
var serialize = function (root) {
  // Base case: if the node is null, represent it as "null"
  if (!root) {
    return "null";
  }

  // Recursive case: serialize the left and right subtrees
  const leftSerialized = serialize(root.left);
  const rightSerialized = serialize(root.right);

  // Combine the current node value with the serialized left and right subtrees
  return `${root.val},${leftSerialized},${rightSerialized}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data The serialized string representation of the tree.
 * @return {TreeNode} The root of the binary tree.
 */
var deserialize = function (data) {
  // Convert the serialized string into an array of values
  const values = data.split(",");

  // Helper function to recursively build the tree from the array of values
  const buildTree = function () {
    // Get the next value from the array
    const val = values.shift();

    // Base case: if the value is "null", return null
    if (val === "null") {
      return null;
    }

    // Create a new node with the current value
    const node = new TreeNode(parseInt(val));

    // Recursive case: build the left and right subtrees
    node.left = buildTree();
    node.right = buildTree();

    return node;
  };

  // Start building the tree from the root and return it
  return buildTree();
};

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

// Serialize the tree
const serializedTree = serialize(root);
console.log(serializedTree);

// Deserialize the string back into a tree
const deserializedRoot = deserialize(serializedTree);
console.log(deserializedRoot);
