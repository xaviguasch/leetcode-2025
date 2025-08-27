// intersection with dupes
// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.

const intersectionWithDupes = (a, b) => {
  const hashMapA = {};
  const hashMapB = {};

  const resultArr = [];

  for (const el of a) {
    if (!hashMapA[el]) {
      hashMapA[el] = 0;
    }

    hashMapA[el] += 1;
  }

  for (const el of b) {
    if (!hashMapB[el]) {
      hashMapB[el] = 0;
    }

    hashMapB[el] += 1;
  }

  for (const el in hashMapA) {
    if (hashMapB[el]) {
      const min = Math.min(hashMapA[el], hashMapB[el]);

      for (let i = 0; i < min; i++) {
        resultArr.push(el);
      }
    }
  }

  return resultArr;
};

// Time: O(N)
// Space: O(N)

console.log(intersectionWithDupes(["a", "b", "c", "b"], ["x", "y", "b", "b"]));

// -> ["b", "b"]
