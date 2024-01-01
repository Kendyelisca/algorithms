const nums1 = [1, 3, 4, 5];
const nums2 = [3, 4, 6, 7];

const medianSortedArrays = (nums1, nums2) => {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);

  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};
