// Alphabet

/*
Approach : using unicode

alphabet starts from unicode 97
*/

// Find Unicode of character
console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122

console.log("----------")

const obj = {}
for (let i = 97; i <= 122; i++) {
    obj[String.fromCharCode(i)] = i
}

console.log(obj)

console.log("================")
