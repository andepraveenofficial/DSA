// Find All Duplicates in an Array

/*
Description :

Given an array of integers, find all elements that appear twice.
*/

const arr = [4, 3, 2, 7, 8, 2, 3, 1];

const output = [];
for (let i=0; i<arr.length; i++){
    const item = arr[i];
    if (arr.slice(i+1, ).includes(item) && !output.includes(item)){
        output.push(item);
    }
}

console.log(output)  // [ 3, 2 ]