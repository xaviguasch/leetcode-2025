// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  // todo
  const hashMap = {};
  let mostFreqChar = "";
  let numberMostFreq = 0;

  for (let char of s) {
    if (!(char in hashMap)) {
      hashMap[char] = 0;
    }
    hashMap[char] += 1;
  }

  for (let char in hashMap) {
    if (hashMap[char] > numberMostFreq) {
      numberMostFreq = hashMap[char];
      mostFreqChar = char;
    }
  }

  return mostFreqChar;
};

// n = length of string
// Time: O(n)
// Space: O(n)

console.log(mostFrequentChar("bookeeper")); // -> 'e'
