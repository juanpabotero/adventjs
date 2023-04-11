export default function missingReindeer(ids: number[]) {
  let missingNumber;
  ids.sort((a, b) => a - b)
    .some((value, index) => {
      if (value !== index) {
        return missingNumber = index;
      }
      missingNumber = index + 1;
      return value !== index;
    });
  return missingNumber;
}
