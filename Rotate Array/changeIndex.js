"use-strict";

const rotate = function(nums, k) {
  let len = nums.length;
  let arr = new Array(len -1);

  k = k % len;

  for (let i = 0; i < len; i++) {
    var num = nums;
    var index = i + k;
    if (index > len - 1) index = index - len;
    arr.splice(index, 0, num);
  }

  for (let i = 0; i < len; i++) {
    nums[i] = arr[i];
  }
  console.log(nums)
  return nums;
};

module.exports = rotate;
