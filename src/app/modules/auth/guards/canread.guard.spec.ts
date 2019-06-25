import { TestBed, async, inject } from '@angular/core/testing';

import { CanreadGuard } from './canread.guard';

describe('CanreadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanreadGuard]
    });
  });

  it('should ...', inject([CanreadGuard], (guard: CanreadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
