let nums = [10, 20, 30, 40, 50, 60];
let target = 110;

function tripletSum(nums, target) {

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return [nums[i], nums[left], nums[right]];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return null;
}

console.log(tripletSum(nums, target));
