var containsNearbyDuplicate = function (nums, k) {
  const n = nums.length;
  if (n <= 1) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};

const nums1 = [1, 2, 3, 1];
const k1 = 3;
const result = containsNearbyDuplicate(nums1, k1);
console.log(result);
