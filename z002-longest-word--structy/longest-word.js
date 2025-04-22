// longest word
// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.

const longestWord = (sentence) => {
  const newArr = sentence.split(" ");

  let longestW = "";

  for (let word of newArr) {
    if (word.length >= longestW.length) {
      longestW = word;
    }
  }

  return longestW;
};

// n = length of array
// Time: O(n)
// Space: O(n)

console.log(longestWord("what a wonderful world"));
