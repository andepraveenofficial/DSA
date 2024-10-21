// Delete Duplicates

/*
Problem : Delete Duplicates in an Array without Set Data Structure
*/

const arr = [1,2,2,3,3,3,4,4,4,4];
console.log(arr)

console.log("-------------")

// console.log([...new Set(arr)]); // [ 1, 2, 3, 4 ]  // Don't use Set Data Structure


let uniqueItems = []
for (let item of arr){
    if (!uniqueItems.includes(item)){
        uniqueItems.push(item)
    }
}

console.log(uniqueItems);  // [ 1, 2, 3, 4 ]

console.log("=================")