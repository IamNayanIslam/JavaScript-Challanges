/* 
    Write a function that takes two strings, str1 and str2, and determines if they are anagrams of each other. The function should return true if they are, and false otherwise.

    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase. For this problem, you should ignore case and spaces.

    Examples:

    areAnagrams("listen", "silent") should return true.

    areAnagrams("The quick brown fox", "fox brown quick the") should return true.

    areAnagrams("hello", "world") should return false.

    areAnagrams("Dormitory", "dirty room") should return true.
*/

function areAnagrams(string1, string2) {
  let cleanedString1 = string1.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let cleanedString2 = string2.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  if (cleanedString1.length !== cleanedString2.length) {
    return false;
  }

  let charCount = {};
  for (let i = 0; i <= cleanedString1.length - 1; i++) {
    if (charCount[cleanedString1[i]] === undefined) {
      charCount[cleanedString1[i]] = 1;
    } else {
      charCount[cleanedString1[i]]++;
    }
  }

  for (let i = 0; i <= cleanedString2.length - 1; i++) {
    if (charCount[cleanedString2[i]] === undefined) {
      return false;
    } else if (!charCount[cleanedString2[i]]) {
      return false;
    } else {
      charCount[cleanedString2[i]]--;
    }
  }

  return true;
}

console.log(areAnagrams("my name is Nayan", "Nayan is my name"));
console.log(areAnagrams("my name is Nayan", "Nayan Islam is my name"));
