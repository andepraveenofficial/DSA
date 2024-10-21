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
        //    console.log(lastNode)
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

    reversedLinkedList(){
        let prev = null;
        let current = this.head;
        while(current){
            console.log(current.data)
            const nextNode = current.next;  // save the nextNode
            current.next = prev;  // making current node's next point to the previous node
            prev = current
            current = nextNode
        }  

        return prev
    }
}

// Instance
const linkedlist = new LinkedList();
linkedlist.append(10);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.append(40);
linkedlist.append(50);

console.log(linkedlist.getEachNodeData())

console.log("------------")


console.log(linkedlist.reversedLinkedList()
)