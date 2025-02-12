// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
  // todo
  const hashMap = {};

  for (char of s1) {
    if (!hashMap[char]) {
      hashMap[char] = 0;
    }

    hashMap[char] += 1;
  }

  console.log(hashMap);

  for (char of s2) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char] -= 1;
  }

  for (char in hashMap) {
    if (hashMap[char] !== 0) {
      return false;
    }
  }

  return true;
};

// Time: O(N)
// Space: O(N)

console.log(anagrams("cats", "tocs"));

//   anagrams('restful', 'fluster'); // -> true
//   anagrams('cats', 'tocs'); // -> false
//   anagrams('monkeyswrite', 'newyorktimes'); // -> true
