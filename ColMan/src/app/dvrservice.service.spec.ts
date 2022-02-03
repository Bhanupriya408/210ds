import { TestBed } from '@angular/core/testing';

import { DvrserviceService } from './dvrservice.service';

describe('DvrserviceService', () => {
  let service: DvrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DvrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
