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
// console.log(inspect(linkedList, true, 10, true))
// Adding line below to create a cycle: 27 => 15
linkedList.head.next.next.next.next = linkedList.head.next
console.log(inspect(linkedList, true, 10, true))

 

const isThereACycle = (node) => {
    // Start slow at the head: this node will advance one at a time
    let slow = node
    // Start fast at the node after the head: this node will advance two at a time
    let fast = node.next

    // While neither node is null or a falsy value, continue iterating
    while(slow && fast){
        if(slow === fast){
            return true
        }
        // Move the pointers along
        slow = slow.next
        fast = fast.next?.next
    }
    return false
}


console.log(isThereACycle(linkedList.head))


// Two pointer w slow & fast pointers:
// - initialize a slow pointer to move 1 by 1 throughout the list (started at the first node in the list)
// - initialize a fast pointer to move by 2 throughout the list (started at the second node in the list)
// If either node is null => there is no cycle
// If the slow pointer is equal to the fast pointer => we found a cycle

// Nodes 11 15 20 27
// iteration 1: slow 11 fast 15
// iteration 2: slow 15 fast 27
// iteration 3: slow 20 fast 20