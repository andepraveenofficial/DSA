function findFactorial(num){
    if(num === 0 || num === 1){
        // Base Condition
        return 1 
    }
   
        // Recursive Call
        let result = num * findFactorial(num-1)
        return result;
}


const n = 5;

let output = findFactorial(n);
console.log(output)  // 120