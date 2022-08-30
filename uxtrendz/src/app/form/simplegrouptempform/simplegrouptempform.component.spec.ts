import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplegrouptempformComponent } from './simplegrouptempform.component';

describe('SimplegrouptempformComponent', () => {
  let component: SimplegrouptempformComponent;
  let fixture: ComponentFixture<SimplegrouptempformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplegrouptempformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplegrouptempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
