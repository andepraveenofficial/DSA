// Linked List

// Each Node contains data & next (reference to next node)
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);

        if (!this.head){
            this.head = newNode;
            return 
        }

        let lastNode = this.head
        while(lastNode.next){
            lastNode = lastNode.next
        }

        lastNode.next = newNode
    }

    printList(){
        console.log(this.head);
    }

    printEachNode(){
        let current = this.head;
        // null is false value
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

// create instance
const myList = new LinkedList();

myList.append(10);
myList.printList();

myList.append(20);
myList.printList();

myList.append(30);
myList.printList();


