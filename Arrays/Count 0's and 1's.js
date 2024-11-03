let nums = [0,1,1,1,0,0,0,0,1,1,1,0,0,1];

let zerocount = 0;
let onecount = 0;

function countnums(nums){
    for(i=0;i<nums.length;i++){
        if(nums[i]===0){
            zerocount++;
        }else if(nums[i]===1){
            onecount++;
        }
    }
    return [zerocount,onecount];
}

console.log(countnums(nums));