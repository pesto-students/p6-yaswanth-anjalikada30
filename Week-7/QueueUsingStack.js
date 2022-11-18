const Stack = require("./Stack");
/*using two stacks */
class Queue{
    #que = new Stack();
    enqueue(value){
        this.#que.push(value)
    }
    dequeue(){
        const tempStack = new Stack();
        /*shift all elements from queue to tempStack,
         pop an element and shift back all elements from
         tempStack to queue*/
        while(this.#que.size() > 0){
            tempStack.push(this.#que.pop())
        }
        const poppedElement = tempStack.pop();
        while(tempStack.size() > 0){
            this.#que.push(tempStack.pop())
        }
        return poppedElement;
    }
    front(){
        const tempStack = new Stack();
        while(this.#que.size() > 1){
            tempStack.push(this.#que.pop())
        }
        const frontElement = this.#que.peek();
        while(tempStack.size() > 0){
            this.#que.push(tempStack.pop())
        }
        return frontElement;
    }
    printQueue(){
        console.log(this.#que.printStack())
    }
    search(element){
        return this.#que.search(element);
    }
}
module.exports = Queue;