// Insertion Sort

let arr = [2,1,5,8,4,3,7,6];
console.log(arr);

for (let i=0; i<arr.length; i++){
    console.log(arr)
    const small_number = arr[i]
  for (let j=i-1; j>=0; j--){
      if (small_number < arr[j]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
      else{
        break
      }
  }
}

console.log(arr);
