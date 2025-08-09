/*Write a function that takes a string of words and returns the longest word in the string.

For this problem, you can assume words are separated by a single space and there is no punctuation.

Examples:

findLongestWord("The quick brown fox jumped over the moon") should return "jumped".

findLongestWord("JavaScript is a powerful language") should return "JavaScript". */

function findLongestWord(str) {
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, " ");
  let myArrayOfWordsFromTheStr = cleanedStr.split(" ");
  let longestWord = myArrayOfWordsFromTheStr[0];

  for (let i = 0; i <= myArrayOfWordsFromTheStr.length - 1; i++) {
    if (longestWord.length < myArrayOfWordsFromTheStr[i].length) {
      longestWord = myArrayOfWordsFromTheStr[i];
    }
  }

  return longestWord;
}

console.log(
  findLongestWord("My name is Nayan Islam, what is your father's name?")
);
