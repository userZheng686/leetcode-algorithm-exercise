/**
 leetcode地址:https://leetcode-cn.com/problems/3sum-closest/
 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 */
var threeSumClosest = function(nums, target) {
   nums = nums.sort((a,b) => {return a-b})
   let closetnum = nums[0] + nums[1] + nums[2]
   for(let i = 0;i<nums.length - 2;i++){
       let s = nums[i],l = i+1,r = nums.length-1
       while(l < r){
           let abs = nums[i] + nums[l] + nums[r]
           if(Math.abs(target - abs) < Math.abs(target - closetnum)){
               closetnum = abs
           }
           if(abs > target ){
               r--
           }else if(abs < target){
               l++
           }else {
               return target
           }
       }
   }
   return closetnum
};