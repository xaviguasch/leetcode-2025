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

const treeMinValue = (root) => {
  // ITERATIVE DEPTH FIRST
  //   const stack = [root];
  //   let minValue = root.val;
  //   while (stack.length > 0) {
  //     const currentNode = stack.pop();
  //     if (currentNode.val < minValue) {
  //       minValue = currentNode.val;
  //     }
  //     if (currentNode.right !== null) stack.push(currentNode.right);
  //     if (currentNode.left !== null) stack.push(currentNode.left);
  //   }
  //   return minValue;
  // Time: O(N)
  // Space: O(N)
  // ITERATIVE BREADTH FIRST
  //   const queue = [root];
  //   let minValue = root.val;
  //   while (queue.length > 0) {
  //     const currentNode = queue.shift();
  //     if (currentNode.val < minValue) {
  //       minValue = currentNode.val;
  //     }
  //     if (currentNode.left !== null) queue.push(currentNode.left);
  //     if (currentNode.right !== null) queue.push(currentNode.right);
  //   }
  //   return minValue;
  // Time: O(N)
  // Space: O(N)

  // RECURSIVE DEPTH FIRST
  if (root === null) return Infinity;
  const smallestLeftValue = treeMinValue(root.left);
  const smallestRightValue = treeMinValue(root.right);
  return Math.min(root.val, smallestLeftValue, smallestRightValue);

  //   n = number of nodes
  // Time: O(n)
  // Space: O(n)
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
