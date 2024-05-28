// Node contains Data & next (reference link for next node)
class Node {
    constructor(data) {
      this.data = data;
      this.next = null; 
    }
  }
  
  // Create some nodes
  const node1 = new Node(10);
  const node2 = new Node(20);
  const node3 = new Node(30);
  
  // Connect the nodes
  node1.next = node2;
  node2.next = node3;
  
  // The head is where we start
  let head = node1;
  console.log(head)

  console.log('-----------')

  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }

  console.log("=================")

 