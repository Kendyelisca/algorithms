function findSmallest(arr) {
  let smallest = arr[0]; // Stores the smallest value
  let smallestIndex = 0; // Stores the index of the smallest value

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = findSmallest(arr);
    newArr.push(arr.splice(smallestIndex, 1)[0]);
  }

  return newArr;
}

console.log(selectionSort([5, 6, 2, 1, 1, 2]));
