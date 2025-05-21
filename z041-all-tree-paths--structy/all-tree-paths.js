// all tree paths
// Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

// The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

// You may assume that the input tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = (root) => {
  const paths = _allTreePaths(root);
  for (let path of paths) {
    path.reverse();
  }
  return paths;
};

const _allTreePaths = (root) => {
  if (root === null) {
    return [];
  }

  if (root.left === null && root.right === null) {
    return [[root.val]];
  }

  const allPaths = [];

  const leftSubPaths = _allTreePaths(root.left);
  for (let path of leftSubPaths) {
    path.push(root.val);
    allPaths.push(path);
  }

  const rightSubPaths = _allTreePaths(root.right);
  for (let path of rightSubPaths) {
    path.push(root.val);
    allPaths.push(path);
  }

  return allPaths;
};

// n = number of nodes
// Time: O( n*log(n) )
// Space: O( n*log(n) )

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

console.log(allTreePaths(a)); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
