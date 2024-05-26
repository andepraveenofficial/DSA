// Quick Sort

let arr = [2,1,5,8,4,3,7,6];
console.log(arr);

function quickSort(arr){

    if (arr.length <= 1){
        return arr; // Base Condition
    }

const pivot = arr[0];

let leftArray = [];  // lesser values
let rightArray = [];  // greater values
let equalArray = [];  // equal values -> Some times duplicate pivot

for (let i=0; i<arr.length; i++){
    if(arr[i] < pivot){
        leftArray.push(arr[i]);
    }
    else if  (arr[i] > pivot){
        rightArray.push(arr[i]);
    }
    else{
        equalArray.push(arr[i]);
    }

}

const result = [...quickSort(leftArray), ...equalArray, ...quickSort(rightArray)];
return result
}

const output = quickSort(arr)

console.log(output);


