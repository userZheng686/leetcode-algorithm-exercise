/**
  leetcode 地址： https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
  题目如下：
  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
  难度：中等
 */
var lengthOfLongestSubstring = function(s) {
   let arr = [],max = 0
   for(let i=0;i<s.length;i++){
       let index = arr.indexOf(s[i])
       if(index !== -1){
           arr.splice(0,index + 1)
       }
       arr.push(s.charAt(i))
       max = Math.max(arr.length,max)
   }
   return max
   
};