function getRow(rowIndex) {
  if (rowIndex === 0) {
    return [1]; // Special case: the first row is always [1]
  }

  let prevRow = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const newRow = [1]; // Initialize with the first element, which is always 1

    for (let j = 1; j < i; j++) {
      const newElement = prevRow[j - 1] + prevRow[j];
      newRow.push(newElement);
    }

    newRow.push(1); // The last element is always 1
    prevRow = newRow; // Update the previous row for the next iteration
  }

  return prevRow;
}

const rowIndex = 5;
const pascalsRow = getRow(rowIndex);
console.log(pascalsRow);
