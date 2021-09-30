/**
 leetcode地址:https://leetcode-cn.com/problems/valid-parentheses/
 题目描述：
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合
 */
var isValid = function(s) {
    let stack = []
    for(let i =0;i<s.length;i++){
        if(s[i] === '(') stack.push(')')
        else if(s[i] === '{') stack.push('}')
        else if(s[i] === '[') stack.push(']')
        else {
            if(stack.length > 0){
                if(stack.pop() !== s[i]){
                    return false
                }
            }else{
                return false
            }
        }
    }
    return stack.length === 0
};