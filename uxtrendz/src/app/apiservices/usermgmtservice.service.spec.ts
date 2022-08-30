import { TestBed } from '@angular/core/testing';

import { UsermgmtserviceService } from './usermgmtservice.service';

describe('UsermgmtserviceService', () => {
  let service: UsermgmtserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermgmtserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
