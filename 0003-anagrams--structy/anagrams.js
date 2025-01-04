// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
  const hashMap1 = {};
  const hashMap2 = {};

  for (const char of s1) {
    if (!hashMap1[char]) {
      hashMap1[char] = 1;
    } else {
      hashMap1[char]++;
    }
  }

  for (const char of s2) {
    if (!hashMap2[char]) {
      hashMap2[char] = 1;
    } else {
      hashMap2[char]++;
    }
  }

  for (key in hashMap2) {
    if (hashMap2[key] !== hashMap1[key]) {
      return false;
    }
  }

  return true;
};

//   anagrams('restful', 'fluster'); // -> true
//   anagrams('cats', 'tocs'); // -> false
//   anagrams('monkeyswrite', 'newyorktimes'); // -> true
