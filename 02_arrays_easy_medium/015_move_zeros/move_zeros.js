/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  while (pointer < nums.length) {
    nums[pointer] = 0;
    pointer++;
  }

  return nums;
};

let nums = [0, 1, 0, 3, 12];
let output = moveZeroes(nums);
console.log("Output:", output);
