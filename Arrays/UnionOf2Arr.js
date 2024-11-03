 let a = [1,2,3,4];
 let b = [5,6,7,8,9,10];
 let union = [];

 function UnionOf2Arr(a,b){
    for(i=0;i<a.length;i++){
        union.push(a[i]);
    }
    for(j=0;j<b.length;j++){
        union.push(b[j]);
    }
    return union;
 }

 console.log(UnionOf2Arr(a,b));


 //FOR O(N)


//  let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8, 9, 10];

// function UnionOf2Arr(a, b) {
//     const unionSet = new Set();

//     // Add all elements from the first array
//     for (let i = 0; i < a.length; i++) {
//         unionSet.add(a[i]);
//     }

//     for (let j = 0; j < b.length; j++) {
//         unionSet.add(b[j]);
//     }

//     return Array.from(unionSet);
// }

// console.log(UnionOf2Arr(a, b)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
