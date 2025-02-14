// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
  const hashMap = {};

  let resultArr = [];

  for (let num of a) {
    hashMap[num] = 1;
  }

  for (let num of b) {
    if (num in hashMap) {
      hashMap[num] -= 1;
      resultArr.push(num);
    }
  }

  return resultArr;
};

// Time: O(N)
// Space: O(N)

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));
