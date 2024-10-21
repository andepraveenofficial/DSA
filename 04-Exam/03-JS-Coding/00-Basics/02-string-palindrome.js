// Palindrome String Check Without Temp	

/*
Description : 

Write a function to check if a given string is a palindrome without using a temporary string.	
*/

const str = "abnhba";

const loopLength = parseInt(str.length/2)

let output = "Yes";
for (let i=0; i<loopLength; i++){
    // console.log(str[i], str.at(-i-1))
    if (str[i] === str.at(-i-1)){
        continue
    }
    else{
        output = "No";
        break
    }
}

console.log(output)