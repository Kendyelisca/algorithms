const nums1 = [1, 3, 4, 5];
const nums2 = [3, 4, 6, 7];
n = nums1.length;
m = nums2.length;
console.log(m);
console.log(n);

input: nums1, n, nums2, m;
output: n + m;

//initialize an empty array = [] to store the datas of n and m
//

const merge_sorted_array = (nums1, m, nums2, n) => {
  //initialize two pointers, one for each array
  let i = m - 1;
  let j = n - 1;

  //initialize an index for the merged array starting from the end

  let mergeIndex = m + n - 1;

  //while there are elements in both arrays
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[mergeIndex] = nums1[i];
      i--;
    } else {
      nums1[mergeIndex] = nums2[j];
      j--;
    }
    mergeIndex--;
  }

  while (j >= 0) {
    nums1[mergeIndex] = nums2[j];
    j--;
    mergeIndex--;
  }
};

merge_sorted_array(nums1, n, nums2, m);

// Display the merged array
console.log(nums1);
