// 01 Linear Search

/*
Data Structure : Array
Algorithm : Linear Search

Time Complexity : 
    Worst : O(n)
    Average : O(n)
    Best : O(1) -> when the target element is found at the beginning of the array.

Approach : 
checks each element in a list one by one for the target value, returning its index if found or "Not Found" otherwise. 
*/


const arr = [2,1,5,8,4,3,7,6];
const target = 3;
console.log(arr, target);

console.log("------------")

let output = null;
for (let i=0; i<arr.length; i++){
    // O(n)
    if (arr[i] === target){
        output = i;
        break;
    }
}

console.log("Element found at index: " + output);  // Element found at index: 5

console.log("===============")

