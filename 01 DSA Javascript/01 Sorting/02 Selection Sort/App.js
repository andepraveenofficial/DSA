// Sorting
// Selection Sort

const numbersList = [2, 1, 5, 8, 4, 3, 7, 6];
console.log(`Original array: ${numbersList}`);

console.log("-----------------------");

for (let mainIndex = 0; numbersList.length > mainIndex; mainIndex++){
    let minimumIndex = mainIndex;
    let minimumElement = numbersList[mainIndex];
    for (let subIndex = mainIndex+1; numbersList.length > subIndex; subIndex++){
        let maximumElement = numbersList[subIndex];
        
        // swap condition
        if (minimumElement > maximumElement){
            minimumIndex = subIndex
            minimumElement = numbersList[subIndex]
        }
    }

    // Swapping
    if (minimumIndex !== mainIndex) {
        const temporaryVariable = numbersList[mainIndex];
        numbersList[mainIndex] = numbersList[minimumIndex];
        numbersList[minimumIndex] = temporaryVariable;
    }

    console.log(numbersList)
}


console.log(`Sorted array: ${numbersList}`);

console.log("========================")
