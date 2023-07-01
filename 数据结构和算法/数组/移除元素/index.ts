const removeElement = (nums:number [], val:number) =>{
    // 定义慢指针
    let slowIndex:number = 0
    // 执行for循环
    for(let fastIndex=0; fastIndex<nums.length; fastIndex++) {
        // 删除
        if(nums[fastIndex] !== val) {
            nums[slowIndex] = nums[fastIndex] // 删除
            slowIndex++ // 慢指针的长度要累计相加
        }
    }
    return slowIndex;
}
const nums = [1,2,3,2,3,2,2,2,2,7,5,6,9]
// 测试
console.log(removeElement(nums, 2))
