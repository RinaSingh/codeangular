import { TestBed } from '@angular/core/testing';

import { EmpagecalService } from './empagecal.service';

describe('EmpagecalService', () => {
  let service: EmpagecalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpagecalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
