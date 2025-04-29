// palindrome recursive
// Write a function, palindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.

// You must solve this recursively.

const palindrome = (s) => {
  // todo
  if (s.length === 0) {
    return true;
  }

  if (s[0] === s[s.length - 1]) {
    return palindrome(s.slice(1, s.length - 1));
  } else {
    return false;
  }
};

// Time: O(n^2)
// Space: O(n^2)

console.log(palindrome("kayak"));
