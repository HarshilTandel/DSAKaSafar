let nums = [10,20,30,40,50,60,70];

function ReverseArray(nums){
    let start = 0 ;
    let end = nums.length-1;
    while(start<=end){
        [nums[start],nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
    }
    return nums;
}

console.log(ReverseArray(nums));