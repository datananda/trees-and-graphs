class Tree {
    constructor(value) {
      this.value = value;
      this.children = [];
    }

    insertChild(value) {
        const child = new Tree(value);
        this.children.push(child);
        return child;
    }

    removeChild(value) {
        let indexToRemove;
        let childToRemove;

        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].value === value) {
                indexToRemove = i;
                childToRemove = this.children[i];
                break;
            }
        }
        
        if (indexToRemove) this.children.splice(indexToRemove);

        return childToRemove;
    }
  
    // Uses a Depth-First Traversal
    static traverse(tree, func = console.log) {
    }
  
    contains(searchValue) {
    }
  
    static size(tree) {
    }
  
    static find(tree, value) {
    }
  
    insert(parentTree, value) {
    }
  
    remove(value) {
    }
  
    reorder(node1, node2) {
    }
  }
  
  export default Tree;