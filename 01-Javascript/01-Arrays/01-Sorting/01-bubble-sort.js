// 01 Bubble Sort

/*
Data Structure : Array
Algorithm : Bubble Sort

Time Complexity :
    - Worst : O(n^2)
    - Average : O(n^2)
    - Best : O(n) -> when the array is already sorted

Approach : 
Compare adjacent elements in a list, swapping them if they're in the wrong order, repeating until everything is sorted.
*/

const arr = [2,1,5,8,4,3,7,6];
console.log(arr);

console.log("------------")

for (let i=0; i<arr.length; i++){
    let isSorted = true;
    for (let j=0; j<arr.length-1; j++){
        // O(n^2)
        if (arr[j] > arr[j+1]){
            isSorted = false;
            // console.log(arr[j], arr[j+1]);
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }

    // console.log(arr)

    if (isSorted){
        break;
    }
}

console.log(arr);  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

console.log("==========")
  