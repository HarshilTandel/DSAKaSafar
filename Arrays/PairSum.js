let nums = [1, 3, 5, 7, 2, 4, 6];
let target = 9;

function PairSum(nums) {
    for (let i = 0; i < nums.length; i++) {
        let found = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === found) {
                return [nums[i], found];
            }
        }
    }
    return null;
}

console.log(PairSum(nums)); 
