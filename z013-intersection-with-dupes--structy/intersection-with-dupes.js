// intersection with dupes
// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.

const intersectionWithDupes = (a, b) => {
  // todo
  const resultArr = [];

  const hashMapA = {};
  const hashMapB = {};

  for (const item of a) {
    if (!(item in hashMapA)) {
      hashMapA[item] = 0;
    }

    hashMapA[item] += 1;
  }

  for (const item of b) {
    if (!(item in hashMapB)) {
      hashMapB[item] = 0;
    }

    hashMapB[item] += 1;
  }

  for (const key in hashMapA) {
    if (key in hashMapB) {
      const min = Math.min(hashMapA[key], hashMapB[key]);

      for (let i = 0; i < min; i++) {
        resultArr.push(key);
      }
    }
  }

  return resultArr;
};

// Space: O(N)
// Time: O(N)

console.log(intersectionWithDupes(["a", "b", "c", "b"], ["x", "y", "b", "b"]));
