// exclusive items
// Write a function, exclusiveItems, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in either array but not both arrays.

// You may assume that each input array does not contain duplicate elements.

const exclusiveItems = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);

  const resultArr = [];

  for (let item of b) {
    if (!setA.has(item)) {
      resultArr.push(item);
    }
  }

  for (let item of a) {
    if (!setB.has(item)) {
      resultArr.push(item);
    }
  }

  return resultArr;
};

// Time: O(N)
// Space: O(N)

console.log(exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [4,1,3,9,10]
