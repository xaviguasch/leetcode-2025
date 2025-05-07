// tree sum
// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeSum = (root) => {
  // ITERATIVE DEPTH FIRST

  //   if (root === null) {
  //     return 0;
  //   }

  //   const stack = [root];
  //   let sum = 0;

  //   while (stack.length > 0) {
  //     const current = stack.pop();

  //     sum += current.val;

  //     if (current.right !== null) {
  //       stack.push(current.right);
  //     }

  //     if (current.left !== null) {
  //       stack.push(current.left);
  //     }
  //   }

  //   return sum;

  // Time: O(N)
  // Space: O(N)

  // ITERATIVE BREADTH FIRST
  if (root === null) {
    return 0;
  }

  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    sum += currentNode.val;

    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
  }

  return sum;

  // Time: O(N)
  // Space: O(N)
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

console.log(treeSum(a)); // -> 21
