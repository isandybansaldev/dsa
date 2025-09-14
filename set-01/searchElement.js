/**
 * A function that searches for an element in an array and returns the index, if the element is not present then just return -1
 * @param {number[]} nums - array of number
 * @param {number} x - target element
 * @returns {number} index of target element or -1
 */
function searchElement(nums, x) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      return i;
    }
  }

  return -1;
}

const nums = [4, 10, 3, 7, 5, 9, 0];
const result = searchElement(nums, 3);
console.log(result);
