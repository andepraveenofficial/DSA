// Linear Search

const arr = [2,1,5,8,4,3,7,6];
console.log(arr);

const target = 6;

for (let i=0; i<arr.length; i++){
    // O(n)
    if (arr[i] === target){
        console.log("Element found at index:", i);
        break;
    }
}

