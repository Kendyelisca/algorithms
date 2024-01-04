function firstNonRepeatedChar(str) {
  // Initialize an object to store character counts
  const charCount = {};

  // Iterate through the string to count each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  return null; // All characters are repeated
}

// Example usage:
const result = firstNonRepeatedChar("abacabad");
console.log(result); // Should output "c"
