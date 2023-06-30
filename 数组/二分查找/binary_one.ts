function  binary (nums: number [], target: number) {
    let left: number = 0; // 左边界
    let right: number = nums.length - 1 // 有边界 左闭、右闭
    // while循环
    while (left <= right) {
        let middle: number = left + ((right - left) >> 1)
        if(nums[middle] > target) { // 中间值大于目标值 left区间查找
            right = middle - 1 // 更新右区间
        } else if(nums[middle] < target) { // 中间值小于目标值 right区间查找
            left = middle + 1
        } else if(nums[middle] === target) {
            return middle
        } else  {
            return -1
        }
    }
    return -1
}
// 测试
const nums = [-1, 0 ,2 , 1,3,5,8,9]
console.log(binary(nums, 0)) // 1
console.log(binary(nums, -1)) // 0
console.log(binary(nums, 5)) // 5
console.log(binary(nums, 3)) // 4
console.log(binary(nums, 100)) // -1
