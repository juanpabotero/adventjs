function sumPairs(numbers: number[], result: number) {
  let par: number[] = [];
  const numbers2 = [...numbers];

  for (let i = 0; i < numbers.length; i++) {
    const num1 = numbers[i];
    for (let j = i + 1; j < numbers2.length; j++) {
      const num2 = numbers[j];
      if (num1 + num2 === result) {
        par.push(num1, num2);
        return par;
      }
    }
  }
  return null;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
