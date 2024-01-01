const sum = (a, b) => {
  return a + b;
};

const result = sum(2, 4);
console.log(result);

//the maximum number in the array

const maxNum = (arr) => {
  if (arr.length === 0) {
    return false;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

const maxiNum = (arr) => (arr.length > 0 ? Math.max(...arr) : false);

const numbers = [3, 8, 2, 10, 5];
console.log(maxNum(numbers));
console.log(maxiNum(numbers));
