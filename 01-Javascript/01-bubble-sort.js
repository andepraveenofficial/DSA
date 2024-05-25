// Bubble Sort

let arr = [2,1,5,8,4,3,7,6];
console.log(arr);

for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length-1; j++){
        // O(n^2)
        if (arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}

console.log(arr);