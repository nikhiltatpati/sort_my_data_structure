import { Sort } from "./Sort";

class lNode {
  next: lNode | null = null;
  constructor(public data: number) {}
}

export class Linked_List extends Sort {
  head: lNode | null = null;
  add(data: number): void {
    const new_node = new lNode(data);
    if (this.head == null) {
      this.head = new_node;
      return;
    } else {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = new_node;
    }
  }

  get length(): number {
    let pointer = this.head;
    let len = 0;
    while (pointer) {
      len += 1;
      pointer = pointer.next;
    }
    return len;
  }

  print(): void {
    let pointer = this.head;
    while (pointer) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
  }

  swap(i: number, j: number): void {
    if (i == j) {
      return;
    }

    let index_i = 0;

    let index_j = 0;

    let prev_1 = null;
    let curr_1 = this.head;
    while (curr_1 && index_i != i) {
      prev_1 = curr_1;
      curr_1 = curr_1.next;
      index_i += 1;
    }

    let prev_2 = null;
    let curr_2 = this.head;
    while (curr_2 && index_j != j) {
      prev_2 = curr_2;
      curr_2 = curr_2.next;
      index_j += 1;
    }

    if (!curr_1 || !curr_2) {
      return;
    }

    if (prev_1) {
      prev_1.next = curr_2;
    } else {
      this.head = curr_2;
    }

    if (prev_2) {
      prev_2.next = curr_1;
    } else {
      this.head = curr_1;
    }
    let temp = curr_2.next;
    curr_2.next = curr_1.next;
    curr_1.next = temp;
  }

  compare(i: number, j: number){
    let index_i = 0;

    let index_j = 0;

    let curr_1 = this.head;
    while (curr_1 && index_i != i) {
      curr_1 = curr_1.next;
      index_i += 1;
    }

    let curr_2 = this.head;
    while (curr_2 && index_j != j) {
      curr_2 = curr_2.next;
      index_j += 1;
    }

    if (!curr_1 || !curr_2) {
      return;
    }

    if (curr_1.data > curr_2.data) {
      return true;
    } else {
      return false;
    }
  }
}
