import { TestBed } from '@angular/core/testing';

import { TravelPlanDetailsService } from './travel-plan-details.service';

describe('TravelPlanDetailsService', () => {
  let service: TravelPlanDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelPlanDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
