// Binary Search

const arr = [1,2,3,4,5,6,7,8];  // Sorted Array
const target = 6;

let left = 0;
let right = arr.length;
let mid = Math.floor((left+right) / 2);

while (true){
    // let arr_size = arr.slice(left, right);
    // console.log(arr_size);

    // O(log2 n)

    if (target === arr[mid]){
        console.log("Element found at index:", mid);
        break;
    }

    if (target < arr[mid]){
        right = mid;
    }
    else{
        left = mid;
    }

    mid = Math.floor((left+right) / 2)
}





