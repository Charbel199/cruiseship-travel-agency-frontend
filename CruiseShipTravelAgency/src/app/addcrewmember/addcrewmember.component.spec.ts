import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcrewmemberComponent } from './addcrewmember.component';

describe('AddcrewmemberComponent', () => {
  let component: AddcrewmemberComponent;
  let fixture: ComponentFixture<AddcrewmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcrewmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcrewmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
