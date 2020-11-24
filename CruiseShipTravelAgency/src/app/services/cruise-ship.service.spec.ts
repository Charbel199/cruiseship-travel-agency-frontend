import { TestBed } from '@angular/core/testing';

import { CruiseShipService } from './cruise-ship.service';

describe('CruiseShipService', () => {
  let service: CruiseShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CruiseShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
