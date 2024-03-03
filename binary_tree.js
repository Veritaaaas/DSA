class Queue {
  constructor() {
     this.queue = [];
  }
 
  enqueue(item) {
     this.queue.push(item);
  }
 
  dequeue() {
     return this.queue.shift();
  }
 
  isEmpty() {
     return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null; 
    }
    return this.queue[0];
 }

 }

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
      array = array.sort((a, b) => a - b);
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

  delete(value) {

    this.root = this.delete_traverse(this.root, value);
  }

  delete_traverse(node, value) {

    if (value === node.data)
    {
      if (!node.left)
      {
        node = node.right;
        return node;
      }
      else if (!node.right)
      {
        node = node.left;
        return node;
      }
      else
      {
        let smallestNode = node.right;
        while (smallestNode.left) {
            smallestNode = smallestNode.left;
        }

        node.data = smallestNode.data;
        node.right = this.delete_traverse(node.right, smallestNode.data);
        return node;
      }
    }

    if (value < node.data)
    {
      node.left = this.delete_traverse(node.left, value)
    }
    else if (value > node.data)
    {
      node.right = this.delete_traverse(node.right, value)
    }

    return node;
  }

  find(value)
  {
    let node = this.root;

    while (node) {
      if (value === node.data) 
      {
          return node;
      } 
      else if (value < node.data) 
      {
          node = node.left;
      } 
      else 
      {
          node = node.right;
      }
    }
    return null;
  }

  callback(invokeCallback) {
    let q = new Queue();
    let values = []; 

    if (!this.root) return null;

    q.enqueue(this.root);

    while(!q.isEmpty())
    {
      let node = q.peek();
      if (invokeCallback != null)
      {
        invokeCallback(node.data);
      }
      else {
        values.push(node.data);
      }

      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
      q.dequeue();
    }

    return values;
  }

  callbackRecursion(invokeCallback) {
      let q = new Queue();
      let values = new Queue();
      q.enqueue(this.root);
      while (!q.isEmpty()) {
          this.callbackRecursive(invokeCallback, q, values);
      }
      return values;
  }

  callbackRecursive(invokeCallback, q, values) {
      if (q.isEmpty()) return;

      let node = q.dequeue();

      if (invokeCallback != null) {
          invokeCallback(node.data);
      } else {
          values.enqueue(node.data);
      }

      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
  }

  preOrder(callback) {
    let values = [];
    let node = this.root;
    this.preOrderTraversal(callback, values, node)
    return values;
  }

  preOrderTraversal(callback, values, node) {
    if (callback) callback(node.data)
    else values.push(node.data)

    if (node.left) this.preOrderTraversal(callback, values, node.left);
    if (node.right) this.preOrderTraversal(callback, values, node.right);

  }

  inOrder(callback) {
    let values = [];
    let node = this.root;
    this.inOrderTraversal(callback, values, node)
    return values;
  }

  inOrderTraversal(callback, values, node) {
    if (node.left) this.inOrderTraversal(callback, values, node.left);

    if (callback) callback(node.data)
    else values.push(node.data)

    if (node.right) this.inOrderTraversal(callback, values, node.right);

  }

  postOrder(callback) {
    let values = [];
    let node = this.root;
    this.postOrderTraversal(callback, values, node)
    return values;
  }

  postOrderTraversal(callback, values, node) {
    if (node.left) this.postOrderTraversal(callback, values, node.left);
    if (node.right) this.postOrderTraversal(callback, values, node.right);

    if (callback) callback(node.data)
    else values.push(node.data)
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

let sampleArray = [10, 20, 30, 40, 50, 180, 1, 3, 4];
let sampleTree = new tree(sampleArray);

console.log(sampleTree.postOrder());

prettyPrint(sampleTree.root);