import { TestBed } from '@angular/core/testing';

import { CoreIceCreamShopService } from './core-ice-cream-shop.service';

describe('CoreIceCreamShopService', () => {
  let service: CoreIceCreamShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreIceCreamShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
