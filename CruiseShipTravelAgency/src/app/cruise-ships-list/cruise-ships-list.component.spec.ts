import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseShipsListComponent } from './cruise-ships-list.component';

describe('CruiseShipsListComponent', () => {
  let component: CruiseShipsListComponent;
  let fixture: ComponentFixture<CruiseShipsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseShipsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseShipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
