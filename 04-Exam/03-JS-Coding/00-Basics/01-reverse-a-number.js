// Reverse a Number

let num = 1234;
console.log(num);

console.log("------------")

let reversedNum = 0;
while (num !== 0){
    const unitDigit = num % 10; // remainder
    num = parseInt(num/10);  // remove unitDigit
    // console.log(reverseNum, unitDigit)
    reversedNum = (reversedNum*10) + unitDigit;
}

console.log(reversedNum)

console.log("============")