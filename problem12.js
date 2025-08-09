/*Write a function that takes a string and returns the character that appears most frequently in the string.

For this problem, you can ignore case and spaces.

Examples:

mostFrequentChar("hello world") should return "l".

mostFrequentChar("aabbc") should return "a".

mostFrequentChar("bbbaaaac") should return "a" (if there's a tie, you can return either).*/

function mostFrequentChar(str) {
  let cleanStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let characterCount = {};
  let highestCount = 0;
  let mostFrequentChar = "";
  for (let i = 0; i <= cleanStr.length - 1; i++) {
    if (characterCount[cleanStr[i]] === undefined) {
      characterCount[cleanStr[i]] = 1;
    } else {
      characterCount[cleanStr[i]]++;
    }
  }

  for (let key in characterCount) {
    if (characterCount[key] > highestCount) {
      highestCount = characterCount[key];
      mostFrequentChar = key;
    }
  }

  return mostFrequentChar;
}

console.log(mostFrequentChar("Hello World"));
