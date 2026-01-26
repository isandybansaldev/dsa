/**
 * @param {number[]} nums
 * @return {number}
 */
// Using extra space
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }

  for (const element in obj) {
    if (obj[element] === 1) {
      return element;
    }
  }
};

function singleNumberUsingXor(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}

let nums = [4, 1, 2, 1, 2];
let output = singleNumberUsingXor(nums);
console.log("Output:", output);
