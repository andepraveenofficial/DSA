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
linkedList.append(2);
linkedList.append(4);
linkedList.append(6);
linkedList.append(8);

// Export the linked list head
exports.linkedList = linkedList.display();
