// LinkedList

/*
Data Structure : LinkedList -> Create linked Nodes

Every Node Contains data & next (reference link for next node)
*/

// Node Template
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

// create node instances
const node1 = new Node("data1");
console.log(node1)

const node2 = new Node("data2");
console.log(node2)

const node3 = new Node("data3")
console.log(node3)

console.log("--------------")

/* ------> LinkedList <----- */
// connect the nodes
const head = node1;  // The head is where we start
node1.next = node2;
node2.next = node3;

console.log(head)

console.log("--------------")

/* -----> Traverse on Each Node <----- */
let current = head;
while (current){
    // current !==null
    console.log(current.data)
    current = current.next
} 

console.log("==========")


