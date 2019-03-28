import { TestBed } from '@angular/core/testing';

import { MohdService } from './mohd.service';

describe('MohdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MohdService = TestBed.get(MohdService);
    expect(service).toBeTruthy();
  });
});
