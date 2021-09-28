/**
 leetcode地址:https://leetcode-cn.com/problems/3sum/
 题目描述：
 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 注意：答案中不可以包含重复的三元组。
 */
var threeSum = function(nums) {
    var sol=[];
    var len=nums.length;
    nums.sort(function(a,b){return a-b});
    var i=0;
    for(i=0;i<len-2,nums[i]<=0;i++){
    	//去重复
        if(nums[i]==nums[i-1]){
            continue;
        }
        var target=-nums[i];
        var left=i+1;
        var right=len-1;
        while(left<right){
            var sum=nums[left]+nums[right];
            if(sum>target){
                right--;
            }
            else if(sum<target){
                left++;
            }
            else{
                sol.push([nums[i],nums[left],nums[right]]);
                //去重复
                while(nums[left]==nums[left+1]){
                    left++;
                }
                left++;
                //去重复
                while(nums[right]==nums[right-1]){
                    right--;
                }  
                right--;
            }
        }
    }
    return sol;
};