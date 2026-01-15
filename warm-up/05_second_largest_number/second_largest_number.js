function secondLargest(nums) {
  if (nums.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      second = largest;
      largest = nums[i];
    } else if (nums[i] > second && nums[i] !== largest) {
      second = nums[i];
    }
  }

  return second;
}

let nums = [10, 20, 8, 8, 3, 5, 20];
let output = secondLargest(nums);
console.log("Output:", output);
