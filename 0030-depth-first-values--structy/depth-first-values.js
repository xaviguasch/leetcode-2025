class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// ITERATIVE
// const depthFirstValues = (root) => {
//   // todo
//   if (root === null) {
//     return [];
//   }
//   const stack = [root];
//   const resultArr = [];

//   while (stack.length !== 0) {
//     const currentNode = stack.pop();

//     resultArr.push(currentNode.val);

//     if (currentNode.right !== null) {
//       stack.push(currentNode.right);
//     }
//     if (currentNode.left !== null) {
//       stack.push(currentNode.left);
//     }
//   }

//   return resultArr;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

// RECURSIVE
const depthFirstValues = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

// n = number of nodes
// Time: O(n^2)
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
console.log(depthFirstValues(a));

//    -> ['a', 'b', 'd', 'e', 'c', 'f']
