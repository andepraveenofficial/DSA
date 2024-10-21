// Find Target in Sorted 2D Array

/*
Description :
 
Write a function to find a target element in a sorted 2D array.
*/


const matrix =  [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16]];
const target = 8;

let output = false;
for (let row in matrix){
    for (let column in matrix[0]){
        let val = matrix[row][column];
        if (target === val){
            output = true;
            break;
        }
    }
}

console.log(output)  // true