// 5. Find the Deepest Nested Key in a JSON Object

function nestedKey(data){
    if (typeof data === "object"){
        const mainKey = Object.keys(data)[0]
        console.log(mainKey)
        return nestedKey(data[mainKey])
    }   
    else{
        console.log("No more nested keys")
        console.log("-----------")
        console.log(data)
        return data
    }
}


const data = { 
    "level1": { 
      "level2": { 
        "level3": {
            "level4": "This is the deepest value at level4" 
        }
      } 
    }
  }; 

console.log(data)

console.log("---------------------")

const output = nestedKey(data)
console.log(output);  // This is the deepest value at level4