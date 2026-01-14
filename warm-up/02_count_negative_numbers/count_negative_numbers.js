function countNegativeNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      count++;
    }
  }

  return count;
}

let nums = [1, 2, -4, 0, -3, 9, -1];
let output = countNegativeNumbers(nums);
console.log("Output:", output);
