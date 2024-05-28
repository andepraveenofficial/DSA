// stack

/*
push()
pop()
isEmpty()
isFull()
peek()
*/

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Pushes an element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pops an element from the stack
    pop() {
      if (this.items.length === 0) return null;
      return this.items.pop();
    }
  
    // Peeks at the top element of the stack without removing it
    peek() {
      if (this.items.length === 0) return null;
      return this.items[this.items.length - 1];
    }
  
    // Checks if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Returns the size of the stack
    size() {
      return this.items.length;
    }

    // display stack
    display(){
        console.log(this.items)
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(3);
  stack.push(1);
  stack.push(4);
  stack.push(2);
  

  stack.display();
  console.log(stack.peek());

