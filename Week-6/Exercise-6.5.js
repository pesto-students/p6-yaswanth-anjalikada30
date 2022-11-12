const isPairWithDifferenceExists = (A, B) => {
    const map = new Map();
    let ans = 0;
    const res = []
    // for (let i = 0; i < A.length; i++) {
    //     for (let j = i + 1; j < A.length; j++) {
    //         if (A[i] - A[j] === B || (A[i] - A[j]) * (-1) === B)
    //             return 1;
    //     }
    // }
    // return 0;
    A.forEach(num => {
        if (map.has(num))
            map.set(num, map.get(num) + 1)
        else map.set(num, 1)
    })
    console.log(map.get(100))
    A.forEach(num => {
        if (B === 0) {
            if(map.get(num) === 2){
                ans = 1
                return;
            }
        } else {
            if (map.has(num - B)) {
                ans = 1
                return;
            }
        }
    })
    return ans;
}
const arr = [5, 10, 5, 2, 50, 80]
console.log(isPairWithDifferenceExists(arr, 0))