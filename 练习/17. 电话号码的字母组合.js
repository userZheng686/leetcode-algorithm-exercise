/**
 leetcode地址：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 题目描述：
 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */
var letterCombinations = function(digits) {
    const hash = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
    const len = digits.length
    if(!len) return []
    let res = [], path = ''
    backtracking(0)
    function backtracking(k){
        if(path.length==len){
            res.push(path)
            return
        }
        for(let i = 0; i < hash[digits[k]].length; i++){
            path+=hash[digits[k]][i]
            backtracking(k+1)
            path = path.substr(0,path.length-1)
        }
    }
    return res
};