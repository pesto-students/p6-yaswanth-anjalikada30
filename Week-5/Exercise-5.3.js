function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}
const arr = [1, 1, 2, 3, 3]
console.log(`has duplicate in ${arr} - `, hasDuplicate(arr))