function isPalindrome(x) {
  // if x is negative number just return false
  if (x < 0) return false;

  let reverse = 0;
  let xCopy = x;

  while (x > 0) {
    let lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return reverse === xCopy;
}

let x = 121;
let output = isPalindrome(x);
console.log("Output:", output);
