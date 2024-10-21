// Array Parts

/*
Approach : Array Parts

[ 1, 2, 3, 4, 5 ] -> 15 parts
----------
[ 1 ]
[ 1, 2 ]
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
----------
[ 2 ]
[ 2, 3 ]
[ 2, 3, 4 ]
[ 2, 3, 4, 5 ]
----------
[ 3 ]
[ 3, 4 ]
[ 3, 4, 5 ]
----------
[ 4 ]
[ 4, 5 ]
----------
[ 5 ]
----------
*/

let arr = [1,2,3,4,5];
console.log(arr)

console.log("----------")

const arrParts = []
for (let i=0; i<arr.length; i++){
    const mainPart = arr.slice(i, arr.length);
    // console.log(mainPart)
    for (let j=0; j<mainPart.length; j++){
        const subPart = mainPart.slice(0, j+1)
        console.log(subPart)
        arrParts.push(subPart)
    }
    console.log("----------")
}

console.log(arrParts)

console.log("==============")