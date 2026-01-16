function countDigits(num) {
  // converting negative to positive
  num = Math.abs(num);
  let count = 0;

  // handling if number is 0
  if (num === 0) {
    return 1;
  }

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

let num = -123;
let output = countDigits(num);
console.log("Output:", output);
