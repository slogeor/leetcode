/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var curr = new ListNode();
  var head = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  while (l1) {
    curr.next = l1;
    l1 = l1.next;
    curr = curr.next;
  }

  while (l2) {
    curr.next = l2;
    l2 = l2.next;
    curr = curr.next;
  }
  return head.next;
};


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function (l1, l2) {

};
