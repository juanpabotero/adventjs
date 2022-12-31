export default function getMinJump(obstacles: number[]) {
  obstacles.sort((a, b) => a - b);
  let minJump;
  let isIncluded = false;
  for (let i = 1; i <= obstacles[obstacles.length - 1]; i++) {
    isIncluded = false;
    for (let j = i; j <= obstacles[obstacles.length - 1]; j = j + i) {
      if(obstacles.includes(j)) {
        isIncluded = true;
        break;
      }
    }
    if (isIncluded) {
      continue
    } else {
      minJump = i > minJump ? minJump : i 
    }
  }
  return minJump;
}

const obstacles = [14, 10, 8, 2, 3, 6];
console.log(getMinJump(obstacles)); // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
