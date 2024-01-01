function generatePascalsTriangle(numRows) {
  if (numRows === 0) {
    return []; // Return an empty array for numRows = 0
  }

  const result = [[1]]; // Initialize with the first row, which contains just 1

  for (let i = 1; i < numRows; i++) {
    const prevRow = result[i - 1]; // Get the previous row
    const newRow = [1]; // The first element in a row is always 1

    for (let j = 1; j < i; j++) {
      // Calculate each element in the row by adding the two elements from the previous row above it
      const newElement = prevRow[j - 1] + prevRow[j];
      newRow.push(newElement);
    }

    newRow.push(1); // The last element in a row is always 1
    result.push(newRow); // Add the newly calculated row to the result
  }

  return result; // Return the complete Pascal's Triangle as an array of arrays
}

const numRows = 30;
const pascalsTriangle = generatePascalsTriangle(numRows);
console.log(pascalsTriangle); // Print the generated Pascal's Triangle
