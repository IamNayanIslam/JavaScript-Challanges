//Write a function that accepts a number as input and returns an array containing all odd integers from 1 up to (but not including) the input number.
let nums = [10, 20, 30, 40];
function addNums(arrayOfNums) {
  let sum = 0;

  for (let i = 0; i <= arrayOfNums.length - 1; i++) {
    sum += arrayOfNums[i];
  }

  return sum;
}

console.log(addNums(nums));
