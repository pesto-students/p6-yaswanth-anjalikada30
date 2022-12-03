const Queue = require("./Queue");

const checkIfPathExists = (n, source, adjacencyList, destination) => {
    const visArr = new Array(n);
    visArr.fill(0, 0, n);
    const queue = new Queue();
    queue.enqueue(source);
    visArr[source] = 1;
    while (queue.size()) {
        const temp = queue.dequeue()
        for (const v of adjacencyList[temp]) {
            if (!visArr[v]) {
                //this means destination is in the same connected component
                if (v === destination)
                    return true
                queue.enqueue(v);
                visArr[v] = 1;
            }
        }
    }
    return false;
}
const validPath = function (n, edges, source, destination) {
    if (n === 1 || source === destination)
        return true
    const adjacencyList = [];
    for (let i = 0; i < n; i++)
        adjacencyList.push([])
    //form adjacency list from edges
    for (const [v1, v2] of edges) {
        adjacencyList[v1].push(v2);
        adjacencyList[v2].push(v1);
    }
    return checkIfPathExists(n, source, adjacencyList, destination);
};
console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2)); //true
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5)); //false

/*
    Time complexity - O(V + E)
    Space complexity - O(V)
 */