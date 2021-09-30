/** 
  leetcode地址：https://leetcode-cn.com/problems/4sum/
  给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] ：
  0 <= a, b, c, d < n
  a、b、c 和 d 互不相同
  nums[a] + nums[b] + nums[c] + nums[d] == target
  你可以按 任意顺序 返回答案 。

*/

var fourSum = function(nums, target) {
    if (nums.length < 4) return [];
    nums.sort(function(a,b){
        return a-b;
    });

    var map = {};
    var result = [];
    var sum;
    var key;
    for (var i=0; i<nums.length-3; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;

        var min = nums[i] + nums[i+1] + nums[i+2] + nums[i+3];
        if (min > target) break;  //最小的四个数加起来都太大，那么久彻底没戏了

        var max = nums[i] + nums[nums.length-1] + nums[nums.length-2] + nums[nums.length-3];
        if (max < target) continue;  //当前数加上其余最大的三个数，仍然比较小，那么说明当前数太小了


        for (var j=i+1; j<nums.length-2; j++) {
            var left = j + 1;
            var right = nums.length - 1;

            while(left < right) {
                sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    key =  '' + nums[i] + nums[j] + nums[left] + nums[right];
                    if (!map[key]) {
                        result.push([nums[i], nums[j], nums[left], nums[right]]);
                        map[key] = true;
                    }
                    left++;
                    right--; 
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    return result;
};