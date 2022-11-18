const Stack = require("./Stack")

const isValidParantheses = (string) => {
    const stack = new Stack()
    for (let char of string) {
        //push to stack if it is open parantheses
        if (char === '(' || char === '[' || char === '{')
            stack.push(char)
        else {
            //check if popped element is opening parantheses of current element or not
            if (char === ')') {
                if (stack.pop() !== '(')
                    return false;
            }
            if (char === ']') {
                if (stack.pop() !== '[')
                    return false;
            }
            if (char === '}') {
                if (stack.pop() !== '{')
                    return false;
            }
        }
    }
    if(!stack.size())
        return true;
    return false;
}

console.log(isValidParantheses('()[]{}')) //true
/*
    Time Complexity = O(n)
    Space Complexity = O(n)
*/
