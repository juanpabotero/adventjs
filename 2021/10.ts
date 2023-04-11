export default function getCoins(change: number) {
  let remainder: any = null;
  const INITIAL_VALUE = [0, 0, 0, 0, 0, 0];
  const CENTS = [50, 20, 10, 5, 2, 1];

  return CENTS.reduce((result, currentValue, currentIndex) => {
    if (remainder === null) remainder = change;

    if (remainder >= currentValue) {
      result[currentIndex] = Math.floor(remainder / currentValue);
      remainder = remainder % currentValue;
    }
    return result;
  }, INITIAL_VALUE).reverse();
}

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

// coins[0] = 1 céntimo
// coins[1] = 2 céntimos
// coins[2] = 5 céntimos
// coins[3] = 10 céntimos
// coins[4] = 20 céntimos
// coins[5] = 50 céntimos
