export default function shouldBuyFidelity(times) {
  const TICKET_PRICE = 12;
  const priceNormalTicket = TICKET_PRICE * times;
  let priceFidelityTicket = 250;
  let multiply = 0.75;

  for (let i = 1; i <= times; i++) {
    priceFidelityTicket = priceFidelityTicket + TICKET_PRICE * multiply;
    multiply *= 0.75;
  }

  if (priceNormalTicket < priceFidelityTicket) return false;

  return true;
}

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

console.log(shouldBuyFidelity(1)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad
