// Problem : Implement Stack Using Queue

/*
Data Structure : Queue

Methods : 
    * enqueue()
    * display()
    * size()
    * isEmpty()
    * peek()
    * dequeue()

Approach : 

*/

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(item){
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
        if(this.isEmpty()){
            return null
        }
        else{
            const shiftedItem = this.display()[0]
            return shiftedItem
        }
        
    }

    dequeue(){
        if(this.isEmpty()){
            return null
    }
    else{
        const shiftedItem = this.display().shift()
        return shiftedItem
    }
}

}


/* -------> problem Start <------- */

/*
Problem : Implement Stack Using Queue

Approach : 

Stack Methods :
    * push()
    * display()
    * size()
    * isEmpty()
    * peek()
    * pop()
*/


class ImplementStackUsingQueue{
    constructor(){
        this.queue1 = new Queue()
        this.queue2 = new Queue()
    }

    push(item){
        this.queue1.enqueue(item);
    }

    display(){
        return this.queue1.display()
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
        if (this.isEmpty()) return null 

        while(this.queue1.size() !== 1){
            const shiftedItem = this.queue1.dequeue();
            this.queue2.enqueue(shiftedItem);
        }

        const poppedItem = this.queue1.dequeue();

        while (!this.queue2.isEmpty()){
            const shiftedItem = this.queue2.dequeue();
            this.queue1.enqueue(shiftedItem);
        }
        /*
         const temp = this.queue1;
         this.queue1 = this.queue2;
         this.queue2 = temp;
        */

        return poppedItem
    }

}

// Instance
const stack = new ImplementStackUsingQueue()
console.log(stack)

stack.push("data1")
console.log(stack.display())

stack.push("data2")
stack.push("data3")
stack.push("data4")

console.log(stack.display())

console.log(stack.peek())

console.log(stack.isEmpty())

console.log("---------------")

console.log(stack.pop())
console.log(stack.display())
