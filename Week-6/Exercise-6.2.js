const spiralOrder = function (matrix) {
    let rowLength = matrix.length, colLength = matrix[0].length;
    let right = 0, down = colLength - 1, left = rowLength - 1, top = 0;
    let count = 0, flag = false;
    const result = [];
    while (true) {
        flag = false;
        for (let i = right; i < colLength - count; i++) {
            result.push(matrix[right][i])
            flag = true;
        }
        if (!flag)
            return result;
        flag = false;
        for (let j = right + 1; j < rowLength - count; j++) {
            result.push(matrix[j][down])
            flag = true;
        }
        if (!flag)
            return result;
        flag = false;
        for (let k = down - 1; k >= count; k--) {
            result.push(matrix[left][k])
            flag = true;
        }
        if (!flag)
            return result;
        flag = false;
        count++;
        for (let l = left - 1; l >= count; l--) {
            result.push(matrix[l][top])
            flag = true;
        }
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
