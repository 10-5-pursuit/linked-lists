const { inspect } = require('util')

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor(head=null){
        this.head = head
    }

    addNode(data){
        const newNode = new Node(data)
        // If there is no head, this newNode will become the head
        if(!this.head){
            this.head = newNode
        } else {
            // Else we have to find the end of the list and add the newNode as the "next" property for the last node in the list
            let current = this.head

            // While current has a node that comes after current
            while(current.next){
                // We will reassign current to point to the node that comes after it
                current = current.next
            }
            current.next = newNode
        }
    }
}


const linkedList = new LinkedList()
linkedList.addNode(11)
linkedList.addNode(15)
linkedList.addNode(20)
linkedList.addNode(27)
console.log(inspect(linkedList, true, 10, true))
linkedList.head.next.next.next = linkedList.head.next
console.log(inspect(linkedList, true, 10, true))

 


