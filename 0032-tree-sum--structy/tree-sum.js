// tree sum
// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// BREADTH FIRST ITERATIVE
// const treeSum = (root) => {
//   if (root === null) {
//     return 0;
//   }

//   const queue = [root];
//   let resultSum = 0;

//   while (queue.length !== 0) {
//     const currNode = queue.shift();

//     resultSum += currNode.val;

//     if (currNode.left !== null) {
//       queue.push(currNode.left);
//     }
//     if (currNode.right !== null) {
//       queue.push(currNode.right);
//     }
//   }

//   return resultSum;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.

// DEPTH FIRST ITERATIVE
// const treeSum = (root) => {
//   if (root === null) {
//     return 0;
//   }

//   const stack = [root];
//   let resultSum = 0;

//   while (stack.length !== 0) {
//     const currNode = stack.pop();

//     resultSum += currNode.val;

//     if (currNode.right !== null) {
//       stack.push(currNode.right);
//     }

//     if (currNode.left !== null) {
//       stack.push(currNode.left);
//     }
//   }
//   return resultSum;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

// DEPTH FIRST RECURSIVE (there is BREATH FIRST RECURSIVE)
const treeSum = (root) => {
  if (root === null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};
// n = number of nodes
// Time: O(n)
// Space: O(n)

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

console.log(treeSum(a)); // -> 21
