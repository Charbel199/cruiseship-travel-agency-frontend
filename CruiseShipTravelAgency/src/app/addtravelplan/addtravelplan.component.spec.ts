import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtravelplanComponent } from './addtravelplan.component';

describe('AddtravelplanComponent', () => {
  let component: AddtravelplanComponent;
  let fixture: ComponentFixture<AddtravelplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtravelplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtravelplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
