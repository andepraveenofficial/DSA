let bags = [8,6,3,9];
let rocks = [6,4,0,8];

let extraRocks = 3;

const bagsSpaces = [];
for (let i=0; i<bags.length; i++){
    // O(n)
    const difference = bags[i] - rocks[i]; // O(1)
    bagsSpaces.push(difference);  //  O(1)

}

console.log(bagsSpaces);

bagsSpaces.sort()

console.log(bagsSpaces)

let output = 0
for (let item of bagsSpaces){
    console.log(extraRocks)
    if (item === 0){
        output++
    }
    else{
        extraRocks = extraRocks - item
        if (extraRocks >= 0){
            output++
        }
        else{
            break
        }
    }
}

console.log("-------------")

console.log(output)

console.log("-----------------")