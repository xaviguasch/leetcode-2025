// pairs
// Write a function, pairs, that takes in an array as an argument. The function should return an array containing all unique pairs of elements.

// You may return the pairs in any order and the order of elements within a single pair does not matter.

// You can assume that the input array contains unique elements.

const pairs = (elements) => {
  // todo
  const resultArr = [];

  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      resultArr.push([elements[i], elements[j]]);
    }
  }

  return resultArr;
};

console.log(pairs(["a", "b", "c"]));
// ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["b", "c"]
// ]

// n = length of array
// Time: O(n^2)
// Space: O(n^2)
