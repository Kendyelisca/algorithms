const LinkedList = require("./linked_list");

const ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.insertAtHead(40);

ll.removeHead();

console.log(ll);
console.log(ll.getByIndex(0).value);
