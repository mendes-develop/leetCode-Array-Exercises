var singleNumber = function(nums) {
    
  let hash = nums.reduce( (prev, next) => {
      
    prev[next] = ( prev[next]+= 1) || 1
    return prev
      
  },{})
  
  var getKeyByValue = function (object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  return getKeyByValue(hash, 1)
    
};