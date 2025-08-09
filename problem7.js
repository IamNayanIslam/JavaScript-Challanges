/*Write a function that takes a string and returns true if it's a palindrome and false otherwise.

A palindrome is a word or phrase that reads the same backward as forward. For this problem, you can ignore case and non-alphanumeric characters (like spaces and punctuation).

Examples:

isPalindrome("racecar") should return true.

isPalindrome("hello") should return false.

isPalindrome("A man, a plan, a canal: Panama") should return true.*/

function isPalindrome(str) {
  let lowerCaseStr = str.toLowerCase();
  let cleanedStr = lowerCaseStr.replace(/[^A-Za-z0-9]/g, "");
  let reversedStr = "";

  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
  }

  return reversedStr === cleanedStr;
}

// console.log(isPalindrome("Hiya"));
// console.log(isPalindrome("nayan"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
