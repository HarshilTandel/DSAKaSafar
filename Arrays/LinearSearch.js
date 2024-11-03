let nums = [10,20,40,52,745,75,78,98,23];
let search = 75;

function LinearSearch(nums){
    for(i=0;i<nums.length;i++){
        if(nums[i]===search){
            return i;
        }
    }
    return -1;
}

console.log(LinearSearch(nums));///Output : 5