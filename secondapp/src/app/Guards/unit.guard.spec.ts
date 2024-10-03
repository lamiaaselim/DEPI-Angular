import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unitGuard } from './unit.guard';

describe('unitGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
