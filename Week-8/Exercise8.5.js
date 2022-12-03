var findJudge = function(n, trust) {
    if(n === 1)
        return 1
    if(trust.length === 0)
        return -1;
    const degree = [];
    for (let i = 0; i <= n; i++)
        degree.push(0)
    for(let [a,b] of trust){
        degree[a]--;
        degree[b]++;
    }
    /*in-degree - out-degree = N - 1 become the judge */
    for(let i = 1; i < degree.length; i++){
        if(degree[i] === n-1)
            return i;
    }
    return -1;
};

/*
    Time complexity - O(n)
    Space complexity - O(n)
 */