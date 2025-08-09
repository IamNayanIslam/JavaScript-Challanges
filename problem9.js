/*Write a function that takes two strings, a mainString and a subString, and returns the number of times the subString appears in the mainString.

You should also make the function case-insensitive.

Examples:

countSubstring("the quick brown fox jumps over the lazy dog", "the") should return 2.

countSubstring("aBCaBC", "abc") should return 2.

countSubstring("ababab", "aba") should return 2 (note the overlapping match). */

function countSubstring(mainString, subString) {
  let mainStringLower = mainString.toLowerCase();
  let subStringLower = subString.toLowerCase();
  let subStringCount = 0;

  let subStringLength = subString.length;

  for (let i = 0; i <= mainString.length - subStringLength; i++) {
    if (mainStringLower.slice(i, subStringLength + i) === subStringLower) {
      subStringCount += 1;
    }
  }

  return subStringCount;
}

console.log(
  countSubstring("Bangladesh is the most beautiful country in the world", "the")
);
console.log(
  countSubstring("Bangladesh is most beautiful country in world", "the")
);
