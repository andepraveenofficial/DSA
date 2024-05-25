// Sorting
// Quick Sort

const numbersList = [2, 1, 5, 8, 4, 3, 7, 6];
console.log(`Original array: ${numbersList}`);

console.log("--------------");

function quickSort(arr) {
  console.log(arr);
  if (arr.length <= 1) {
    return arr;
  }
  else{
    const pivot = arr[0];

    // Partition the array into two sub-arrays
    const lesser = arr.slice(1).filter((eachElement) => eachElement <= pivot);
    const greater = arr.slice(1).filter((eachElement) => eachElement > pivot);
    console.log(lesser, pivot, greater);
    console.log("----------")
    const lesserQuickSort = quickSort(lesser);
    console.log(lesserQuickSort);

    const greaterQuickSort = quickSort(greater);
    // Recursively apply QuickSort to the two sub-arrays and concatenate them

    console.log(lesserQuickSort);
    const output = [...lesserQuickSort, pivot, ...greaterQuickSort];
    console.log(`output : ${output}`);
    return output;
  }

}

const sortedArr = quickSort(numbersList);
console.log(sortedArr);


console.log(`Sorted array: ${sortedArr}`);
console.log("========================");
