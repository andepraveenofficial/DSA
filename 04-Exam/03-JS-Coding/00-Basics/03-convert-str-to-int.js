// Convert String to Integer

/*
Description : 
Write a function to convert a string of digits to an integer without type casting and parsing functions.

Approach : 
   * take unicode of 
   * 0 unicode -> 48
*/

const str = "123456";
console.log(str, typeof str)

let num = 0;
for (let i=0; i<str.length; i++){
    const unicode = str.charCodeAt(i);
    // console.log(unicode);
    const digit = unicode - 48;
    num = (num * 10) + digit
    // console.log(num)
}

console.log(num, typeof num);




