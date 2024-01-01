function linear_search(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return null; // Move this outside of the loop
}

function verify(index) {
  if (index !== null) {
    console.log("Target found at index:", index);
  } else {
    console.log("Target not found in list");
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = linear_search(numbers, 6);
verify(result);

result = linear_search(numbers, 12);
verify(result);
