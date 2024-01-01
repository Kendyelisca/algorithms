function merge_sort(list) {
  //sorts a list in ascending order
  // returns a new sorted list
  //Divide: find the midpoint of the list and divide into sublists
  //Conquer: Recursively sort the sublists created in previous step
  //Combine: Merge the sorted sublists created in previous step

  if (list.length <= 1) {
    return list;
  }

  // Find the middle index of the list
  const middleIndex = Math.floor(list.length / 2);

  // Divide the list into two sublists
  const leftHalf = list.slice(0, middleIndex);
  const rightHalf = list.slice(middleIndex);

  // Recursively sort the sublists
  const sortedLeft = merge_sort(leftHalf);
  const sortedRight = merge_sort(rightHalf);

  // Combine (merge) the sorted sublists
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both sublists and merge them in ascending order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from both sublists
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const unsortedList = [4, 2, 2, 7, 1, 9, 5, 3];
const sortedList = merge_sort(unsortedList);
console.log(sortedList);
