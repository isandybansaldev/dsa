function findLargestNumber(nums) {
  let largestNum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
      largestNum = nums[i];
    }
  }

  return largestNum;
}

let nums = [-3, -2, -8, -9, -7, -1];
let output = findLargestNumber(nums);
console.log("Output:", output);
