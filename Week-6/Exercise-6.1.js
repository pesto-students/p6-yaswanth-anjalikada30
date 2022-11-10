const swap = (index1, index2, nums) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
const sortColors = function (nums) {
    /*
        using dutch national flag algorithm,
        take 3 pointers low and mid from start and high from end
        0 - low-1 -> 0's
        high+1 - nums.length-1 -> 2's 
     */
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        switch (nums[mid]) {
            case 0:
                /*If mid element is zero swap with low and increment both */
                swap(low++, mid++, nums);
                break;
            case 1:
                /*If mid element is one increment mid */
                mid++;
                break;
            case 2:
                /*If mid element is two swap with high and decrement high */
                swap(mid, high--, nums);
                break;

        }
    }
};
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums)
console.log(nums)