// 02 Binary Search

/*
Data Structure : Array
Algorithm : Binary Search

Time Complexity :
    Worst : O(log n)
    Average : O(log n)
    Best : O(1) -> when the target element is found at the middle of the array.

Approach : 
Binary search quickly finds a target value in a sorted array by repeatedly dividing the search range in half and checking the middle element, reducing the search area each time.

*/

const arr = [1,2,3,4,5,6,7,8]; // Sorted Array
let target = 7; // Target Element
console.log(arr, target);

console.log("------------")

let startIndex = 0;
let endIndex = arr.length - 1;
let midIndex; 
let found = false;

while(startIndex <= endIndex){
    // O(log_2 n)
    midIndex = Math.floor((startIndex+endIndex)/2); // takes minimum nearest integer

    if (arr[midIndex] == target){
        found = true;
        break;
    }
    else if (arr[midIndex] < target){
        startIndex = midIndex+1;
    }
    else{
        endIndex = midIndex-1;
    }
}

if (found){
    console.log("Element found at index: " + midIndex); // Element found at index: 6
}
else{
    console.log("Element Not Found");
}

console.log("================")