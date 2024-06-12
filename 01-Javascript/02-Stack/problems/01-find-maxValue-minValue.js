// Problem : Find maxValue & minValue

/*
Data Structure : Stack

Methods : 
    * push()
    * display()
    * size()
    * isEmpty()
    * peek()
    * pop()

Approach : 
store the every value with minValueIndex & maxValueIndex in the stack.
*/

class Stack{
    constructor(){
        this.items = [];
        this.maxValueIndex = null;
        this.minValueIndex = null;
    }

    push(item){
        if(this.isEmpty()){
            this.maxValueIndex = 0;
            this.minValueIndex = 0;
        }
        else{
         const maxValue = this.display()[this.maxValueIndex].value
         const minValue = this.display()[this.minValueIndex].value
        //  console.log(maxValue, minValue)

         if(item >= maxValue){
            this.maxValueIndex = this.size()
         }

         if (item <= minValue){
            this.minValueIndex = this.size()
         }
       }
       const addItem = {
        value:item,
        maxValueIndex: this.maxValueIndex,
        minValueIndex: this.minValueIndex
     }

     this.items.push(addItem)
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

    getMaxValue(){
        if(this.isEmpty()){
            return null
        }
        else{
            const maxValue = this.display()[this.peek().maxValueIndex].value;
            return maxValue
        }
    }

    getMinValue(){
        if(this.isEmpty()){
            return null
        }
        else{
            const minValue = this.display()[this.peek().minValueIndex].value;
            return minValue
        }
    }
}


// Instance

let stack = new Stack();
console.log(stack)

stack.push(10)
console.log(stack.display())

stack.push(70)
stack.push(30)
stack.push(50)
stack.push(250)
stack.push(5)
console.log(stack.display())

console.log(stack.peek())


console.log(stack.getMaxValue())
console.log(stack.getMinValue())




