/**
 leetcode 地址：https://leetcode-cn.com/problems/reverse-integer/
 题目描述：
 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 假设环境不允许存储 64 位整数（有符号或无符号）。

 */
var reverse = function(x) {
  let n = '',n1 = x
  if(x === 0) return 0
  if(x < 0) x *= -1
  while(x)
  {
     n += x % 10 + ''
     x  = parseInt(x /= 10)
  }
  if( n > Math.pow(2,31) || n < -Math.pow(2,31)-1) return 0
  n1 > 0 ? {} : n = '-' + n 
  return n 
};