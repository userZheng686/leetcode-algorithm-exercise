/**
 leetcode地址：https://leetcode-cn.com/problems/string-to-integer-atoi/
 题目描述：
 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
 */
var myAtoi = function(s) {
    let max = Math.pow(2,31) -1
    let min = -Math.pow(2,31)
    s = s.trim()
    let s2 = parseInt(s)
    if(s2 > max){
        return max
    }else if(s2 < min){
        return min
    }
    else if(/^[+|-]?\d(\s+)\d+$/.test(s)){
        return (s[0] === '+' || s[0] === '-') ? s[1] : s[0]
    }else{
        s2 += ''
        let reg = /^-?\d+/
        if(reg.test(s2)){
            s2 = s2.match(/^-|\d+|$.?/g).join('')
            if(s2 > max){
                return max
            }else if(s2 < min){
                return min
            }else{
                return s2
            }
        }else{
            return 0
        }
    }
};