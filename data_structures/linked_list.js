class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value)
    if (index <= 0) return this.prepend(value)

    const newNode = new Node(value)
    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }

    newNode.next = currentNode.next
    currentNode.next = newNode 
    this.length++
  }

  remove(index) {
    let currentNode = this.head

    if (index <= 0) {
      const restNode = this.head.next
      this.head = restNode
      this.length--
      return this
    }

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }

    currentNode.next = currentNode.next.next
    this.length--
  }

  printList() {
    const array = []
    let currentNode = this.head

    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }

    return array
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

//before loop
// before 2, 3, 6, 99

//end of loop will be like this
// first = 99, 6, 3, 2, 3, 6, 99, null
// second = 99, 6, 3, 2, 3, 6, 99, null
// temp = null

const myLinkedList = new LinkedList(2)
myLinkedList.append(3)
myLinkedList.append(6)
myLinkedList.prepend(7)
console.log(myLinkedList.printList())
myLinkedList.insert(8, 99)
console.log(myLinkedList.printList())
myLinkedList.remove(0)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())
