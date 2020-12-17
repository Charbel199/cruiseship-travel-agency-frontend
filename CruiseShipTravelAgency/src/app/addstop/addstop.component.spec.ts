import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstopComponent } from './addstop.component';

describe('AddstopComponent', () => {
  let component: AddstopComponent;
  let fixture: ComponentFixture<AddstopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
