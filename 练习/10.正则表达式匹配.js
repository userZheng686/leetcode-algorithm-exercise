/**
    leetcode地址：https://leetcode-cn.com/problems/regular-expression-matching/
    给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
    '.' 匹配任意单个字符
    '*' 匹配零个或多个前面的那一个元素
    所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 */
//手扣正则实现版本
var isMatch = function(s, p) {
   let reg = null
   if(/^\.\*$/.test(p)){
       return true
   }else if(/\*.\*/g.test(p) || /\*|\./.test(p)){
       return new RegExp(`^${p}$`,'g').test(s)
   }else if(/\*\./.test(p)){
       let arr = []
       if(/^\w+?\*/g.test(p)){
           arr = p.match(/\w+\*|\W{1}\w+?|\*\w+\*|./g)
       }else if(/.\*?\W$/.test(p)){
           return new RegExp(`^${p}$`,'g').test(s)
       }else {
            arr = p.match(/.\*?/g)
       }
       return substrStr(arr,s)
   }else if(p.includes(s) && p.length === s.length ){
       return true
   }else{
       return new RegExp(`^${p}$`,'g').test(s)
   }
};

var substrStr = function(arr,s){
    let i = 0
    for(let i = 0;i<arr.length;i++){
        if(s.length === 0 && arr[i] === '') return true
        let match = s.match(new RegExp(`^${arr[i]}`,'g'))
        if(match){
            s = s.substring(match[0].length)
        }
    }
    if(s.length){
        return false
    }else{
        return true
    }
}


//一行代码过
var isMatch2 = function(s, p) {
   let p1 = new RegExp(`^${p}$`,'g')
   return (s.match(p1) || []).includes(s)
};