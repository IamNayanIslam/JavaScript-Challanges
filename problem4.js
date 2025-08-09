//Write a function that takes an array of numbers. The function should return a new array containing only the even numbers from the original array.

function arrayOfOddNums(arrayOfNums) {
  let oddNums = [];

  for (let i = 0; i <= arrayOfNums.length - 1; i++) {
    if (arrayOfNums[i] % 2 != 0) {
      oddNums.push(arrayOfNums[i]);
    }
  }

  return oddNums;
}

let nums = [1, 2, 3, 4, 5, 6];
console.log(arrayOfOddNums(nums));
