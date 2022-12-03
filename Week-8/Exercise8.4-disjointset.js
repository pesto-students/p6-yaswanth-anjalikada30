class DisjointSet {
    #rank = [];
    #parent = [];
    #size = [];
    constructor(n) {
        this.#rank.fill(0, 0, n)
        for (let i = 0; i <= n; i++) {
            this.#rank.push(0)
            this.#parent[i] = i;
            this.#size[i] = 1
        }
    }
    findUPar(node) {
        if (node === this.#parent[node]) {
            return node;
        }
        //path compression
        this.#parent[node] = this.findUPar(this.#parent[node])
        return this.#parent[node];
    }
    unionByRank(u, v) {
        let ulp_u = this.findUPar(u);
        let ulp_v = this.findUPar(v);
        //if belongs to same component
        if (ulp_u === ulp_v)
            return;
        if (this.#rank[ulp_u] < this.#rank[ulp_v]) {
            //smaller gets attached to larger
            this.#parent[ulp_u] = ulp_v;
        } else if (this.#rank[ulp_u] > this.#rank[ulp_v]) {
            //smaller gets attached to larger
            this.#parent[ulp_v] = ulp_u;
        } else {
            //attach anyone to anyone
            this.#parent[ulp_v] = ulp_u;
            //increase rank of attached one
            this.#rank[ulp_u]++;
        }
    }
    unionBySize(u, v) {
        let ulp_u = this.findUPar(u);
        let ulp_v = this.findUPar(v);
        //if belongs to same component
        if (ulp_u === ulp_v)
            return;
        if (this.#size[ulp_u] < this.#size[ulp_v]) {
            //smaller gets attached to larger
            this.#parent[ulp_u] = ulp_v;
            //size increases by child's size
            this.#size[ulp_v] += this.#size[ulp_u]
        } else {
            //attach anyone to anyone
            this.#parent[ulp_v] = ulp_u;
            //size increases by child's size
            this.#size[ulp_u] += this.#size[ulp_v]
        }
    }
}

const ds = new DisjointSet(7);
ds.unionBySize(1, 2)
ds.unionBySize(2, 3)
ds.unionBySize(4, 5)
ds.unionBySize(6, 7)
ds.unionBySize(5, 6)
// if 3 and 7 same or not
if(ds.findUPar(3) === ds.findUPar(7))
    console.log('3 and 7-', true)
else console.log('3 and 7-', false)
ds.unionBySize(3, 7)
// if 3 and 7 same or not
if(ds.findUPar(3) === ds.findUPar(7))
    console.log('3 and 7-', true)
else console.log('3 and 7-', false)

/*
    Time complexity - O(4alpha)
    Space complexity - O(N)
 */