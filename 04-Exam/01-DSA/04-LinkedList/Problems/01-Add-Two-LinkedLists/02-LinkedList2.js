// LinkedList 1

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
        let newNode = new Node(data);
        if (this.isEmpty()){
            this.head = newNode;
        }
        else{
            let lastNode = this.head;
            while(lastNode.next){
                lastNode = lastNode.next;
            }
            lastNode.next = newNode
        }
        
    }

    display(){
       return this.head;
    }

    displayEachNode(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }

    isEmpty(){
        return this.head === null
    }
}


const linkedList = new LinkedList()
linkedList.append(1);
linkedList.append(3);
linkedList.append(5);
linkedList.append(7);

// Export the linked list head
exports.linkedList = linkedList.display();
