function maxProfit(prices: number[]) {
  let difference;
  let profit = -1;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if(prices[j] <= prices[i]) {
        continue
      } else {
        difference = prices[j] - prices[i]
        profit = difference > profit ? difference : profit
      }
    }
  }
  return profit
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(maxProfit(pricesDoge)) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda)) // -> -1 (no hay ganancia posible)