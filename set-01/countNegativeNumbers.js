/**
 * A function that returns the number of negative numbers in an array
 * @param {number[]} nums - array of numbers
 * @returns {number} count of negative numbers in an array
 */
function countNegativeNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count++;
    }
  }

  return count;
}

let nums = [2, -9, -17, 0, 1, -10, -4, 8];
const result = countNegativeNumbers(nums);
console.log(result);
