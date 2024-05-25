// Sorting
// Insertion Sort


const numbersList = [2, 1, 5, 8, 4, 3, 7, 6];
console.log(`Original array: ${numbersList}`);

console.log("--------------");

for (let mainIndex = 0; numbersList.length > mainIndex; mainIndex++){
    const selectedElement = numbersList[mainIndex];
    for (let subIndex = mainIndex-1; subIndex >= 0; subIndex--){
        const minimumElement = numbersList[subIndex];
        if (selectedElement < minimumElement){
            // swapping
            const temporaryVariable = numbersList[subIndex+1];
            numbersList[subIndex+1] = numbersList[subIndex];
            numbersList[subIndex] = temporaryVariable;
            
        }
        
    }
    console.log(numbersList);
}

console.log(`Sorted array: ${numbersList}`);

console.log("========================");

