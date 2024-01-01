function quicksort(array) {
  if (array.length < 2) {
    return array; // Base case: arrays with 0 or 1 element are already "sorted."
  } else {
    const pivot = array[0]; // Recursive case

    const less = array.slice(1).filter((i) => i <= pivot); // Sub-array of all elements less than or equal to the pivot
    const greater = array.slice(1).filter((i) => i > pivot); // Sub-array of all elements greater than the pivot

    return quicksort(less).concat([pivot], quicksort(greater));
  }
}

// Example usage:
console.log(quicksort([10, 5, 2, 3])); // Outputs: [2, 3, 5, 10]
