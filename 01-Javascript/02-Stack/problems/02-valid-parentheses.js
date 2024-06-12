// Problem : Check Valid Parentheses

/*
Data Structure : Stack

Methods : 
    * push()
    * display()
    * size()
    * isEmpty()
    * peek()
    * pop()

*/

class Stack{
    constructor(){
        this.items = []
    }

    push(item){
        this.display().push(item)
    }

    display(){
        return this.items
    }

    size(){
        return this.display().length
    }

    isEmpty(){
        return this.size() === 0
    }

    peek(){
        if (this.isEmpty()){
            return null
        }
        else{
            const topItem = this.display()[this.size() - 1]
            return topItem
        }
    }

    pop(){
        if (this.isEmpty()){
            return null
        }
        else{
            const poppedItem = this.display().pop()
            return poppedItem;
        }
    }
}




/* -------> problem Start <------- */

/*
Problem : Validate Bracket String

Description : 
Given a string containing '(', ')', '{', '}', '[', and ']', determine if it is valid. 
A string is valid if brackets are closed in the correct order and match their types.	
*/

const str = "(()[]{}){}";

// Instance 
const stack = new Stack()
const openAndClose = {
    "{":"}",
    "[":"]",
    "(":")"
}

const opening = "{[("

let output;
for (let bracket of str){
    if (opening.includes(bracket)){
        stack.push(bracket)
    }
    else{
        if (stack.isEmpty()){
            output = "Not Valid"
            break;
        }
        else{
            const peekItem = stack.peek();
            if (openAndClose[peekItem] === bracket){
                stack.pop()
                output = "Valid"
            }
        }
    }
}

console.log(output); // Valid
