const maxSubArray = function(nums) {
    /*
        used Kadane's algorithm
        1) add each value to sum while iterating
        2) if sum is greater than max replace max with sum
        3) if sum is less than zero, no need to carry. make it zero
     */
    let sum = 0, max = nums[0];
    nums.forEach(num=>{
        sum += num;
        if(sum > max)
            max = sum;
        if(sum < 0)
            sum = 0;
    })
    return max;
};
const arr = [1, 2, 3, 4, -10];
console.log("Max sum contiguous subarray - ", maxSubArray(arr))
/*
    Time complexity = O(n)
    Space complexity = O(1)
 */
