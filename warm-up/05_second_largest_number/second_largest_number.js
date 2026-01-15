function secondLargest(nums) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      second = largest;
      largest = nums[i];
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }

  return second;
}

let nums = [1, 8, 2, 9, 7, 0, 3];
let output = secondLargest(nums);
console.log("Output:", output);
