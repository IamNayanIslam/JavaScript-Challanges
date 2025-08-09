/*Write a function that takes an array of numbers and a target number. The function should return true if any two numbers in the array add up to the target, and false otherwise.

You can assume the array will not contain duplicate numbers.

Examples:

findSumPair([1, 2, 3, 4, 5], 9) should return true (because 4 + 5 = 9).

findSumPair([1, 2, 3, 4, 5], 10) should return false.

findSumPair([1, 8, 3, 9, 2], 10) should return true (because 1 + 9 = 10).*/

function findSumPair(arr, targetNum) {
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === targetNum) {
        return true;
      }
    }
  }

  return false;
}

console.log(findSumPair([1, 2, 3, 4], 7));
