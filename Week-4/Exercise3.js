const Fib = (n) => ({
    [Symbol.iterator]() {
        let a = 0, b = 1, i = 0;
        return {
            next() {
                if (i >= n) return { done: true }
                if (i <= 1) {
                    return { value: i++, done: false }
                }
                const value = a + b;
                a = b;
                b = value;
                i++;
                return { value: value, done: false }
            }
        }
    }
})
console.log("The Fibonacci series is:")
for (const el of Fib(10)) {
    console.log(el)
}