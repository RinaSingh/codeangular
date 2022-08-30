import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindComponent } from './class-bind.component';

describe('ClassBindComponent', () => {
  let component: ClassBindComponent;
  let fixture: ComponentFixture<ClassBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
