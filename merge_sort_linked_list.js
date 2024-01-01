const LinkedList = require("./linked_list");

function merge_sort(linked_list) {
  //Sorts a linked list in ascending order
  //Recursively divide the linked list into sublists containing a single node
  //Repeatedly merge the sublists to produce sorted sublists until one remains
  //Returns a sorted linked list

  // Base case: if the list is empty or has only one element, it is already sorted
  if (linked_list.length() <= 1) {
    return linked_list;
  }

  // Find the middle node of the linked list
  const middleNode = findMiddle(linked_list);

  // Split the linked list into two halves
  const leftHalf = linked_list;
  const rightHalf = new LinkedList();
  rightHalf.head = middleNode.next;
  middleNode.next = null;

  // Recursively sort the sublists
  const sortedLeft = merge_sort(leftHalf);
  const sortedRight = merge_sort(rightHalf);

  // Merge the sorted sublists
  return merge(sortedLeft, sortedRight);
}

function findMiddle(linked_list) {
  let slowPointer = linked_list.head;
  let fastPointer = linked_list.head;

  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}

function merge(left, right) {
  const mergedList = new LinkedList();
  let leftNode = left.head;
  let rightNode = right.head;

  while (leftNode !== null && rightNode !== null) {
    if (leftNode.data < rightNode.data) {
      mergedList.append(leftNode.data);
      leftNode = leftNode.next;
    } else {
      mergedList.append(rightNode.data);
      rightNode = rightNode.next;
    }
  }

  // If there are remaining elements in the left or right list, append them
  while (leftNode !== null) {
    mergedList.append(leftNode.data);
    leftNode = leftNode.next;
  }

  while (rightNode !== null) {
    mergedList.append(rightNode.data);
    rightNode = rightNode.next;
  }

  return mergedList;
}

l = new LinkedList();
l.insertAtHead(34);
l.insertAtHead(22);
l.insertAtHead(62);
l.insertAtHead(72);
l.insertAtHead(20);

console.log(l);

const sorted_list = merge_sort(l);
console.log(sorted_list);
