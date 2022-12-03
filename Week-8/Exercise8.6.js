const getAllPaths = (graph, ds, allPaths, n) => {
    if(ds[ds.length-1] === n-1){
        allPaths.push(ds) 
        return;
    }
    const curr = graph[ds[ds.length-1]]; 
    for( let i = 0; i < curr.length; i++){
        getAllPaths(graph, [...ds, curr[i]], allPaths, n)
    }
}
var allPathsSourceTarget = function(graph) {
    const allPaths = [];
    getAllPaths(graph, [0], allPaths, graph.length)
    return allPaths;
};

/*
    Time complexity - 
    Space complexity - 
*/