// matrix -> 2D Array

/*
01. read matrix
02 rotate matrix
03 rotate matrix with degrees
*/


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix);

console.log("--------------")

// Read matrix
for (let row=0; row<matrix.length; row++){
    for (let col=0; col<matrix[0].length; col++){
        console.log(matrix[row][col]);
    }
}

console.log("------------------")

// Rotate matrix
const rotatedMatrix = []
for (let col=0; col<matrix[0].length; col++){
    const arr = []
    for (let row=0; row<matrix.length; row++){
        const addItem = matrix[row][col]
        arr.push(addItem)
    }
    arr.reverse()
    // console.log(arr)
    rotatedMatrix.push(arr)
}

console.log(rotatedMatrix)

console.log("----------------")

