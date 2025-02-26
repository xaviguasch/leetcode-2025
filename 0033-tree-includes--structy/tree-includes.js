// tree includes
// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE BREADTH FIRST
// const treeIncludes = (root, target) => {
//   if (root === null) {
//     return false;
//   }

//   const queue = [root];

//   while (queue.length !== 0) {
//     const currentNode = queue.shift();

//     if (currentNode.val === target) {
//       return true;
//     }

//     if (currentNode.left !== null) {
//       queue.push(currentNode.left);
//     }
//     if (currentNode.right !== null) {
//       queue.push(currentNode.right);
//     }
//   }

//   // if value not found
//   return false;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.

// ITERATIVE DEPTH FIRST
const treeIncludes = (root, target) => {
  if (root === null) {
    return false;
  }

  const stack = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (currentNode.val === target) {
      return true;
    }

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }

  // if value not found
  return false;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

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

console.log(treeIncludes(a, "e")); // -> true
