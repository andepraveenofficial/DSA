function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: single element or empty array

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Recursive call for left half
  const right = mergeSort(arr.slice(mid)); // Recursive call for right half

  return merge(left, right); // Merge the sorted halves
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concatenate remaining elements (if any)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const numbers = [64, 25, 12, 22, 11, 90];
const sortedNumbers = mergeSort(numbers);
console.log(sortedNumbers);