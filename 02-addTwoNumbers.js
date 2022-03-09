// Wrong!!!!!!!
// var listSum = function(node) {
//     let res = '';
//     while (node) {
//         res = res + node.val.toString();
//         node = node.next;
//     }
//     return parseFloat(res.split('').reverse().join(''));
// };

// var addTwoNumbers = function (l1, l2) {
//     const list1Sum = listSum(l1)
//     const list2Sum = listSum(l2)
//     console.log({list1Sum,list2Sum})
//     let sum = list1Sum + list2Sum;
//         console.log({sum})


//     if(sum === 0) {
//         return new ListNode(0);
//     }
//     let dummyNode = cur = new ListNode();
//     while (sum > 0){
//         const num = sum % 10;
//         cur.next = new ListNode(num);
//         cur = cur.next;
//         sum = (sum - num) / 10
//     }
//     return dummyNode.next;
// }


var addTwoNumbers = function (l1, l2) {
    let dummyNode = cur = new ListNode();
    let addOne = 0;
    while(l1 || l2 || addOne) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let sum = v1 + v2 + addOne;
        cur.next = new ListNode( sum % 10 );
        addOne = parseInt( sum / 10 )
        cur = cur.next;
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    return dummyNode.next;
}