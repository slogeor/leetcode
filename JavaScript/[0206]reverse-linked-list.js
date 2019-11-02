// https://leetcode-cn.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代解法
var reverseList = function (head) {
  var pervNode = null;
  var currNode = head;

  while (currNode) {
    // 核心代码
    var nextTemp = currNode.next;
    currNode.next = pervNode;
    pervNode = currNode;
    currNode = nextTemp;
  }
  return pervNode;
};

// 递归解法
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  var p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
