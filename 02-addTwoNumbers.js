var listSum = function(node) {
    let res = 0;
    while (node) {
        res = res * 10 + node.val;
        node = node.next;
    }
    return res;
};

var addTwoNumbers = function (l1, l2) {
    const list1Sum = listSum(l1)
    const list2Sum = listSum(l2)
    let sum = list1Sum + list2Sum;
    let dummyNode = cur = new ListNode();
    while (sum > 0){
        const num = sum % 10;
        cur.next = new ListNode(num);
        cur = cur.next;
        sum = (sum - num) / 10
    }
    console.log(dummyNode.next.val);
    return dummyNode.next;
}