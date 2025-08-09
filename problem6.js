/*Write a function that takes a string as an argument. The function should count and return the number of vowels in the string.

For this problem, consider the vowels to be a, e, i, o, and u (case-insensitive).

For example, if the input is "Hello World", the function should return 3.*/

function numberOfVowels(str) {
  let lowerCaseStr = str.toLowerCase();
  let num = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i <= lowerCaseStr.length - 1; i++) {
    if (vowels.includes(lowerCaseStr[i])) {
      num += 1;
    }
  }

  return num;
}

console.log(numberOfVowels("Hello everyone my name is nayan islam"));
