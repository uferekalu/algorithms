// You are given the heads of two sorted linked lists
// list1
// and
// list2
// .
// Merge the two lists in a one sorted list. The list should be made by splicing
// together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Solution
 * You can merge two sorted linked lists in JavaScript by iterating through both 
 * lists and comparing nodes to build the merged list
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    // If one of the lists is not fully traversed, append the remaining nodes
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummyHead.next;
}

// Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);

// Print the merged list
let current = mergedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
