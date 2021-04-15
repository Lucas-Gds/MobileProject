import { TestBed } from '@angular/core/testing';

import { DetectPlatformServiceService } from './detect-platform-service.service';

describe('DetectPlatformServiceService', () => {
  let service: DetectPlatformServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectPlatformServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
