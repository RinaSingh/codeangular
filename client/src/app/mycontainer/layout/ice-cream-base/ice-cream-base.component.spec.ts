import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamBaseComponent } from './ice-cream-base.component';

describe('IceCreamBaseComponent', () => {
  let component: IceCreamBaseComponent;
  let fixture: ComponentFixture<IceCreamBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceCreamBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
