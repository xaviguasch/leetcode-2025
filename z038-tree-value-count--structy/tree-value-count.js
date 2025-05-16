// tree value count
// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeValueCount = (root, target) => {
  // ITERATIVE DEPTH FIRST
  if (root === null) return 0;

  const stack = [root];
  let count = 0;

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (currentNode.val === target) count++;

    if (currentNode.right !== null) stack.push(currentNode.right);
    if (currentNode.left !== null) stack.push(currentNode.left);
  }

  return count;

  //   n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

console.log(treeValueCount(a, 6)); // -> 3
