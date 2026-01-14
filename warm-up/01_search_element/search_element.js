function searchElement(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

let nums = [2, 7, 11, 15];
let output = searchElement(nums, 2);
console.log("Output:", output);
