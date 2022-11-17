const { LinkedList } = require("./LinkedList");

function reverseLinkedList(head){
    let newHead = null, next;
    while(head !== null){
        next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
}
const arr = [1,2,3,4,5]
const ll = LinkedList.fromValues(...arr);
ll.print()
ll.head = reverseLinkedList(ll.head);
ll.print()


