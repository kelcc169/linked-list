import ListNode from './ListNode';

class LinkedList<U> {
  constructor(
    private head = null as ListNode<U>
  ) {}

  add(data: U): void {
    let node = new ListNode<U>(data)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
  }

  deleteAt(index: number): U {
    if (this.head == null) {
      return null as U
    } else if (index == 0) {
      let data = this.head.data
      let oldHead = this.head
      this.head = this.head.next
      oldHead.next = null
      oldHead.data = null
      return data
    } else {
      let count = 0
      let current = this.head
      let previous = current
      while (count < index && current.next) {
        previous = current
        current = current.next
        count++
      }
      if (index > count) {
        return null as U
      } else {
        let data = current.data
        previous.next = current.next
        current.next = null
        current.data = null
        return data
      }
    }
  }

  insertAt(index: number, data: U): void {
    let node = new ListNode<U>(data)
    if (index === 0) {
      let oldHead = this.head
      node.next = oldHead
      this.head = node
    } else {
      let count = 0
      let current = this.head
      let previous = current
      while (count < index && current.next) {
        previous = current
        current = current.next
        count++
      }
      previous.next = node
      node.next = current
    }
    // The insertAt function uses the following logic:
    // 1. Find the node currently at the index of insertion and store a reference to it. Make sure to also keep track of the node before it, if present.
    // 2. If there is a previous element, reassign it’s **next** property to the node you are inserting.
    // 3. Assign the node currently at the index of insertion to the new node’s **next** property.
    // 4. Make sure to update the list’s **head** if necessary.
  }

  print(): void {
    if (this.head != null) {
      let arr: any = []
      let current = this.head
      while (current.next != null) {
        arr.push(current.data)
        current = current.next
      }
      arr.push(current.data)
      console.log(arr)
    } else {
      console.log('empty list')
    }
  }
}

// test
let linky = new LinkedList<string>()
linky.add('Hello, ');
linky.add('World!');
linky.add('Carlo')
linky.add('Larlo')
linky.add('Marlo')
linky.print();
linky.deleteAt(3);
linky.print();
linky.deleteAt(0);
linky.print();
linky.insertAt(0, 'Test');
linky.print();