/*Write a function that takes an array of numbers and a target number. The function should return true if any two numbers in the array add up to the target, and false otherwise.

This time, solve it in a single loop, without using nested loops.

Examples:

findSumPairFast([1, 2, 3, 4, 5], 9) should return true.

findSumPairFast([1, 2, 3, 4, 5], 10) should return false.*/
function findSumPairFast(arr, targetNum) {
  const seenNum = new Set(); //here i have declared an empty set called seenNum

  //now, here I'm running a for ... of loop through the array in my argument
  for (const currentNum of arr) {
    const complement = targetNum - currentNum; //here i have a new variable called complement which will be targetNum minus currentNum (let's say if the targetNum is 9 and the current num is 3 then the complement will be 6) (this comment will be continued from the next block of code)

    //so in this if block we will check if the seenNum set has the complement (6 from the previous example) as our set is empty till now so it will not return true instead it will add the currentNum to the set and check the next currentNum, calculate the next complement and check if it is included in the set already if not then it will add the currentNum in the set and will repeat the process again
    if (seenNum.has(complement)) {
      return true;
    }

    seenNum.add(currentNum);
  }
  //if the for ... of loop ends without finding a single complement then the return false line of code will be executed
  return false;
}
