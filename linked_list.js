class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    appendNode(newNode) {
        let node = this.head
        if (node === null) {
            // It is an empty list
            this.head = newNode
            return
        }
        while(node.next) {
            node = node.next
        }

        node.next = newNode
    }

    insertAt(index, newNode) {
        let node = this.head;
    if(index==0) {
        newNode.next = node;
        this.head = newNode;
        return;
    }
    while(--index){
        if(node.next!==null)
            node = node.next;
        else
            throw Error("Index Out of Bound");
    }
    let tempVal = node.next;
    node.next = newNode;
    newNode.next = tempVal;
    }

    printList(){
        let node = this.head;
        process.stdout.write("HEAD->")
        while (node) {
            process.stdout.write(node.data + "->");
            node = node.next;
        }
        console.log("NULL");
    }
}



let myList = new LinkedList()
let node = new Node(5)

myList.appendNode(node)
myList.appendNode(new Node(11))
myList.appendNode(new Node(17))
myList.insertAt(0, new Node(19))
myList.insertAt(4, new Node(20))
console.log(myList.printList())
