/**
 * @param {number[]} nums
 */

var NumArray = function(nums) {
    this.numbers = nums;
    this.sum = 0;

    for (let num of this.numbers) {
        this.sum += num;
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.sum = this.sum - this.numbers[index] + val;
    this.numbers[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if ((right - left) === this.numbers.length - 1){
        return this.sum;
    } else {
        let leftSum = 0, rightSum = 0;
        const len = this.numbers.length;
        for (let i = 0; i < left; i++){
            leftSum += this.numbers[i]
        }
        for (let i = right + 1; i < len; i++){
            rightSum += this.numbers[i]
        }
        return this.sum - (leftSum + rightSum);
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

var obj = new NumArray([9, -8])
obj.update(0,3)
console.log(obj.sumRange(1,1))
console.log(obj.sumRange(0,1))
// obj.update(1,-3)
// console.log(obj.sumRange(0,1))