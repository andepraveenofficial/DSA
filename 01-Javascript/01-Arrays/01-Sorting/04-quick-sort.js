// Quick Sort

/* 
Data Structure : Array
Algorithm : Quick Sort

Time Complexity :
    - Worst : O(n^2)
    - Average : O(n log n)
    - Best : O(n log n)

Approach :
Choose a 'pivot' element, partition the array around the pivot
(elements smaller than pivot go to the left, larger to the right),
then recursively apply the same process to the sub-arrays.
*/

let arr = [2, 1, 5, 8, 4, 3, 7, 6];
console.log("Original array:", arr);

function quickSort(arr) {
  // Time Complexity -> n log n

  if (arr.length <= 1) {
    return arr; // Base Condition
  }

  const pivot = arr[0];

  let leftArray = []; // lesser values
  let rightArray = []; // greater values
  let equalArray = []; // equal values -> Sometimes duplicate pivot

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else if (arr[i] > pivot) {
      rightArray.push(arr[i]);
    } else {
      equalArray.push(arr[i]);
    }
  }

  const result = [
    ...quickSort(leftArray),
    ...equalArray,
    ...quickSort(rightArray),
  ];
  return result;
}

const output = quickSort(arr);

console.log("Sorted array:", output);
