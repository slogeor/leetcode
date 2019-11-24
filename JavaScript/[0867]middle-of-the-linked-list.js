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
var middleNode = function (head) {
  var currHead = new ListNode(0);
  currHead.next = head;
  var fast = currHead;
  var slow = currHead;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast) {
    return slow.next;
  } else {
    return slow;
  }
};
