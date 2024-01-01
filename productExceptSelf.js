function productExceptSelf(nums) {
  //add an edge for empty or arrays with on element
  const n = nums.length;
  if (n <= 1) {
    return [];
  }
  // SecArray is initialized as our second Array
  const result = new Array(n).fill(1);

  // store the product of the integers in the previous array.
  let productIntegers = 1;
  for (let i = 0; i < n; i++) {
    productIntegers *= nums[i];
  }

  // divide the productintegers by the current element to get the result for that index.

  for (let i = 0; i < n; i++) {
    result[i] = productIntegers / nums[i];
  }
  return result;
}

//add an edge case for empty or arrays with on element
// SecArray is initialized as our second Array
// store the product of the integers in the previous.
// divide the productintegers by the current element to get the result for that index.

// Test cases
const input1 = [1, 2];
const output1 = productExceptSelf(input1);
console.log(output1);
