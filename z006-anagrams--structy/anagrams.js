// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
  // todo
  const hashMap = {};

  for (let char of s1) {
    if (!hashMap[char]) {
      hashMap[char] = 0;
    }

    hashMap[char] += 1;
  }

  for (let char of s2) {
    if (hashMap[char]) {
      hashMap[char] -= 1;
    } else {
      return false;
    }
  }

  for (char in hashMap) {
    if (hashMap[char] !== 0) {
      return false;
    }
  }

  return true;
};

// Time = O(n + m)
// Space = O(n)

console.log(anagrams("restful", "fluster"));
