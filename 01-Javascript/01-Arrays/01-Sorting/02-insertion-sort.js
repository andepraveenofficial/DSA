// 02 Insertion Sort

/*
Data Structure : Array
Algorithm : Insertion Sort

Time Complexity : 
    - Worst : O(n^2)
    - Average : O(n^2)
    - Best : O(n)

Approach : 
move to backward direction iteratively inserts each element from an unsorted list into its correct position within a sorted portion of the list.   
*/

const arr = [2,1,5,8,4,3,7,6];

console.log(arr);

console.log("---------------------");

for (let i=0; i<arr.length; i++){
    const item = arr[i];
//    console.log(item);
    let j = i-1;

   while (j >= 0 && item < arr[j]){
    // O(n)
        arr[j+1] = arr[j];
        console.log(arr);
        j--
   }

   arr[j+1] = item;
   console.log(arr)
   console.log("--------")
}

console.log(arr);

console.log("===========")