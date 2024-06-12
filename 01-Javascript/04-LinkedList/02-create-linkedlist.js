// LinkedList

/*
Data Structure : LinkedList -> create linked nodes

Methods : 
    * append()
    * display()
    * isEmpty()
    * getEachNodeData()
*/

// Node
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


// LinkedList
class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data)
        if (this.isEmpty()){
            this.head = newNode
        }
        else{
           let lastNode = this.head;
           while(lastNode.next){
            lastNode = lastNode.next
           }
           console.log(lastNode)
           lastNode.next = newNode
        }
    }

    isEmpty(){
        return this.head === null
    }

    display(){
        return this.head
    }

    getEachNodeData(){
        let data = [];
        let current = this.head;
        while(current){
            data.push(current.data)
            current = current.next
        }

        return data
    }
}

// Instance
const linkedlist = new LinkedList();
linkedlist.append("data1");
linkedlist.append("data2");
console.log(linkedlist.display())

linkedlist.append("data3");
console.log(linkedlist.display())

console.log(linkedlist.getEachNodeData())

console.log("----------------")