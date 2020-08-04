### [92\. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

Difficulty: **中等**


反转从位置 _m_ 到 _n_ 的链表。请使用一趟扫描完成反转。

**说明:**  
1 ≤ _m_ ≤ _n_ ≤ 链表长度。

**示例:**

```
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
```


#### Solution

Language: **JavaScript**

```JavaScript
// recursion
​var reverseBetween = function(head, m, n) {
    if(m === 1) {
        return reverseN(head, n)
    }

    head.next = reverseBetween(head.next, m-1, n-1)
    return head;
}

// iteration
​var reverseBetween = function(head, m, n) {
    if(!head) {
        return head
    }

    let dummy = prev = new ListNode
    dummy.next = head;

    n = n - m;
    while(m > 1) {
        m--;
        prev = prev.next;
    }
   
   head = prev.next;
   while(n){
       n--
       let nex = head.next;
       head.next = nex.next;
       nex.next = prev.next;
       prev.next = nex;
   }
    return dummy.next;
};

// 拆链表，组装
var reverseBetween = function(head, m, n) {
    if(!head) {
        return head
    }

    let dummy = prev = new ListNode
    dummy.next = head;

    n = n - m + 1;
    while(m > 1) {
        head = head.next; 
        prev = prev.next;
        m--;
    }
    
    let mid = head;
    let tmp = null;
    while(head && n) {
        let next = head.next;
        head.next = tmp;
        tmp = head;
        head = next;
        n--;
    }

    prev.next = tmp;
    mid.next = head;
    return dummy.next
};
```