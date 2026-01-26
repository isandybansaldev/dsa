/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let range = nums.length;
  let totalSum = (range * (range + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] + sum;
  }

  return totalSum - sum;
};

let nums = [3, 0, 1];
let output = missingNumber(nums);
console.log("Output:", output);
