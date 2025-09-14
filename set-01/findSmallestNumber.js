/**
 * Function that returns the smallest number from an array
 * @param {number[]} nums - array of numbers
 * @returns {number} smallest number
 */
function findSmallestNumber(nums) {
  // Set the smallest number to Infinity b/c  every number will be smallest number than Infinity
  let smallest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }

  return smallest;
}

const nums = [5, 3, 10, 8, 17, 5];
const result = findSmallestNumber(nums);
console.log(result);
