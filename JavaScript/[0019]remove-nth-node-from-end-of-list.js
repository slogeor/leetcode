/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 防御
  if (n === 0 || !head) return null;

  // 新建头指针
  var currHead = new ListNode('0');
  currHead.next = head;

  // 遍历求长度
  var len = 0;
  var curr = currHead;
  while (curr.next) {
    curr = curr.next;
    len++;
  }

  var curr1 = currHead;
  var i = 0;
  while (curr1.next) {
    if (i === len - n) {
      curr1.next = curr1.next.next;
      return currHead.next;
    } else {
      curr1 = curr1.next;
      i++;
    }
  }
};

var removeNthFromEnd1 = function (head, n) {
  // 防御
  if (n === 0 || !head) return null;
  // 新建头指针
  var currHead = new ListNode('0');
  currHead.next = head;

  var first = currHead;
  var second = currHead;

  for (var i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return currHead.next;
};
