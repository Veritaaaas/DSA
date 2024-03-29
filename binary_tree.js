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
  
  depth(node) {
    let root = this.root;
    let depth = 1;

    while (node) {
      if (node.data === root.data) 
      {
          return depth;
      } 
      else if (node.data < root.data) 
      {
          root = root.left;
      } 
      else 
      {
          root = root.right;
      }
      depth++;
    }

    return height;
  }

  height(node) {
    if (node === null)
    {
      return 0;
    }

    let lHeight = this.height(node.left);
    let rHeight = this.height(node.right);

    if (lHeight > rHeight) return (1 + lHeight);
    else return (1 + rHeight);
  }

  isBalanced() {
    let q = new Queue();

    if (!this.root) return null;

    q.enqueue(this.root);

    while(!q.isEmpty())
    {
      let node = q.peek();
      
      let lHeight = this.height(node.left);
      let rHeight = this.height(node.right);

      if (Math.abs(lHeight - rHeight) <= 1) 
      {
        if (node.left) q.enqueue(node.left);
        if (node.right) q.enqueue(node.right);
        q.dequeue();
      }
      else return false;
    }
    return true;
  }

  rebalance() {
    let values = this.preOrder();

    this.root = this.buildtree(values);
  }
}

//generates random numbers to populate the array
function createRandomNumbers(n) {
  let values = []

  for (let i = 0; i < n; i ++)
  {
    values.push(Math.floor(Math.random() * 100) + 1);
  }

  return values;
}

//creates a new tree 
let Tree = new tree(createRandomNumbers(30));

//checks if it is balanced
console.log(Tree.isBalanced());

//prints out the element in level, pre, post and in order
console.log(Tree.callback());
console.log(Tree.preOrder());
console.log(Tree.postOrder());
console.log(Tree.inOrder());

//inserting values to the tree
let values = createRandomNumbers(20);

for (let i = 0; i < values.length; i++)
{
  Tree.insert(values[i]);
}

//confirming that the tree is balanced, if not, balanced it
console.log(Tree.isBalanced());
Tree.rebalance();
console.log(Tree.isBalanced());

//prints out the element in level, pre, post and in order
console.log(Tree.callback());
console.log(Tree.preOrder());
console.log(Tree.postOrder());
console.log(Tree.inOrder());
