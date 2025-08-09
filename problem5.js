//Write a function that takes an array of numbers. The function should find and return the largest number in the array.

function largestNum(arrayOfNums) {
  let largestNum = arrayOfNums[0];

  for (let i = 0; i <= arrayOfNums.length - 1; i++) {
    if (arrayOfNums[i] > largestNum) {
      largestNum = arrayOfNums[i];
    }
  }

  return largestNum;
}

console.log(largestNum([-10, -2, -3, -4, -5]));
