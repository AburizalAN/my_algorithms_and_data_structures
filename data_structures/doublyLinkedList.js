class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
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

  printListReverse() {
    const array = []
    let currentNode = this.tail

    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.prev
    }

    return array
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }

    if (index <= 0) {
      return this.prepend(value)
    }

    const newNode = new Node(value)

    let leader = this.head
    for (let i = 0; i < index - 1; i++) {
      leader = leader.next
    }
    let follower = leader.next
    newNode.prev = leader
    newNode.next = follower
    leader.next = newNode
    follower.prev = newNode
    this.length++
    return this
  }

  remove(index) {
    if (index <= 0) {
      const restNode = this.head.next
      this.head = restNode
      this.length--
      return this
    }

    let leader = this.head

    for (let i = 0; i < index - 1; i++) {
      leader = leader.next
    }

    let newFollower = leader.next.next 

    leader.next = newFollower
    newFollower.prev = leader 
    this.length--
    return this
  }
}

const myLinkedList = new DoublyLinkedList(2)
console.log(myLinkedList.append(3))
console.log(myLinkedList.append(6))
console.log(myLinkedList.prepend(7))
console.log(myLinkedList.insert(3, 5))
console.log(myLinkedList.remove(2))
console.log(myLinkedList.printList())
console.log(myLinkedList.printListReverse())