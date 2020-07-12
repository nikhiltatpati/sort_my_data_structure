import { Sort } from "./Sort";

export class StringClass extends Sort {
  data: string[];
  constructor(data: string) {
    super();
    this.data = data.split("");
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
    let temp: string;
    temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  print() {
    console.log(this.data);
  }
}
