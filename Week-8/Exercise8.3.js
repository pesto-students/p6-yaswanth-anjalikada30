const Queue = require("./queue");

const levelOrder = function(root) {
    const queue = new Queue();
    const result = [];
    if (!root)
        return result;
    queue.enqueue(root)
    let length;
    let levelNodes = [];
    while (queue.size()) {
        levelNodes = [];
        length = queue.size();
        // loop through each level of nodes,
        // add them to levelNodes and add 
        // their left and right to queue
        for (let i = 0; i < length; i++) {
            const temp = queue.dequeue()
            levelNodes.push(temp.val)
            if (temp.left)
                queue.enqueue(temp.left)
            if (temp.right)
                queue.enqueue(temp.right)
        }
        result.push(levelNodes)
    }
    return result;
};

/*
    Time complexity - O(n)
    Space complexity - O(n)
 */