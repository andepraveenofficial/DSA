class Stack {
    constructor() {
      this.items = [];
      this.maxItems = [];
    }
  
    push(element) {
        if (this.isEmpty()){
            const maxValue = element;
            this.items.push(element);
            this.maxItems.push(maxValue)
        }
        else{
            const maxValue = element > this.maxItems[this.size()-1] ? element : this.maxItems[this.size()-1];
            this.items.push(element);
            this.maxItems.push(maxValue)
        }
    }
  
    pop() {
      if (this.items.length === 0) return null;
      this.items.pop();
      this.maxItems.pop();
    }
  

    isEmpty() {
      return this.items.length === 0;
    }
  

    size() {
      return this.items.length;
    }

    // display stack
    display(){
        console.log(this.items)
        console.log(this.maxItems)
    }

    // greatestNumber
    greatest(){
        return this.maxItems[this.size()-1]
    }
  }
  

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

  console.log("------------")


console.log( stack.greatest())
  

