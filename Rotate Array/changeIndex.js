"use-strict"

var rotate = function(nums, k) {
  let len = nums.length 
  let arr = new Array(len-1).fill("null")
  console.log(arr)

  k = k % len

  for (let i = 0; i < len; i++) {
    var num = nums[i] 
    var index =  i + k

    if(index > len - 1) index = index - len

    arr.splice(index, 0, num)
  }

  for(let i=0 ; i < len ; i++){
    nums[i] = arr[i]
  }
  console.log(nums)

}



rotate([1, 2, 3, 4, 5, 6, 7], 3)