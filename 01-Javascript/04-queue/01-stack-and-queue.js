// stack and Queue

class Stack{
    // Initialize properties
    constructor(){
        this.items = [];
    }

    // Insert
    push(item) {
        this.items.push(item);
    }

    // Delete
    pop() {
        return this.items.pop()
    }

    // peek
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        else{
            return this.items[this.size() - 1];
        }
    }

    // size
    size() {
        return this.items.length;
    }

    // isEmpty
    isEmpty() {
        return this.size() === 0;
    }

    // display
    display() {
        console.log(this.items);
    }
}


class Queue{
    // Initializa Properties
    constructor(){
        this.items = [];
    }

    // Insert
    enqueue(item){
        this.items.push(item);
    }

    // Delete
    dequeue(){
        return this.items.shift();
    }

    // peek
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        else{
            return this.items[0];
        }
    }


    // isEmpty
    isEmpty() {
        return this.items.length === 0;
    }

    // Size
    size() {
        return this.items.length;
    }

    // display
    display(){
        console.log(this.items);
    }
}


// create stack Instance
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(4);

stack.display();


// create Queue Instance
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.enqueue(4);

queue.display()

