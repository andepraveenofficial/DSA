//  Array Traversal:

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const numbers = [10, 20, 30, 40, 50];
printArray(numbers); // O(n)

// Linear Search 
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Index of the target element
    }
  }
  return -1; // Target not found
}

const numbers2 = [5, 2, 8, 1, 9];
const target = 8;
const index = linearSearch(numbers2, target);

if (index !== -1) {
  console.log("Target found at index:", index);
} else {
  console.log("Target not found in the array");
}