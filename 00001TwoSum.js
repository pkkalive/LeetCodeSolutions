const twoSum = function (nums, target){
  const map = new Map();
  for(let i = 0, len = nums.length; i < len; i++){
    const sumToBe = target - nums[i];
    if (map.get(sumToBe) !== undefined){
      return [map.get(sumToBe), i];
    }
    map.set(nums[i], i);
  }
}

console.log(twoSum([2,7,11,15],9));