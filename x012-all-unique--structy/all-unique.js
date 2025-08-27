// all unique
// Write a function, allUnique, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items.

const allUnique = (items) => {
  const set = new Set(items);

  return set.size === items.length;
};

// Time: O(N)
// Space: O(N)

console.log(allUnique(["q", "r", "s", "a"])); // -> true
