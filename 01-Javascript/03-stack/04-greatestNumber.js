class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      if (this.isEmpty()) {
        this.items.push({ value: element, maxIndex: 0, minIndex:0 });
      } else {
        const newMaxIndex = this.maxIndex(element);
        const newMinIndex = this.minIndex(element)
        this.items.push({ value: element, maxIndex: newMaxIndex, minIndex: newMinIndex});
      }
    }
  
    pop() {
      if (this.isEmpty()) return null;
      this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    display() {
      console.log( this.items);
    }

    maxIndex(element){
        const currentMaxIndex = this.items[this.size() - 1].maxIndex;
        const newMaxIndex = element > this.items[currentMaxIndex].value ? this.size() : currentMaxIndex;
    return newMaxIndex
    }

    greatest() {
        const maxIndex = this.items[this.size() - 1].maxIndex;
        return this.items[maxIndex].value;
      }

    minIndex(element){
        const currentMinIndex = this.items[this.size() - 1].minIndex;
        const newMinIndex = element < this.items[currentMinIndex].value ? this.size() : currentMinIndex;
        return newMinIndex
    }

    smallest() {
        const maxIndex = this.items[this.size() - 1].minIndex;
        return this.items[maxIndex].value;
    }

  }
  
  const stack = new Stack();
  stack.push(30);
  stack.push(20);
  stack.push(100);
  stack.push(900);
  stack.pop();
  stack.push(874);
  stack.push(20);
  stack.push(50);
  stack.push(900);
  stack.pop();
  
  stack.display();
  
  console.log("------------");
  
  console.log(stack.greatest());
  console.log(stack.smallest());
  