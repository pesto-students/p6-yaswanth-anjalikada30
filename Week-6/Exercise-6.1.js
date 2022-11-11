const maxSubArray = function(nums) {
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
