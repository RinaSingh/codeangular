import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTempFormComponent } from './final-temp-form.component';

describe('FinalTempFormComponent', () => {
  let component: FinalTempFormComponent;
  let fixture: ComponentFixture<FinalTempFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalTempFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
