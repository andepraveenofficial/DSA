// Sorting
// Bubble Sort

const numbersList = [2, 1, 5, 8, 4, 3, 7, 6];
console.log(`Original array:${numbersList}`);
console.log("----------------------");

let swap;
for (let mainCounter in numbersList){
    swap = false
    mainCounter = parseInt(mainCounter);
    for (let subCounter in numbersList){
        subCounter = parseInt(subCounter);
        if (subCounter < numbersList.length-1){
            let leftNumber = numbersList[subCounter];
            let rightNumber = numbersList[subCounter+1];
            // Swap Condition
            if (leftNumber > rightNumber){
                numbersList[subCounter] = rightNumber;
                numbersList[subCounter+1] = leftNumber;
                swap = true;  // Set the swap to true if a swap occurs
            }
        }
        else{
            break;
        }
    }
    console.log(numbersList);

    // If no swaps occurred, the array is already sorted, so break the loop early.
    if (swap === false){
        break;
    }
}
console.log("-----------------------");

console.log(`Sorted array: ${numbersList}`);
console.log("========================");
