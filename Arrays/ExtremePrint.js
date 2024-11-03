function extremePrint(arr) {
    let result = [];
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        if (start === end) {
            result.push(arr[start]);
        } else {
            result.push(arr[start]);
            result.push(arr[end]);
        }
        start++;
        end--;
    }
    
    return result;
}

let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(extremePrint(arr).join(","));