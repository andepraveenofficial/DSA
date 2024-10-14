// 2^x = 16

/*
const fixed = 2;
let number = 17;

let output = false;
while ( number !== fixed && number > fixed){
    console.log(number

    )
    number = number / fixed
}

if (number === fixed){
    output = true
}

console.log(output)

*/

/*
const fixed = 2;
const number = 16;

let left = 0;
let right = number;

let mid = (left+right) / 2
console.log(mid)

let output = false;
while ((fixed**mid) >= number){
    console.log(fixed**mid)
    if (fixed**mid === number){
        output = true;
        break
    }

    if ((fixed**mid) > number){
        right = mid
    }
    else{
        left = mid 
    }

    mid = (left+right) / 2
}

console.log(output)
*/

/*
const fixed = 2;
const number = 17;

let output = false;
let counter = 0;

while ((fixed**counter) <= number){
    console.log(fixed**counter)
    if ((fixed**counter) === number){
        output = true 
    }
    counter++;
}

console.log(output)
*/
