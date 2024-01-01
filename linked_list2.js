class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //insertion at the beginning (Push)

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //insertion at the end
  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  //insertion after a specific node
  insertAfterNode(prevNode, data) {
    if (!prevNode) {
      console.log("Previous node is not in the list.");
      return;
    }

    const newNode = new Node(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  //Delete by value
  deleteNode(key) {
    let current = this.head;
    if (current && current.data === key) {
      this.head = current.next;
      return;
    }

    let prev = null;
    while (current && current.data !== key) {
      prev = current;
      current = current.next;
    }

    if (!current) {
      return;
    }
    prev.next = current.next;
  }

  //Delete by position

  deleteNodeAtPosition(position) {
    if (!this.head) {
      return;
    }

    let temp = this.head;
    if (position === 0) {
      this.head = temp.next;
      return;
    }

    let prev = null;
    let count = 0;
    while (temp && count < position) {
      prev = temp;
      temp = temp.next;
      count++;
    }

    if (!temp) {
      return;
    }
    prev.next = temp.next;
  }

  // Traversal and display

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data + " -> ");
      current = current.next;
    }
    console.log("null");
  }

  //Merge sort

  mergeSort(head) {
    if (!head || !head.next) {
      return head; // Base case: List is empty or has one element
    }

    // Find the middle of the list
    const middle = this.findMiddle(head);
    const nextToMiddle = middle.next;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.insertAtBeginning(10);
myLinkedList.insertAtEnd(20);
myLinkedList.insertAfterNode(myLinkedList.head.next, 13);
myLinkedList.deleteNode(13);
myLinkedList.deleteNodeAtPosition(1);
myLinkedList.display();
