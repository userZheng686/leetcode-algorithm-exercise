/**
 leetcode地址:https://leetcode-cn.com/problems/generate-parentheses/
 题目描述：
 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 有效括号组合需满足：左括号必须以正确的顺序闭合。
 */
let res = [] 
var generateParenthesis = function(n) {
    res = []
    dfs(n,n,'')
    return res
};

var dfs = (left,right,str) => {
    if(left === 0 && right === 0) {
        res.push(str)
        return res
    }
    if(left > 0){
       dfs(left-1,right,str + '(') 
    }
    if(right > left){
        dfs(left,right-1,str+')')
    }
    
}