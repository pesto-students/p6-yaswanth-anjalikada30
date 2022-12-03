const getInorder = (root, inorder) => {
    if(!root)
        return;
    getInorder(root.left, inorder)
    inorder.push(root.val)
    getInorder(root.right, inorder)
}
const isValidBST = (root) => {
    const inorder = [];
    getInorder(root, inorder); 
    let temp = inorder[0];
    for(let i = 1; i < inorder.length; i++){
        if(temp >= inorder[i])
            return false;
        else temp = inorder[i]
    }
    return true;
};

/*
    Time complexity - O(n)
    Space complexity - O(n)
 */