// Sorting
// Merge Sort

const numbersList = [2, 1, 5, 8, 4, 3, 7, 6];
console.log(`Original array: ${numbersList}`);

console.log("--------------");



function merge(leftArr, rightArr){
  console.log("merge");
  console.log(leftArr, rightArr);
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller one to the result array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length){
    if (leftArr[leftIndex] < rightArr[rightIndex]){
      const addElement = leftArr[leftIndex];
      result.push(addElement);
      leftIndex ++
    }
    else{
      const addElement = rightArr[rightIndex];
      result.push(addElement);
      rightIndex ++
    }
  }
  // Concatenate any remaining elements from both arrays (if any)
  const remainingLeft = leftArr.slice(leftIndex);
  const remainingRight = rightArr.slice(rightIndex);
  const output = result.concat(remainingLeft).concat(remainingRight);
  console.log(output);
  console.log("------------")
  return output;
}

function mergeSort(arr){
  console.log("mergeSort");
  console.log(arr);
  if (arr.length < 2){
    return arr;
  }
  else{
    const middle = Math.floor(arr.length/2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    console.log(leftArray, rightArray);

    const leftSorted = mergeSort(leftArray);
    const rightSorted = mergeSort(rightArray);

    console.log("==============")
    const merging = merge(leftSorted, rightSorted);
    
    return merging;
  }
}


const result = mergeSort(numbersList);

console.log(`Sorted array: ${result}`);
console.log("========================");
