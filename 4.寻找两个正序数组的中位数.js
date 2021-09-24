/**
 题目地址： https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 题目描述：给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2)
    nums3.sort((a,b) => {
        if(a > b) {return 1}
        else if (a < b) {return -1}
        else{ return 0}
    })

    if(nums3.length % 2 && nums3.length !== 1){
        return nums3[Math.floor(nums3.length / 2)]
    }else if(nums3.length === 1){
        return nums3[0]
    }
    else{
        let s1 = nums3[(nums3.length / 2) - 1]
        let s2 = nums3[nums3.length / 2]
        return (s1 + s2) / 2
    }
};