let nums = [2, 4, 1, 6, 8, 9, 0];
let max = nums[0];

function maxNum(nums) {
    for (let i = 1; i < nums.length; i++) { 
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

console.log(maxNum(nums)); 
