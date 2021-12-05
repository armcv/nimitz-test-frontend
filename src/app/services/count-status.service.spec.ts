import { TestBed } from '@angular/core/testing';

import { CountStatusService } from './count-status.service';

describe('CountStatusService', () => {
  let service: CountStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
