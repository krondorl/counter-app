import { TestBed } from '@angular/core/testing';
import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('exists', () => {
    expect(service).toBeTruthy();
  });

  it('returns with an initial value', () => {
    expect(service.getCounter()).toEqual(service.counterInitValue);
  });

  it('increases the counter', () => {
    service.reset();

    let counterResetValue = service.getCounter();

    service.increase();

    let counterIncreaseValue = service.getCounter();

    expect(counterIncreaseValue).toBeGreaterThan(counterResetValue);
    expect(counterIncreaseValue).toEqual(counterResetValue + 1);
  });

  it('decreases the counter', () => {
    service.reset();

    let counterResetValue = service.getCounter();

    service.decrease();

    let counterDecreaseValue = service.getCounter();

    expect(counterDecreaseValue).toBeLessThan(counterResetValue);
    expect(counterDecreaseValue).toEqual(counterResetValue - 1);
  });

  it('resets the counter', () => {
    service.reset();

    expect(service.getCounter()).toEqual(service.counterInitValue);
  });

  it('returns the counter', () => {
    expect(service.getCounter()).toEqual(jasmine.any(Number));
  });
});
