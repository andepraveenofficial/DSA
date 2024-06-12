// HashTable

/*
Data Structure : HashTable -> Dictionary

Description: 


Methods : 
    * hash() -> Hashing -> convert string to number
    * set() -> store key-value pair
    * get() -> get value based on provided key
    * delete() -> delete key-value pair 
*/

// HashTable
class Hashtable{
    constructor(size){
        this.size = size
        this.table = new Array(this.size);
    }

    // convert string to number
    hash(key="apple"){
        let keyNum = 0;
        for (let i=0; i<key.length; i++){
            // console.log(key.charCodeAt(i))
            const unicode = key.charCodeAt(i)
            // keyNum += unicode // rewrite for collision
            keyNum = keyNum + (unicode * i)
        }

        return keyNum%this.size;
    }

    set(key, value){
        const index = this.hash(key);
        console.log(key, index)
        this.table[index] = [key, value]
    }

    get(key){
        const index = this.hash(key);
        console.log(index);
        const value = this.table[index][1];
        return value;
    }

    delete(key){
        const index = this.hash(key);
        this.table[index] = undefined
    }

    keys(){
        let keys = []
        for (let i=0; i<this.table.length; i++){
            if (this.table[i] !== undefined){
                keys.push(this.table[i][0])
            }
        }
        return keys
    }

    values(){
        let values = []
        for (let i=0; i<this.table.length; i++){
            if (this.table[i] !== undefined){
                values.push(this.table[i][1])
            }
        }
        return values
    }

    entries(){
        let entries = [];
        for (let i=0; i<this.table.length; i++){
            if (this.table[i] !== undefined){
                entries.push(this.table[i])
            }
        }
        return entries
    }

    indexes(){
        let entries = [];
        for (let i=0; i<this.table.length; i++){
            if (this.table[i] !== undefined){
                entries.push([i, this.table[i]])
            }
        }
        return entries
    }

}


// Instance
let hashTable = new Hashtable(50);
console.log(hashTable)

console.log(hashTable.hash())

hashTable.set("key", "value");
console.log(hashTable.get("key"))

hashTable.delete("key")

console.log("----------")
hashTable.set("key1", "value1");
hashTable.set("key2", "value2");
hashTable.set("key3", "value3");
hashTable.set("key4", "value4");

console.log(hashTable.keys());
console.log(hashTable.values())
console.log(hashTable.entries())

console.log("--------------")

hashTable.set("kye4", "value5");
console.log(hashTable.entries())

console.log(hashTable.indexes())

/*
const arr = [];
arr[2] = "two"
arr[200] = "two Hundered"
arr[3] = "three"
console.log(arr)

arr[3] = undefined
console.log(arr)
*/

