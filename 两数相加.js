/**
 题目：两数相加
 地址: https://leetcode-cn.com/problems/add-two-numbers/
 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 请你将两个数相加，并以相同形式返回一个表示和的链表。
 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 难度 中等
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let res = new ListNode(0);
  let cur = res
  let pre = null
  let carry = 0
  let total
  while(l1 && l2){
      total = l1.val + l2.val + carry
      cur.val = total % 10
      carry = total >= 10 ? 1 : 0
      cur.next = (l1.next || l2.next || carry > 0) ? new ListNode(carry) : null
      l1 = l1.next
      l2 = l2.next
      cur = cur.next
  }

  while(l1){
      total = l1.val +  carry
      cur.val = total % 10
      carry = total >= 10 ? 1 : 0
      cur.next = (l1.next || carry > 0) ? new ListNode(carry) : null
      l1 = l1.next
      cur = cur.next
  }

  while(l2){
      total = l2.val +  carry
      cur.val = total % 10
      carry = total >= 10 ? 1 : 0
      cur.next = (l2.next || carry > 0) ? new ListNode(carry) : null
      l2 = l2.next
      cur = cur.next

  }

 
  return res
};