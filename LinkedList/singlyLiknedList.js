

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {


        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this // return the added node
    }

    // pop => remove the last node from the  list
    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newtail = current
        while (current.next) {
            newtail = current
            current = current.next
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        return current;
    }


    // shift  => remove the first node  from the list
    shift() {

        if (!this.head) return undefined
        let temp = this.head;

        this.head = temp.next;
        this.length--
        if (this.length == 0) {
            this.tail = null

        }

        return temp;
    }
    //unshift => add new node at the begining of the list
    unshift(value){
        let newNode  = new Node(value);
        if(!this.head){
            this.head  = newNode;
            this.tail  = this.head
        }
        else{
            let temp  = this.head;
            this.head  = newNode;
            this.head.next  = temp;
        }
        this.length++;
        return this
    }
}


let list = new SinglyLinkedList()
list.push("23");
list.push(50)

console.log(list)
let removedNode = list.unshift(100)
console.log(removedNode, "node")
console.log(list)



