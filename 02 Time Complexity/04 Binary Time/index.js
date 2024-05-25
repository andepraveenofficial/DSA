function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Index of the target element
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example usage
const numbers = [1, 3, 5, 7, 9, 11, 13, 15]; // Sorted array
const target = 11;

const index = binarySearch(numbers, target);

if (index !== -1) {
  console.log("Target", target, "found at index:", index);
} else {
  console.log("Target", target, "not found in the array");
}