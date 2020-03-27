// Given two arrays, write a function to compute their intersection.
"use-strict";
var intersection = function (nums1, nums2) {
    // Longest array comes first
    if (nums1.length < nums2.length)
        return intersection(nums2, nums1);
    // Create hashMap to store all the occurrences at the first array
    var nums1Hash = nums1.reduce(function (hash, num) {
        hash[num] = (hash[num] += 1) || 1;
        return hash;
    }, {});
    return nums2.filter(function (n) {
        if (nums1Hash[n]) {
            nums1Hash[n] -= 1;
            return true;
        }
        else {
            return false;
        }
    });
};
var arr1 = [1, 2, 2, 1];
var arr2 = [2, 2];
console.log(intersection(arr1, arr2));
