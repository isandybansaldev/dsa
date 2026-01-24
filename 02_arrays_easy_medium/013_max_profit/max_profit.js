/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - min;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (prices[i] < min) min = prices[i];
  }

  return maxProfit > 0 ? maxProfit : 0;
}

let prices = [7, 6, 4, 3, 1];
let output = maxProfit(prices);
console.log("Output:", output);
