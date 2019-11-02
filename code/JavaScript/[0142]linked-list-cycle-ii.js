/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
  * @description 判断链表是否有环
  * @param {ListNode} head
  * @return {ListNode}
  */
var hasCycle = function (head) {
  var fast = head;
  var slow = head;

  while (fast && slow && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return slow;
  }
  return null;
};

/**
 * @description Floyd 算法
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var fast = head;
  var slow = head;
  var pos = 0;

  let intersect = hasCycle(head);

  // 不存在环
  if (!intersect) return null;

  // 存在环
  var p1 = head;
  var p2 = intersect;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
};


/**
 * @description 哈希法
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle1 = function (head) {
  var curr = head;
  var set = new Set();

  while (curr) {
    if (!map.has(curr)) {
      map.add(curr);
    } else {
      return curr;
    }
    curr = curr.next;
  }
  return null;
};
