function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const totalSum = nums[i] + nums[left] + nums[right];

      console.log(
        `Checking triplet: [${nums[i]}, ${nums[left]}, ${nums[right]}]`
      );

      if (totalSum === 0) {
        console.log("Found a triplet!");
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (totalSum < 0) {
        console.log("Moving left pointer");
        left++;
      } else {
        console.log("Moving right pointer");
        right--;
      }
    }
  }

  return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log("Input array:", nums);
console.log("Triplets with sum zero:", threeSum(nums));
