function createStack() {
    const items = [];
    return {
        push(item) {
            items.push(item)
        },
        pop() {
            return items.pop()
        },
        getItems() {
            return items;
        }
    }
}
const stack = createStack()
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); //prints undefined
console.log(stack.getItems()); //prints [10]

/*In above approach we can change stack items by giving "stack.items=[10, 20, 30]".
To avoid it below approach is used.*/

function createStack2() {
    const items = [];
    function push(item) {
        items.push(item)
    }
    function pop() {
        return items.pop()
    }
    function getItems() {
        return items;
    }
    return [push, pop, getItems]
}

const [pushStack1, popStack1, getStack1Items] = createStack2()
pushStack1(10);
pushStack1(5);
popStack1();
console.log(getStack1Items());