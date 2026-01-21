/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      nums[x + 1] = nums[i];
      x++;
    }
  }

  console.log(nums);
  return x + 1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let output = removeDuplicates(nums);
console.log("Output", output);
