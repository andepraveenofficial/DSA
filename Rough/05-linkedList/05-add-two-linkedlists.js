/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let head = null;
  
    const linkedList1 = l1;
    const linkedList2 = l2;

    let current1 = linkedList1;
    let current2 = linkedList2;

    while (current1 && current2){
        const add = current1.val + current2.val
    
        let newNode = new ListNode(add);

        if (head === null){
            head = newNode;
        }
        else{
            // find lastNode
            let lastNode = head;
            while (lastNode.next){
                lastNode = lastNode.next
            }
            lastNode.next = newNode 
        }

        current1 = current1.next;
        current2 = current2.next;

    }

   return head
    
};