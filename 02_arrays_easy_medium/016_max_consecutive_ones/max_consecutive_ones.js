/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxStreek = 0;
  let streek = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      streek++;
      if (streek > maxStreek) {
        maxStreek = streek;
      }
    } else {
      streek = 0;
    }
  }

  return maxStreek;
};

let nums = [1, 1, 0, 1, 1, 1];
let output = findMaxConsecutiveOnes(nums);
console.log("Output:", output);
