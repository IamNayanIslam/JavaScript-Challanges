/*Write a function that takes an array of numbers and returns the number that appears only once in the array.

All other numbers in the array will appear more than once, except for one unique number that appears exactly once. The function should return this unique number.

If no unique number is found, return null (or a similar indicator).*/

function findUniqueNumber(nums) {
  let numCount = {};

  for (let i = 0; i < nums.length; i++) {
    numCount[nums[i]] = (numCount[nums[i]] || 0) + 1;
  }

  for (const num in numCount) {
    if (numCount[num] === 1) {
      return Number(num);
    }
  }

  return null;
}

let numsArray = [3, 2, 1, 1, 3, 2, 6];

console.log(findUniqueNumber(numsArray));

let test1 = findUniqueNumber([3, 2, 1, 1, 3, 2, 6]); // should return 6 (all others are repeated)

let test2 = findUniqueNumber([5, 4, 3, 4, 3, 5, 2]); // should return 2

let test3 = findUniqueNumber([7, 7, 7, 8, 7]); // should return 8

let test4 = findUniqueNumber([1, 1, 2, 2, 3, 3]); // should return null (no unique number)

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
