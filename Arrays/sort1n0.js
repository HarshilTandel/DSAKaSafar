let nums = [0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1];

function sort(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] === 0) {
            start++;
        } else if (nums[end] === 1) {
            end--;
        } else {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    return nums;
}

console.log(sort(nums));
