/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }

  console.log(nums);
  return x;
}

let nums = [3, 2, 2, 3];
let val = 3;
let output = removeElement(nums, val);
console.log("Output:", output);
