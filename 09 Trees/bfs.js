class BST {
  constructor() {
    this.root = null;
  }

  find(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return true;
    }

    var current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;

    while (true) {
      if (value === current.value) {
        return undefined;
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  BFS() {
    var node = this.root;
    var data = [];
    var queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree);
console.log(tree.find(5));
console.log(tree.find(100));
console.log(tree.BFS());


// Do not edit the line below.
exports.BST = BST;
