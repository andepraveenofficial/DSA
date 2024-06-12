// Queue

/*
Data Structure : Queue -> FIFO

Methods :
    * enqueue() -> Add an item to the top of the queue
    * display()
    * size()
    * isEmpty()
    * peek() -> Peeks at the first item of the queue without removing it
    * dequeue() -> Removes at the first element of the queue
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
        if (this.isEmpty()) {
            return null
        }
        else{
            const firstItem = this.display()[0]
            return firstItem
        }
    }

    dequeue(){
        if (this.isEmpty()) {
            return null
        }
        else{
            const shiftedItem = this.display().shift()
            return shiftedItem
        }
    }
}

// Instance
const queue = new Queue();
console.log(queue)

queue.enqueue("data1")
console.log(queue)

console.log(queue.display())

queue.enqueue("data2")
queue.enqueue("data3")
queue.enqueue("data4")

console.log(queue.display())
console.log(queue.peek())

console.log(queue.size())
console.log(queue.dequeue())

console.log(queue.display())

console.log(queue.dequeue())

console.log(queue.display())