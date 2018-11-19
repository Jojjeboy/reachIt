import { TestBed } from '@angular/core/testing';

import { TallyCounterService } from './tally-counter.service';

describe('TallyCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TallyCounterService = TestBed.get(TallyCounterService);
    expect(service).toBeTruthy();
  });
});
