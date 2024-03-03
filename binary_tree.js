class nodeClass {

    constructor(data = null) {
        this.left = null;
        this.right = null;
        this.data = data;
    }

}

class tree {

    constructor(array) {

        this.root = this.buildtree(array)
    }

    buildtree(array) {
        array.sort();
        let uniqueArray = [...new Set(array)];

        if (uniqueArray.length === 0) {
            return null;
        }
        
        if (uniqueArray.length === 1) {
            return new nodeClass(uniqueArray[0]);
        }

        let mid = Math.floor(uniqueArray.length / 2);

        let node = new nodeClass(uniqueArray[mid]);
        node.left = this.buildtree(uniqueArray.slice(0, mid));
        node.right = this.buildtree(uniqueArray.slice(mid + 1, uniqueArray.length));

        return node;
    }

    insert(value) {

      this.root = this.insert_traverse(this.root, value)
    }

    insert_traverse(node, value) {

      if (node === null)
      {
        return new nodeClass(value);
      }

      if (value <= node.data)
      {
        node.left = this.insert_traverse(node.left, value)
      }

      else if (value > node.data)
      {
        node.right = this.insert_traverse(node.right, value);
      }

      return node;
    }

    
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

let sampleArray = [10, 20, 30, 40, 50];
let sampleTree = new tree(sampleArray);
sampleTree.insert(60);

prettyPrint(sampleTree.root);