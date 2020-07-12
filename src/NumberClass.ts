import { Sort } from "./Sort";

export class NumberClass extends Sort {
  constructor(public data: number[]) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(i: number, j: number): boolean {
    if (this.data[i] > this.data[j]) {
      return true;
    }
    return false;
  }

  swap(i: number, j: number) {
    let temp: number;
    temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  print() {
    console.log(this.data);
  }
}
