// Swap

/* -----> Swapping with temporary Variable <----- */
const arr = [1,2,3,4,5]
console.log(arr)

const temp = arr[2];
arr[2] = arr[3];
arr[3] = temp;

console.log(arr);  // [ 1, 2, 4, 3, 5 ]

console.log("------------------");

/* -----> Swapping without temporary variable <----- */

const array = [1,2,3,4,5];
console.log(array);  // follow the semi colon

[array[2],  array[3]] = [array[3], array[2]];
console.log(array);  // [ 1, 2, 4, 3, 5 ]

console.log("---------------");