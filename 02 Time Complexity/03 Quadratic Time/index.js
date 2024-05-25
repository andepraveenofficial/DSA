// Bubble Sort
function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
        swapped = true;
      }
    }
    if (!swapped) break; // Early termination if no swaps occur (already sorted)
  }
  return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers)); // O(n^2) in worst case


// Nested Loop 
function findPairs(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        console.log("Pair found:", arr[i], arr[j]);
        return; // Early termination if a pair is found
      }
    }
  }
  console.log("No pair found for the given sum");
}

const numbers2 = [5, 2, 8, 1, 9];
const targetSum = 10;
findPairs(numbers2, targetSum); // O(n^2)