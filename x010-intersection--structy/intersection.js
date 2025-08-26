// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
  // todo
  //   const hashMap = {}

  //   const resultArr = []

  //   for (const num of a) {
  //     hashMap[num] = 1
  //   }

  //   for (const num of b) {
  //     if (num in hashMap) {
  //       resultArr.push(num)
  //     }
  //   }

  //   return resultArr

  const resultArr = [];

  const setA = new Set(a);

  for (let item of b) {
    if (setA.has(item)) {
      resultArr.push(item);
    }
  }

  return resultArr;
};

// n = length of array a, m = length of array b
// Time: O(n+m)
// Space: O(n)

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
