class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // Initialize the root node as null when creating the tree.
  }

  // Insertion
  insert(value) {
    this.root = this._insertRecursive(this.root, value); // Start insertion from the root.
  }

  _insertRecursive(node, value) {
    if (node === null) {
      // If the current node is null, create a new node with the given value.
      return new TreeNode(value);
    }

    if (value < node.value) {
      // If the value is smaller, go to the left subtree and insert there.
      node.left = this._insertRecursive(node.left, value);
    } else {
      // If the value is larger, go to the right subtree and insert there.
      node.right = this._insertRecursive(node.right, value);
    }

    return node;
  }

  // In-order Traversal
  inOrderTraversal() {
    const result = [];
    this._inOrderTraversalRecursive(this.root, result); // Start traversal from the root.
    return result;
  }

  _inOrderTraversalRecursive(node, result) {
    if (node) {
      // Recursively traverse the left subtree.
      this._inOrderTraversalRecursive(node.left, result);

      // Visit the current node (adding it to the result).
      result.push(node.value);

      // Recursively traverse the right subtree.
      this._inOrderTraversalRecursive(node.right, result);
    }
  }
}

// Create a binary tree
const tree = new BinaryTree();

// Insert some values
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

// In-order traversal
console.log(tree.inOrderTraversal()); // Output: [2, 3, 4, 5, 6, 7, 8]
