const { LinkedList } = require("./LinkedList");

const detectLoop = (head) => {
    /*using tortoise and hare algorithm -
        1)take 2 pointers fast and slow.
        2)fast moves by two steps, slow moves by 1 step.
        3)if there is loop at some point slow and fast will meet.
    */
    let fast = head, slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)
            return true
    }
    return false;
}

const arr = [1, 2, 3, 4, 5]
const ll = LinkedList.fromValues(...arr);
ll.print()
console.log(detectLoop(ll.head)); //false
let current = ll.head;
while (current.next) {
    current = current.next;
}
current.next = ll.head;
console.log(detectLoop(ll.head)); // true

/*
    Time Complexity = O(n)
    Space Complexity = O(1)
*/


