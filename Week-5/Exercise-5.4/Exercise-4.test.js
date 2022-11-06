const { sum, diff, product } = require('./Exercise-4.js')

test('sum of 2 and 3 is 5', () => {
    expect(sum(2, 3)).toBe(5)
})

test('difference of 5 and 3 is 2', () => {
    expect(diff(5, 3)).toBe(2)
})

test('product of 2 and 3 is 6', () => {
    expect(product(2, 3)).toBe(6)
})