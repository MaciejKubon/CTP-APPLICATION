import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3FormComponent } from './lab3-form.component';

describe('Lab3FormComponent', () => {
  let component: Lab3FormComponent;
  let fixture: ComponentFixture<Lab3FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lab3FormComponent]
    });
    fixture = TestBed.createComponent(Lab3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
