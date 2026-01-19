function reverseInteger(x) {
  let xCopy = x;
  x = Math.abs(x);
  let reverse = 0;

  while (x > 0) {
    let lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  if (reverse < -limit || reverse > limit - 1) return 0;

  return xCopy < 0 ? -reverse : reverse;
}

let x = 1534236469;
let output = reverseInteger(x);
console.log("Output:", output);
