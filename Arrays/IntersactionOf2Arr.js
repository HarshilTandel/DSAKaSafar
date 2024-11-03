let a= [1,2,3,4,6,8];
let b = [3,4,9,10];

function intersactionof2Arr(a,b){
    let ans = [];
    for(i=0;i<a.length;i++){
        let elm = a[i];
        for(j=0;j<b.length;j++){
            if(elm===b[j]){
                //mark for duplicate
               
                ans.push(b[j]);
                b[j] = -1;
            }
        }
    }
    return ans;
}

console.log(intersactionof2Arr(a,b));