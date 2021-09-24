/**
 leetcode地址：
 题目描述：https://leetcode-cn.com/problems/zigzag-conversion/
 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let temp = []
  if(numRows === 1) return s
  for(let i=0;i<s.length;i++){
    let k = i % (2 * numRows - 2)
    if(k > (numRows - 1)){
        k = 2 * numRows -2 -k
    }
    temp[k] ? {} : temp[k] = ''
    temp[k] += s[i]
  }
  return temp.join('')
};