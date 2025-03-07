// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // write here
  const newArr = str.split("");
  const resultArr = [];

  for (let i = newArr.length - 1; i >= 0; i--) {
    resultArr.push(newArr[i]);
  }

  return resultArr.join("");
}

console.log(reverse("apple"));
console.log(reverse("hello"));
console.log(reverse("Greetings!"));
