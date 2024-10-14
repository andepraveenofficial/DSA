// 03 Selection Sort

/* 
Data Structure : Array
Algorithm : Selection Sort

Time Complexity :
    - Worst : O(n^2)
    - Average : O(n^2)
    - Best : O(n^2)

Approach :
Repeatedly find the minimum element from the unsorted part of the array
and place it at the beginning of the sorted part.
*/

const arr = [2, 1, 5, 8, 4, 3, 7, 6];
console.log(arr);

console.log("------------");

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }

  // Swap
  if (minIndex !== i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  console.log(arr);
}

console.log("------------");
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log("===========");
