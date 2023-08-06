/*
Given the head of a linked list, return the list after sorting it in ascending order.

Example A:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example B:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var getMidNodes = function(head){
  let fast = head, slow = head, prev = null;
  while(fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next
  }
  if(prev !== null){
    prev.next = null
  }
  return slow;
}

var mergeSort = function(left, right){
  // remember its a linked list not an array, which means only one head for each left and right we check
  // left is 1->3, right is 2-> 4, if we not make xx = xx.next, its just 1, not 3,
  // not array that we need to checl [1,3] with [2,4] together
  const dummyNode = new ListNode();
  let current = dummyNode;
  while(left !== null && right !== null){
    if(left.val < right.val){
      current.next = left;
      left = left.next
    } else {
      current.next = right;
      right = right.next
    }
    current = current.next
  }
  if(left !== null) current.next = left;
  else{current.next = right;}
  return dummyNode.next
}

var sortList = function(head) {
  // if null or no next, we dont need to compare and merge it
  // finally we need to split into list who only have 1 node
  // then we back to last layer to compare and merge it.
  if (head == null || head.next == null) return head;
  let midNode = getMidNodes(head);
  let left = sortList(head);
  let right = sortList(midNode);
  return mergeSort(left, right)
};

/*
first layer in General:
  // head: 1->4->2
  // Mid: 7->3->8->0

second layer in head:
head: 1
Mid: 4->2

third layer in head-head:

third layer in head-mid:
head: 4
Mid: 2
 */


const a = new ListNode(1);
const b = new ListNode(4);
const c = new ListNode(2);
const d = new ListNode(7);
const e = new ListNode(3);
const f = new ListNode(8);
const g = new ListNode(0);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const res = sortList(a);
console.log(res);

