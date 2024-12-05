class Node {
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}


class DoubleLinkedList {
    constructor(head=null){
        this.head = head
        this.tail = head
    }

    addNode(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            // Look at the tail, and assign the next property to be the newNode
            this.tail.next = newNode
            // Then reassign the prev property of the newNode to be the current this.tail
            newNode.prev = this.tail
            // Then reassign the tail to be the newNode
            this.tail = newNode
        }
    }

    addToFront(data){
        const frontNode = new Node(data)
        if(!this.head){
            this.head = frontNode
            this.tail = frontNode
        } else {
            this.head.prev = frontNode
            frontNode.next = this.head
            this.head = frontNode
        }
    }
    toArray(){
        const arr = []
        let current = this.head
        while(current){
            arr.push(current.data)
            current = current.next
        }
        return arr
    }

    size(){
        return this.toArray().length
    }

    search(key){
        let current = this.head
        // Go through the list, if you find a node that matches the "key", return that node.
        // If not found, return null
        while(current){
            if(current.data === key){
                return current
            } else {
                current = current.next
            }
        }
        return null
    }

    clear(){
        this.head = null
        this.tail = null
    }

    getLast(){
        return this.tail
    }

    deleteNode(key){
        if(this.head.data === key){
            // Check if head is equal to tail (means it is the only node in the list)
            if(this.head === this.tail){
                this.tail = this.head.next
            }
            this.head = this.head.next
        }
        // incomplete...finish me!
    }
}
const doubleList = new DoubleLinkedList()
doubleList.addNode(23)
// doubleList.addNode(33)
// doubleList.addToFront(17)
// doubleList.deleteNode(17)
// console.log(doubleList.deleteNode(17))