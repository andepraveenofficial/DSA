// Selection Sort

let arr = [2,1,5,8,4,3,7,6];
console.log(arr);

for (let i=0; i<arr.length; i++){
    let small_number_index = i;
    for (let j=i+1; j<arr.length; j++){
        // O(n^2)
        if (arr[small_number_index] > arr[j]){
            small_number_index = j;
        }
    }
    // Swap
    [arr[i], arr[small_number_index]] = [arr[small_number_index], arr[i]]
}


console.log(arr);

