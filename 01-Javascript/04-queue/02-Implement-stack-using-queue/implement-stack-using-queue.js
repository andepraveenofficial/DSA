// ImplementStackUsingQueue

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


class ImplementStackUsingQueue{

    // Initialization
    constructor(){
        this.queue1 = new Queue();  
        this.queue2 = new Queue();
    }

    // Insert
    push(item){
        this.queue1.enqueue(item);
    }

    // Delete
    pop(){
        while(this.queue1.size()>1){
            this.queue2.enqueue(this.queue1.dequeue())
        }

        const poppedItem = this.queue1.dequeue();

        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;

        return poppedItem;

    }

  
    // Display
    display(){
        console.log(this.queue1.display());
    }
}

// create ImplementStackUsingQueue Instance
const stack = new ImplementStackUsingQueue();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(4);

stack.display();



