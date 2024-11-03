let nums = [1,2,4,2,1,3,6,5,5,6,4];

function uniqueElm(nums){
    let num;
    for(i=0;i<nums.length;i++){
        num = num ^ nums [i];
    }
    return num;
}

console.log(uniqueElm(nums));