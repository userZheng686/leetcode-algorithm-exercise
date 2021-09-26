/**
 leetcode : https://leetcode-cn.com/problems/palindrome-number/
 题目描述：
 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

 */
//1.指针解决
var isPalindrome = function(x) {
  if(x < 0) return false
  if(x === 0) return true
  x += ''
  let i = 0
  let b = true
  
  while(i < (x.length) / 2){
      let s1 = x[i]
      let s2 = x[x.length - i - 1]
      if(s1 !== s2) {
          b = false
          break;
      }
      i++
  }
  return b
};

//2.余数解决
var isPalindrome = function(x) {
  if(x < 0) return false
  if(x === 0) return true
  let temp = x,y=0
  
  while(temp !== 0){
      y = y * 10 + temp % 10
      temp = parseInt(temp / 10)
  }
  return y === x
};

//3 字符串反转
var isPalindrome = function(x) {
  if(x < 0) return false
  if(x === 0) return true
  return Array.from(x + '').reverse().join('') === x + ''
};