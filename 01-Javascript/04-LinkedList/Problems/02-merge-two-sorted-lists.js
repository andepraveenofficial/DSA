// 04 Merge Two Sorted Lists

/*
Problem : Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the
nodes of the first two lists.
Return the head of the merged linked list.
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:
Input: list1 = [], list2 = []
Output: []
Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

/*
Approach : 

Data Structure : LinkedList

Methods :
    * append()
    * display()
    * displayEach()
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}



class LinkedList{
    constructor(){
        this.head = null;
        this.current = this.head;
    }

    append(item){
       const newNode = new Node(item);
       if (!this.head){
        this.head = newNode;
        this.current = this.head;
       }
       else{
            this.current.next = newNode;
            this.current = this.current.next;
       }
    }

    display(){
        return this.head;
    }

    displayEach(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}

/*
// LinkedList Checking :
const linkedlist = new LinkedList();

linkedlist.append("data1");
linkedlist.append("data2");
linkedlist.append("data3");
console.log(linkedlist.display());

linkedlist.displayEach();
*/


class MergeTwoLists{
    constructor(list1, list2){
        this.list1 = list1;
        this.list1current = this.list1;

        this.list2 = list2;
        this.list2current = this.list2;

        this.head = null;
        this.current = this.head;
    }

    merge(){
        console.log(this.list1current, this.list2current)

        while(this.list1current && this.list2current){
            console.log(this.list1current.data, this.list2current.data);
            
            if(this.list1current.data <= this.list2current.data){
                let newNode = new Node(this.list1current.data);
                if(this.head === null){
                    this.head = newNode;
                    this.current = this.head;
                }
                else{
                    this.current.next = newNode;
                    this.current = this.current.next;
                }
                this.list1current.next !== null ? this.list1current = this.list1current.next : this.list1current = null;            
            
            }    else{
                let newNode = new Node(this.list2current.data);
                if(this.head === null){
                    this.head = newNode;
                    this.current = this.head;
                }
                else{
                    this.current.next = newNode;
                    this.current = this.current.next
                }
                this.list2current.next !== null ? this.list2current = this.list2current.next : this.list2current = null;        
    }
}

    while (this.list1current !== null){
        let newNode = new Node(this.list1current.data);
        this.current.next = newNode;
        this.current = this.current.next;
        this.list1current.next !== null ? this.list1current = this.list1current.next : this.list1current = null; 
    }

    while (this.list2current !== null){
        let newNode = new Node(this.list2current.data);
        this.current.next = newNode;
        this.current = this.current.next;
        this.list2current.next !== null ? this.list2current = this.list2current.next : this.list2current = null;        
    }
    }

    display(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    
}

const linkedlist1 = new LinkedList();
linkedlist1.append(1);
linkedlist1.append(2);
linkedlist1.append(4);

const linkedlist2 = new LinkedList();
linkedlist2.append(1);
linkedlist2.append(3);
linkedlist2.append(4);


linkedlist1.displayEach();
console.log("-----------")

linkedlist2.displayEach();

console.log("-----------------")

const mergeTwoLists = new MergeTwoLists(linkedlist1.display(), linkedlist2.display());
console.log(mergeTwoLists)

console.log("------------")

mergeTwoLists.merge();

console.log("-------------")

mergeTwoLists.display();

console.log("==================")