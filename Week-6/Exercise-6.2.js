const spiralOrder = function (matrix) {
    let rowLength = matrix.length, colLength = matrix[0].length;
    //take 4 variables for all 4 directions
    let right = 0, down = colLength - 1, left = rowLength - 1, top = 0;
    //take one variable for spiral count and flag to detect end of traversal 
    let count = 0, flag = false;
    //output array
    const result = [];
    while (true) {
        flag = false;
        //for right traversal 
        for (let i = right; i < colLength - count; i++) {
            result.push(matrix[right][i])
            flag = true;
        }
        //if flag is false which means end of elements in spiral order, so return result
        if (!flag)
            return result;
        flag = false;
         //for down traversal
        for (let j = right + 1; j < rowLength - count; j++) {
            result.push(matrix[j][down])
            flag = true;
        }
        //if flag is false which means end of elements in spiral order, so return result
        if (!flag)
            return result;
        flag = false;
        //for left traversal
        for (let k = down - 1; k >= count; k--) {
            result.push(matrix[left][k])
            flag = true;
        }
        //if flag is false which means end of elements in spiral order, so return result
        if (!flag)
            return result;
        flag = false;
        //increment count variable after traversing 3 directions
        count++;
        //for top traversal
        for (let l = left - 1; l >= count; l--) {
            result.push(matrix[l][top])
            flag = true;
        }
        //if flag is false which means end of elements in spiral order, so return result
        if (!flag)
            return result;
        right++;
        down--;
        left--;
        top++;
    }
};
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(arr))
