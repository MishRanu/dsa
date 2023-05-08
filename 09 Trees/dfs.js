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

  DFSPreOrder() {
    const data = [];
    const current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }


  DFSPostOrder() {
    const data = [];
    const current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);
    return data;
  }


  DFSInOrder() {
    const data = [];
    const current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
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

// console.log(tree);
// console.log(tree.find(5));
// console.log(tree.find(100));
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());




// Do not edit the line below.
exports.BST = BST;

/* 
              10
          5        15
      3      8   13    18 


  Preorder -> 10 5 3 8 15 13 18
    Usage -> 
  PostOrder -> 3 8 5 13 18 15 10
    Usage -> 
  Inorder -> 3 5 8 10 13 15 18

     P
  C1   C2

  total donation - 10000
  P - 5000
  C1, C2 ? 


  */

