const isPairWithDifferenceExists = (nums, k) => {
    const map = new Map();
    let ans = 0;
    //find frequency of each element 
    nums.forEach(num => {
        if (map.has(num))
            map.set(num, map.get(num) + 1)
        else map.set(num, 1)
    })
    nums.forEach(num => {
        if (k === 0) {
            //if k is zero check if any element has count greater than 1 
            if (map.get(num) > 1) {
                ans = 1
                return;
            }
        } else {
            //check if difference of current value and k is present in map
            if (map.has(num - k)) {
                ans = 1
                return;
            }
        }
    })
    return ans;
}
const arr = [5, 10, 5, 2, 50, 80, 5]
console.log(isPairWithDifferenceExists(arr, 78))