class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            // traverse until appropriate spot
            let currentNode = this.root;
            let nextNode = value < currentNode.value ? currentNode.left : currentNode.right;

            while (nextNode) {
                currentNode = nextNode;
                nextNode = value < currentNode.value ? currentNode.left : currentNode.right;
            }

            if (value < currentNode.value) {
                currentNode.left = new Node(value);
            } else {
                currentNode.right = new Node(value);
            }
        }
    }
  
    contains(value) {
        // traverse until appropriate spot
        let currentNode = this.root;
        let nextNode = value < currentNode.value ? currentNode.left : currentNode.right;

        while (nextNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = nextNode;
            nextNode = value < currentNode.value ? currentNode.left : currentNode.right;
        }

        return false;
    }
  
    min(node = null) {
    }
  
    max(node) {
    }
  
    remove(value) {
    }
  
    // left, root, right
    inOrderTraversal(node, func = console.log) {
        this.inOrderTraversal(node.left, func = console.log);
        func(node.value);
        this.inOrderTraversal(node.right, func = console.log);
    }
  
    // root, left, right
    preOrderTraversal(node, func = console.log) {
        func(node.value);
        this.preOrderTraversal(node.left, func = console.log);
        this.preOrderTraversal(node.right, func = console.log);
    }
  
    // left, right, root
    postOrderTraversal(node, func = console.log) {
        this.postOrderTraversal(node.left, func = console.log);
        this.postOrderTraversal(node.right, func = console.log);
        func(node.value);
    }
  }
  
//   export { BinarySearchTree, Node };

// const myBST = new BinarySearchTree();

// myBST.insert(5);
// myBST.insert(4);
// myBST.insert(7);
// myBST.insert(3);
// myBST.insert(8);
// console.log(myBST);