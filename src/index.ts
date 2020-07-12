
import { NumberClass } from "./NumberClass";
import { StringClass } from "./StringClass";
import { Linked_List } from "./LinkedList";

const numberClass = new NumberClass([3, 6, 1, 9, 2, 5]);
numberClass.sort();

const stringClass = new StringClass("hello");
stringClass.sort();

const llist = new Linked_List();
llist.add(4);
llist.add(2);
llist.add(6);
llist.add(3);
llist.add(9);
llist.add(1);
llist.sort();
