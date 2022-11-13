// Using recursion
// const getSubsetSums = (nums, index, ds, sum, sums) => {
//     if (ds.length === 3) {
//         sums.push(sum)
//         return;
//     }
//     if (index >= nums.length) {
//         return;
//     }
//     getSubsetSums(nums, index + 1, [...ds, nums[index]], sum + nums[index], sums);
//     getSubsetSums(nums, index + 1, [...ds], sum, sums);
//     return sums;
// }
// var threeSumClosest = function (nums, target) {
//     const subsetSums = getSubsetSums(nums, 0, [], 0, [])
//     let closest = subsetSums[0], absDiff1, absDiff2;
//     for (let sum of subsetSums) {
//         if (sum === target) {
//             return sum;
//         }
//         absDiff1 = target - sum;
//         absDiff2 = target - closest
//         if (absDiff1 < 0) absDiff1 *= -1;
//         if (absDiff2 < 0) absDiff2 *= -1;
//         if (absDiff1 < absDiff2)
//             closest = sum
//     }
//     return closest;
// };
//Brute force approach - using 3 for loops
// const threeSum = (nums, target) => {
//     let closest = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 //console.log([nums[i], nums[j], nums[k]])
//                 let sum = nums[i] + nums[j] + nums[k];
//                 if (sum === target) {
//                     return sum;
//                 }
//                 if (Math.abs(target - sum) < Math.abs(target - closest))
//                     closest = sum
//             }
//         }
//     }
//     return closest
// }
const threeSum2 = (nums, target) => {
    let closest, start, end, currentSum;
    //sort the array
    nums.sort((a, b) => a - b);
    // fix first element and using two-pointer approach for remaining array
    for (let i = 0; i < nums.length - 2; i++) {
        start = i + 1;
        end = nums.length - 1;
        while (start < end) {
            currentSum = nums[i] + nums[start] + nums[end];
            // if currentSum is closer than closest then replace closest with currentSum
            if (closest === undefined || Math.abs(currentSum - target) < Math.abs(closest - target))
                closest = currentSum;
            //if currentSum is the target return it
            if (currentSum === target)
                return closest;
            if (currentSum > target)
                end--; // if currentSum is greater than target decrement end to get lesser sum
            else start++; // if currentSum is less than target increment start to get greater sum
        }
    }
    return closest
}
console.log(threeSum2([-1, 2, 1, -4], 1))
/*
    Time complexity - O(n^2)
    Space complexity - O(1)
 */