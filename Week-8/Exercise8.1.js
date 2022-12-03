const maxDepth = function(node) {
    if(!node)
        return 0;
    //traverse left and get max height
    let lh = maxDepth(node.left);
    //traverse right and get max height
    let rh = maxDepth(node.right);
    //max height is one plus max of left and right subtree heights
    return 1 + Math.max(lh, rh)
};

/*
    Time complexity - O(n)
    Space complexity - O(n)
*/