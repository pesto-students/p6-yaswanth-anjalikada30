class Queue {
    #que = [];
    enqueue(value) {
        this.#que.push(value)
    }
    dequeue() {
        return this.#que.shift()
    }
    front() {
        return this.#que[0]
    }
    printQueue() {
        console.log(this.#que)
    }
    search(element) {
        return this.#que.indexOf(element) !== -1;
    }
    size(){
        return this.#que.length;
    }
}
module.exports = Queue;