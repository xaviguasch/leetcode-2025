// longest word
// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.

const longestWord = (sentence) => {
  let lWord = "";

  const words = sentence.split(" ");

  for (let word of words) {
    if (word.length >= lWord.length) {
      lWord = word;
    }
  }

  return lWord;
};

console.log(longestWord("what a wonderful world")); // -> 'wonderful'

// n = length of sentence
// Time: O(n)
// Space: O(n)
