import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindComponent } from './style-bind.component';

describe('StyleBindComponent', () => {
  let component: StyleBindComponent;
  let fixture: ComponentFixture<StyleBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
