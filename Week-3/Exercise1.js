function memoize(...args) {
    //first argument is function to be memoized
    const expensiveFunction = args[0];
    //from second argument all are arguments to be passed to memoized function
    const args1 = args.slice(1);
    const cache = new Map();

    return function (...args2) {
        /*sending both arguments which are passed while creating memoize and while calling 
        function returned by memoize*/
        const params = [...args1, ...args2];
        /*making sorted array of arguments as key so that even order of arguments changes 
        while passing, value from cache can be returned*/
        const key = getSortedArray(...params).toString();
        if (!cache.has(key))
            cache.set(key, expensiveFunction(...params))
        return cache.get(key);
    }
}

const getSortedArray = (...arr) => arr.sort((a, b) => a - b);

const add = (...args) => args.reduce((acc, curr) => acc + curr, 0);

const memoizeAdd = memoize(add);
console.log(memoizeAdd(10, 20)) //returns 30
console.log(memoizeAdd(10)) //returns 10
console.log(memoizeAdd(10, 20, 30)) //returns 60
console.log(memoizeAdd(10, 20)) //returns 30 without computing
console.log(memoizeAdd(20, 10)) //returns 30 without computing

const memoizeAddAndIncrementBy10 = memoize(add,10);
console.log(memoizeAddAndIncrementBy10(10, 20)) //returns 40
console.log(memoizeAddAndIncrementBy10(10)) //returns 20
console.log(memoizeAddAndIncrementBy10(10, 20, 30)) //returns 70
console.log(memoizeAddAndIncrementBy10(10, 20)) //returns 40 without computing
console.log(memoizeAddAndIncrementBy10(20, 10)) //returns 40 without computing