/**
 * Function that returns the largest number in an array
 * @param {number[]} nums - array of numbers
 * @returns {number} largest number in an array
 */
function findLargestNumber(nums) {
  // Set the largest number to -Infinity b/c every number will be greater than -Infinity
  let largest = -Infinity; // Or first element of an array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  return largest;
}

const nums = [5, 0, 10, 8, 17, 1];
const result = findLargestNumber(nums);
console.log(result);
