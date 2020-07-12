export abstract class Sort {
  abstract length: number;
  abstract swap(i: number, j: number): void;
  abstract compare(i: number, j: number): boolean | undefined;
  abstract print(): void;

  sort(): void {
    const length = this.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
    this.print();
  }
}
