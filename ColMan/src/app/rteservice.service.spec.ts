import { TestBed } from '@angular/core/testing';

import { RteserviceService } from './rteservice.service';

describe('RteserviceService', () => {
  let service: RteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
