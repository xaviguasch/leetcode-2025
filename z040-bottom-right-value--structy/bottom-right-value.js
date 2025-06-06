// bottom right value
// Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

// You may assume that the input tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bottomRightValue = (root) => {
  // ITERATIVE BREADTH FIRST
  const queue = [root];

  let currentNode = null;
  while (queue.length > 0) {
    currentNode = queue.shift();

    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
  }

  return currentNode.val;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1

console.log(bottomRightValue(a)); // -> 1
