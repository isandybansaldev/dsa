/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let i = 0;
  let j = s.length - 1;

  while (j > i) {
    let temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    i++;
    j--;
  }

  return s;
}

let s = ["H", "a", "n", "n", "a", "h"];
let output = reverseString(s);
console.log("Output:", output);
