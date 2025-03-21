// intersection with dupes
// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.

const intersectionWithDupes = (a, b) => {
  const hashMap = {};
  const resultArr = [];

  for (const letter of a) {
    if (!hashMap[letter]) {
      hashMap[letter] = 0;
    }
    hashMap[letter] += 1;
  }

  for (const letter of b) {
    if (hashMap[letter]) {
      hashMap[letter] -= 1;
      resultArr.push(letter);
    }
  }

  return resultArr;
};

// n = length of array a
// m = length of array b
// Time: O(n+m)
// Space: O(n+m)

console.log(intersectionWithDupes(["a", "b", "c", "b"], ["x", "y", "b", "b"]));
// -> ["b", "b"]
