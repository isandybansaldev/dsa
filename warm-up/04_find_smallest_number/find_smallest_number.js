function findSmallestNumber(nums) {
  let smallestNumber = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNumber) {
      smallestNumber = nums[i];
    }
  }

  return smallestNumber;
}

let nums = [-1, -3, -9, -2, -6];
let output = findSmallestNumber(nums);
console.log("Output:", output);
