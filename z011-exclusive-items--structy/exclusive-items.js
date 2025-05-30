// exclusive items
// Write a function, exclusiveItems, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in either array but not both arrays.

// You may assume that each input array does not contain duplicate elements.

const exclusiveItems = (a, b) => {
  // todo
  const aSet = new Set(a);
  const bSet = new Set(b);

  const resultArr = [];

  for (const item of b) {
    if (!aSet.has(item)) {
      resultArr.push(item);
    }
  }

  for (const item of a) {
    if (!bSet.has(item)) {
      resultArr.push(item);
    }
  }

  return resultArr;
};

// Time O(N)
// Space O(N)

console.log(exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10]));
