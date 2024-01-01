function recursive_binary_search(list, target) {
  if (list.length === 0) {
    return false;
  }

  let midpoint = Math.floor(list.length / 2);

  if (list[midpoint] === target) {
    return true;
  } else {
    if (list[midpoint] < target) {
      return recursive_binary_search(list.slice(midpoint + 1), target);
    } else {
      return recursive_binary_search(list.slice(0, midpoint), target);
    }
  }
}

function verify(result) {
  console.log("Target found", result);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = recursive_binary_search(numbers, 6);
verify(result);

result = recursive_binary_search(numbers, 12);
verify(result);
