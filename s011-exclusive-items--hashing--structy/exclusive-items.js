// exclusive items
// Write a function, exclusiveItems, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in either array but not both arrays.

// You may assume that each input array does not contain duplicate elements.

const exclusiveItems = (a, b) => {
  /  / / todo;
  const hashMap = {};

  const resultArr = [];

  for (const num of a) {
    hashMap[num] = 1;
  }

  for (const num of b) {
    if (!hashMap[num]) {
      hashMap[num] = 0;
    }
    hashMap[num] += 1;
  }

  for (const num in hashMap) {
    if (hashMap[num] === 1) {
      resultArr.push(Number(num));
    }
  }

  return resultArr;
};

console.log(exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10])); // // -> [4,1,3,9,10]
