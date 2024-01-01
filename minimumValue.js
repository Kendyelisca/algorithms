const arr = [1, 2, 5, 9, 4, 2, 1];

function minNum() {
  let min = Infinity;

  for (const arrs of arr) {
    min = Math.min(min, arrs);
  }

  return min;
}

const minimumValue = minNum(arr);
console.log("The minimum value is:", minimumValue);
