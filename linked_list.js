class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0; // Initialize the length to 0
  }

  // Other methods for your linked list implementation...

  // Method to get the length of the linked list
  get length() {
    return this._length;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }
}

module.exports = LinkedList;

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
