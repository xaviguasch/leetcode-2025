// tree includes
// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeIncludes = (root, target) => {
  // ITERATIVE DEPTH FIRST
  //   if (root === null) return false;
  //   const stack = [root];
  //   while (stack.length > 0) {
  //     const currentNode = stack.pop();
  //     if (currentNode.val === target) {
  //       return true;
  //     }
  //     if (currentNode.right !== null) stack.push(currentNode.right);
  //     if (currentNode.left !== null) stack.push(currentNode.left);
  //   }
  //   return false;
  // Time: O(N)
  // Space: O(N)
  // ITERATIVE BREADTH FIRST
  //   if (root === null) return false;
  //   const queue = [root];
  //   while (queue.length > 0) {
  //     const currentNode = queue.shift();
  //     if (currentNode.val === target) return true;
  //     if (currentNode.left !== null) queue.push(currentNode.left);
  //     if (currentNode.right !== null) queue.push(currentNode.right);
  //   }
  //   return false;
  // Time: O(N)
  // Space: O(N)

  // RECURSIVE DEPTH FIRST
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);

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

console.log(treeIncludes(a, "e")); // -> true
