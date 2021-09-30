/**
  leetcode地址：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
  进阶：你能尝试使用一趟扫描实现吗？
 */
var removeNthFromEnd = function(head, n) {
    let list = new ListNode()
    let copyHead = head,length = 0
    let cur = list,copycur
    let i = 0
    while(copyHead){
        length++
        copyHead = copyHead.next
    }

    if(length === 1){
        return null
    }

    while(head){
        i++
        if(i === length+1-n){
            if(i === length){
                copycur.next = null
                head = head.next
            }else{
                cur.val = head?.next?.val
                cur.next = head?.next?.next ? new ListNode() : null
                head = head.next?.next
            } 
        }else{
            cur.val = head.val
            cur.next = head.next ? new ListNode() : null
            head = head.next
        }
        copycur = cur
        cur = cur?.next
    }
    return list
};