import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number;

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.counter = this.counterService.getCounter();
    console.log('init', this.counter);
  }

  increase(): void {
    this.counterService.increase();
    this.counter = this.counterService.getCounter();
  }

  decrease(): void {
    this.counterService.decrease();
    this.counter = this.counterService.getCounter();
  }

  reset(): void {
    this.counterService.reset();
    this.counter = this.counterService.getCounter();
  }
}
