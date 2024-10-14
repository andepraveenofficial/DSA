// HashMap
/*
data STructure : Map

Methods :
    * set()
    * has()
    * get()
    * size()
    * delete()
    * keys()
    * values()
    * entries()
    * clear()
*/


// Create HashMap
const mymap = new Map();
console.log(mymap);

// Add Elements
mymap.set("key", "value");
mymap.set(2, "I am Number")

let arrayKey = [1, 2, 3];
mymap.set(arrayKey, "I am Array");

let objectKey = {a:1,b:2,c:3}
mymap.set(objectKey, "I am Object");

console.log(mymap);

console.log("---------")


// Checking Existance
console.log(mymap.has("key")); // true

console.log("---------")

// Accessing Elements
console.log(mymap.get("key"));
console.log(mymap.get(2))
console.log(mymap.get(arrayKey));
console.log(mymap.get(objectKey));

console.log("------------")


// Checking Size
console.log(mymap.size);

// delete Elements
mymap.delete("key");
console.log(mymap)

console.log(mymap.size)

console.log("-------------")

// Iterating using for-loop
for (let [key, value] of mymap) {
    console.log(key, value);
}


console.log("----------")

// Iterating using forEach
mymap.forEach((value, key) => {
    console.log(key, value)
})

console.log("--------------")

console.log(mymap.keys());
console.log(mymap.values())
console.log(mymap.entries())

console.log("----------")

// Clear All Elements
mymap.clear();

console.log(mymap);


console.log("===========")