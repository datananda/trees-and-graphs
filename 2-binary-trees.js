class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }

  insertChild(value) {
      const child = new BinaryTree(value);
      if (!this.left) {
          this.left = child;
          return child;
      }
      if (!this.right) {
            this.right = child;
            return child;
      }
      return undefined;
  }

  // left, root, right
  inOrderTraversal(arr = []) {
      if (this.left) this.left.inOrderTraversal(arr);
      arr.push(this.value);
      if (this.right) this.right.inOrderTraversal(arr);

      return arr;
  }

  // root, left, right
  preOrderTraversal(arr = []) {
      arr.push(this.value);
      if (this.left) this.left.preOrderTraversal(arr);
    if (this.right) this.right.preOrderTraversal(arr);

    return arr;
  }

  // left, right, root
  postOrderTraversal(arr = []) {
      if (this.left) this.left.postOrderTraversal(arr);
      if (this.right) this.right.postOrderTraversal(arr);
      arr.push(this.value);

  return arr;
  }

  contains(value) {
    if (this.value === value) return true;
    if (this.left) this.left.contains(value);
    if (this.right) this.right.contains(value);

    return false;
  }
}

// let myBT = new BinaryTree(1);
// let leftChild = myBT.insertChild(2);
// leftChild.insertChild(3);
// myBT.insertChild(4);

// console.log(myBT);

// console.log(myBT.inOrderTraversal());
// console.log(myBT.preOrderTraversal());
// console.log(myBT.postOrderTraversal());