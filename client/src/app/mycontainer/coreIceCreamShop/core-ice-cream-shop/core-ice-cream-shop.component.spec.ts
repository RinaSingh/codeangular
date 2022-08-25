import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreIceCreamShopComponent } from './core-ice-cream-shop.component';

describe('CoreIceCreamShopComponent', () => {
  let component: CoreIceCreamShopComponent;
  let fixture: ComponentFixture<CoreIceCreamShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreIceCreamShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreIceCreamShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
