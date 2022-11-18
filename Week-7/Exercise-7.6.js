const Queue = require("./QueueUsingStack");

const getQueryOutput = (n, query) => {
    const queue = new Queue();
    let result;
    for (let i = 0; i < query.length;) {
        if (query[i] === 1) {
            queue.enqueue(query[i + 1])
            /*if query is 1 move pointer by 2 steps*/
            i += 2;
        } else {
            result = queue.dequeue()
            console.log(result ? result : -1)
            i++;
        }
    }
}

getQueryOutput(4, [1, 2, 2, 2, 1, 4])