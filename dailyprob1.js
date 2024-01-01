function hasPairWithSum(nums, k) {
  const seenNumbers = new Set();

  for (let num of nums) {
    const complement = k - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }
  return false;
}
const numbers = [10, 15, 3, 7];
const k = 9;
const result = hasPairWithSum(numbers, k);
console.log(result);
