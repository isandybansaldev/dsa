/**
 * Function that returns the second largest number
 * @param {number[]} nums - array of number
 * @returns {number} second largest number
 */
function findSecondLargestNumber(nums) {
  // Array should have atleast 2 elements
  if (nums.length < 2) {
    return -Infinity;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}

const nums = [5, 8, 3, 2, 7, 10, 9];
const result = findSecondLargestNumber(nums);
console.log(result);
