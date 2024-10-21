// 15 Palindrome LinkedList

/*
Problem  : Palindrom

Input: head = [1,2,2,1]
Output: true

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.current = null;
  }

  append(item) {
    console.log(this.head);
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.current = this.head;
    } else {
      this.current.next = newNode;
      this.current = this.current.next;
    }
  }

  reversedLinkedList() {
    let prev = null;
    let current = this.head;
    let newHead = null;

    while (current) {
      const newNode = new Node(current.data);
      newNode.next = prev;
      prev = newNode;
      current = current.next;
    }

    newHead = prev;
    return newHead;
  }

  checkPalindrome() {
    let normalLinkedList = this.head;
    let reversedList = this.reversedLinkedList();
    console.log(normalLinkedList);
    console.log(reversedList);

    let current1 = normalLinkedList;
    let current2 = reversedList;
    let output = true;
    while (current1 && current2) {
      console.log(current1.data, current2.data);
      if (current1.data === current2.data) {
        current1 = current1.next;
        current2 = current2.next;
      } else {
        output = false;
        break;
      }
    }
    return output;
  }

  display() {
    return this.head;
  }

  displayEach() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedlist = new LinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(2);
linkedlist.append(1);
console.log(linkedlist.display());
console.log(linkedlist.displayEach());

console.log("-------------");

console.log(linkedlist.checkPalindrome());

console.log("---------------");
