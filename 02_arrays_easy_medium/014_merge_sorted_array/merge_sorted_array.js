/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function mergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let idx = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[idx] = nums1[i];
      i--;
      idx--;
    } else {
      nums1[idx] = nums2[j];
      j--;
      idx--;
    }
  }

  while (j >= 0) {
    nums1[idx] = nums2[j];
    j--;
    idx--;
  }

  return nums1;
}

let nums1 = [2, 0];
let nums2 = [1];
let m = 1;
let n = 1;
let output = mergeSortedArray(nums1, m, nums2, n);
console.log("Output:", output);
