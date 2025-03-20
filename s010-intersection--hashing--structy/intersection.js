// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
  const numSet = new Set(a);
  const resultArr = [];

  for (const num of b) {
    if (numSet.has(num)) {
      resultArr.push(num);
    }
  }

  return resultArr;
};

// n = length of array a, m = length of array b
// Time: O(n*m)
// Space: O(min(n,m))

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
