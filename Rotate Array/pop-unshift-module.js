var rotate = function(nums, k) {
  let len = nums.length 
  let newArray = new Array()

  k = k % len

  for (let i = 0; i < len; i++) {
    var num = nums[i] 
    var index =  i + k

    if(index > len - 1) index = index - len

    newArray.splice(index, 0, num)
  }

  for(let i=0 ; i < len ; i++){
    nums[i] = newArray[i]
  }
}



rotate([1, 2, 3, 4, 5, 6, 7], 30)