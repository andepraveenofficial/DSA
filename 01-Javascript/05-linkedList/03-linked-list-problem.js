// Node contains data & next (reference to the next node)

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

    
    insertDataAtEnd(data){
        const newNode = new Node(data);

        // link the newNode
        if (!this.head){
            this.head = newNode;
            return ;
        }

        let lastNode = this.head;
        // null gives the false value
        while(lastNode.next){
            lastNode = lastNode.next;
        }

        lastNode.next = newNode;
    }

    insertDataAtBeginning(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }

    deleteDataAtEnd(){
        let lastNode = this.head;
        let previousNode = this.head

        // null gives false value
        while(lastNode.next){
            previousNode = lastNode
            lastNode = previousNode.next
        }

        previousNode.next = null
    }

    deleteDataAtBeginning(){
        this.head = this.head.next
    }

    insertdataAtMiddle(data, index){
        let newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let count = 0;
        let current = this.head;
        let prev = null
        // null gives false value
        while (count !== index-1){
             prev = current
            current = current.next
            count++
        }
        const temp = prev.next;
        newNode.next = temp;
        
       prev.next = newNode

    }

    deleteDataAtMiddle(index){
        let count = 0;
        let current = this.head;
        let prev = null;
        while(count !== index){
            prev = current;
            current = current.next;
            count++
        }
        prev.next = null;
    }

    printList(){
        console.log(this.head)
    }
}


// create LinkedList Instance
const myList = new LinkedList();

// Insert Data at End
myList.insertDataAtEnd(10);
myList.printList();

myList.insertDataAtEnd(20);
myList.printList();

myList.insertDataAtEnd(30);
myList.printList();

myList.insertDataAtEnd(31);
myList.printList();

myList.insertDataAtEnd(32);
myList.printList();

myList.insertDataAtEnd(33);
myList.printList();

// Insert Data at Beginning
myList.insertDataAtBeginning(40);
myList.printList();

// Delete data at End
myList.deleteDataAtEnd();
myList.printList();

// Delete data at Beginning
myList.deleteDataAtBeginning()
myList.printList();

console.log("---------------")

// Insert Data at middle
myList.insertdataAtMiddle(50, 2);
myList.printList();

// Insert Data at Beginning
myList.deleteDataAtMiddle(3)
myList.printList();
