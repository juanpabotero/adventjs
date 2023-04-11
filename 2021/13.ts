export default function wrapGifts(gifts: string[]) {
  if (gifts.length === 0) [];
  gifts.unshift("*".repeat(gifts[0].length));
  gifts.push("*".repeat(gifts[0].length));
  return gifts.map((gift) => {
    return (gift = `*${gift}*`);
  });
}
