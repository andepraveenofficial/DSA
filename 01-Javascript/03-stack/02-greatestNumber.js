class Stack {
    constructor() {
      this.items = [];
    }
  
    // Pushes an element onto the stack
    push(element) {
        if (this.items.length === 0){
            const maxValue = element;
            this.items.push([element, maxValue]);
        }
        else{
            const maxValue = element > this.peek()[1] ? element : this.peek()[1];
            this.items.push([element, maxValue]);
        }
      
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

    // greatestNumber
    greatest(){
        return this.items[this.items.length-1][1]
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(30);
  stack.push(20);
  stack.push(100);
  stack.push(900);
  stack.push(874);

  stack.push(20);
  stack.pop()

  stack.push(50);
  
  stack.display();

console.log( stack.greatest())
  



