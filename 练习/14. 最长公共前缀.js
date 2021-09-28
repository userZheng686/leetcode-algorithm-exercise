/**
 leetcode: https://leetcode-cn.com/problems/longest-common-prefix/
 编写一个函数来查找字符串数组中的最长公共前缀。
 如果不存在公共前缀，返回空字符串 ""。
 */
var longestCommonPrefix = function(strs) {
 if(strs.length === 0 || strs[0] === '') return ''
 else if(strs.length === 1) return strs[0]
  strs = strs.sort()
  let res = '',min = strs.shift(),max = strs.pop()
  while(!max.startsWith(min)){
      min = min.substring(0,min.length - 1)
  }
  return min
};