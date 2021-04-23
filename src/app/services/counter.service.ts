import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterInitValue: number = 0;
  private counter: number;

  constructor() {
    this.counter = this.counterInitValue;
  }

  increase(): void {
    this.counter += 1;
  }

  decrease(): void {
    this.counter -= 1;
  }

  reset(): void {
    this.counter = this.counterInitValue;
  }

  getCounter(): number {
    return this.counter;
  }
}
