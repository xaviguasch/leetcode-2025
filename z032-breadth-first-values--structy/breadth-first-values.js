// breadth first values
// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
  // ITERATIVE
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.val);

    if (node.left !== null) queue.push(node.left);

    if (node.right !== null) queue.push(node.right);
  }

  return values;

  //   n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(breadthFirstValues(a));

//    -> ['a', 'b', 'c', 'd', 'e', 'f']
