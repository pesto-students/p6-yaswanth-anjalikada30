const { LinkedList } = require("./LinkedList");

function findLength(head) {
    let length = 0, current = head;
    while(current){
        length++;
        current = current.next;
    }
    return length;
}
function rotateLinkedList(head, k) {
    let current = head, store;
    let length = findLength(head)
    //if we shift list length times then it will result same list so we can shift only remainder times
    k = k % length;
    //if k is zero or list is less than 2 nothing to shift so return head
    if(k === 0 || length < 2) return head
    //move current to kth element
    for(let i = 1; i < k; i++)
        current = current.next;
    //store last n-k elements in store
    store = current.next;
    //remove n-k elements from list
    current.next = null;
    //traverse till last element of store
    current = store;
    while(current.next)
        current = current.next;
    //place 1st k elements after n-k elements
    current.next = head;
    //store is the new head
    return store;
}
const arr = [1, 2, 3, 4, 5]
const ll = LinkedList.fromValues(...arr);
ll.print()
ll.head = rotateLinkedList(ll.head, 2);
ll.print()


