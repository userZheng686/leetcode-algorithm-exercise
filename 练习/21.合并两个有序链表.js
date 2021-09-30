/**
 leetcode地址：https://leetcode-cn.com/problems/merge-two-sorted-lists/
 题目描述：
 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */
var mergeTwoLists = function(l1, l2) {
  if(l1 === null ) return l2
  if(l2 === null) return l1
  let list = new ListNode()
  let pre = list
  while(l1 && l2){
      if(l1.val > l2.val){
         pre.next = l2 || l1.next ? new ListNode() : null
         pre.val = l2.val
         l2 = l2.next
      }else if(l1.val < l2.val){
         pre.next = l2.next || l1 ? new ListNode() : null
         pre.val = l1.val
         l1 = l1.next
      }else{
          pre.next = new ListNode()
          pre.val = l1.val
          pre = pre.next
          pre.next =  l2.next || l1.next ? new ListNode() : null
          pre.val = l2.val
          l1 = l1.next
          l2 = l2.next
      }
      pre = pre.next
  }

  while(l1){
    pre.next = l1.next ? new ListNode() : null
    pre.val = l1.val
    l1 = l1.next 
    pre = pre.next    
  }

  while(l2){
    pre.next = l2.next ? new ListNode() : null
    pre.val = l2.val
    l2 = l2.next 
    pre = pre.next    
  }

  return list
};
