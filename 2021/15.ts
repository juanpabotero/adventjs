export default function checkSledJump(heights: number[]) {
  let isValidUp = false;
  let isValidDown = false;
  let areEqual = false;
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === heights[i - 1]) {
      areEqual = true;
    }
    if (heights[i] > max) {
      max = heights[i];
      isValidUp = heights[i] > heights[i - 1] ? true : false;
    } else {
      isValidDown = heights[i] < heights[i - 1] ? true : false;
    }
  }

  return isValidUp && isValidDown && !areEqual;
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
