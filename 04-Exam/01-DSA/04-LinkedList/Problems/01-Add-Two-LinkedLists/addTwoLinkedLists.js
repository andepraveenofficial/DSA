// Add Two LinkedLists -> Add Two Numbers
const list1 = require("./01-LinkedList1");
const list2 = require("./02-LinkedList2");;


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class AddTwoLinkedLists{
    constructor(){
        this.head = null;
        this.carry = 0;
    }

    addNumbers(list1, list2){
        let current1 = list1.linkedList
        let current2 = list2.linkedList
        console.log(current1)
        console.log(current2)
        console.log("------------")
        while (current1 !== null || current2 !== null || this.carry > 0){
            // console.log(current1.data, current2.data)

            let data1 = current1 ? current1.data : 0 
            let data2 = current2 ? current2.data : 0
            
            let data =  data1 + data2 + this.carry
            
            let unitNum = data % 10
            let remainder = Math.floor(data / 10)
            this.carry = remainder
            
            // console.log("unitNum", unitNum)
            // console.log("remainder", remainder)

            let newNode = new Node(unitNum);

            if (!this.head){
                this.head = newNode
            }

            else{
                let lastNode = this.head;
                while(lastNode.next){
                    lastNode = lastNode.next
                }
                lastNode.next = newNode
            }

            if (current1 !== null) current1 = current1.next;
            if (current2 !== null) current2 = current2.next;
        }

    }

    displayEachNode(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }


    display(){
        return this.head
    
    }

}

const addTwoNumbers = new AddTwoLinkedLists(list1, list2);
addTwoNumbers.addNumbers(list1, list2)
console.log(addTwoNumbers.display());
addTwoNumbers.displayEachNode()

console.log("=====================")

/*

Output:

2 -> 4 -> 6 -> 8  =      8642
1 -> 3 -> 5 -> 7  =      7531
-------------
3 -> 7 -> 1 -> 6 -> 1  = 16173
============

*/