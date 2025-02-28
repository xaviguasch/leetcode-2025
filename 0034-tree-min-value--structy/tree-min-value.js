// tree min value
// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE BREADTH FIRST SOLUTION
// const treeMinValue = (root) => {
//   const queue = [root];

//   let minValue = +Infinity;

//   while (queue.length > 0) {
//     const currentNode = queue.shift();

//     if (currentNode.val < minValue) {
//       minValue = currentNode.val;
//     }

//     if (currentNode.left !== null) {
//       queue.push(currentNode.left);
//     }
//     if (currentNode.right !== null) queue.push(currentNode.right);
//   }

//   return minValue;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.

// ITERATIVE DEPTH FIRST SOLUTION
const treeMinValue = (root) => {
  const stack = [root];
  let minValue = +Infinity;

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (currentNode.val < minValue) {
      minValue = currentNode.val;
    }

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }

  return minValue;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeMinValue(a)); // -> -2
