import { TestBed } from '@angular/core/testing';

import { LoadingsService } from './loadings.service';

describe('LoadingsService', () => {
  let service: LoadingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
