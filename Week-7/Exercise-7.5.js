const Stack = require("./Stack");

const getNextGreaterElements = (arr) => {
    const stack = new Stack();
    const output = new Map();
    for (let i = 0; i < arr.length; i++) {
        /*if peek element is less than current element
          then its next greater element is current element.
          pop that element and continue until stack is empty 
          or peek element is greater than current element */
        while (stack.size() !== 0) {
            if (arr[i] > stack.peek())
                output.set(stack.pop(), arr[i])
            else break;
        }
        /*push current element to stack*/
        stack.push(arr[i])
    }
    /*after array iteration, elements present in stack represent elements with no 
    next greater elements so make their next element as -1*/
    while (stack.size() !== 0) {
        output.set(stack.pop(), -1)
    }
    return arr.map(item => output.get(item));
}

console.log(getNextGreaterElements([1, 3, 2, 4])) // [3, 4, 4, -1]
console.log(getNextGreaterElements([6, 8, 0, 1, 3])) // [ 8, -1, 1, 3, -1 ]
console.log(getNextGreaterElements([6, 5, 4, 3, 2, 1])) // [ -1, -1, -1, -1, -1, -1 ]

/*
    Time complexity = O(n)
    Space complexity = O(2n)
*/