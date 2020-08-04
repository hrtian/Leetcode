### [92\. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

Difficulty: **中等**


反转链表的前 _n_ 个节点。请使用一趟扫描完成反转。

**说明:**  
1 ≤ _n_ ≤ 链表长度。

**示例:**

```
输入: 1->2->3->4->5->NULL, n = 4
输出: 4->3->2->1->5->NULL
```


#### Solution

Language: **JavaScript**

```JavaScript
// recursion
let successor = null
​var reverseN = function(head, n) {
    if(n === 1) {
        successor =head.next
        return head
    }

    let newHead = reverseN(head.next);
    head.next.next = head;
    head.next = successor;
    return newHead;
};

var reverseN = function(head, n) {
    if(!head) {
        return head;
    }
    let dummy = prev = new ListNode
    dummy.next = head;

    head = prev.next;
    while(n > 1){
        n--
        let nex = head.next;
        head.next = nex.next;
        nex.next = prev.next;
        prev.next = nex;
    }
    return dummy.next;
}
```