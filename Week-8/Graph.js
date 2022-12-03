class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
        this.adjacencyList = new Map()
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, new Set());
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1))
            this.addVertex(vertex1)
        if (!this.adjacencyList.has(vertex2))
            this.addVertex(vertex2)
        this.adjacencyList.get(vertex1).add(vertex2)
        this.adjacencyList.get(vertex2).add(vertex1)
    }
    display(){
        for(const [vertex, edges] of this.adjacencyList)
            console.log(vertex + "->"+[...edges])
    }
    hasEdge(vertex1, vertex2){
        return this.adjacencyList.get(vertex1).has(vertex2) && 
        this.adjacencyList.get(vertex2).has(vertex1)
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList.get(vertex1).delete(vertex2);
        this.adjacencyList.get(vertex2).delete(vertex1);
    }
    removeVertex(vertex){
        if(!this.adjacencyList.has(vertex))
            return;
        for(let adjacentVetex of this.adjacencyList.get(vertex)){
            this.removeEdge(vertex, adjacentVetex)
        }
        this.adjacencyList.delete(vertex)
    }
}

module.exports = Graph;
