function createStack() {
    const items = [];
    const stack = {
        items: items,
        push(item) {
            items.push(item)
        },
        pop() {
            return items.pop()
        }
    }
    /*To prevent addition and altering of properties*/
    Object.freeze(stack);
    return stack;
}
const stack = createStack()
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); //prints [10] 
/*no effect since stack object is freezed*/
stack.items = [100]
console.log(stack.items); //prints [10] 


