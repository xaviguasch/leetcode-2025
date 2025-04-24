// all unique
// Write a function, allUnique, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items.

const allUnique = (items) => {
  // using sets
  // const uniqueItems = new Set(items);
  // return uniqueItems.size === items.length;

  const hashMap = {};

  for (const item of items) {
    if (item in hashMap) {
      return false;
    }

    hashMap[item] += 1;
  }

  return true;
};

// Time: O(N)
// Space: O(N)

console.log(allUnique(["q", "r", "s", "a"]));
