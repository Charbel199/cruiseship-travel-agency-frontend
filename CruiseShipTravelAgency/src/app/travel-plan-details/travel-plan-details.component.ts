import { Component, OnInit } from '@angular/core';
import {TravelPlanDetailsService} from '../services/travel-plan-details.service';
import {TravelPlan} from '../models/travel-plan';
import {TravelPlanService} from '../services/travel-plan.service';
import {Stop} from '../models/stop';

@Component({
  selector: 'app-travel-plan-details',
  templateUrl: './travel-plan-details.component.html',
  styleUrls: ['./travel-plan-details.component.css']
})
export class TravelPlanDetailsComponent implements OnInit {
  travelPlan: TravelPlan = undefined;
  stops: Array<Stop> = [];
  constructor(
    private travelPlanDetailsService: TravelPlanDetailsService,
    private travelPlanService: TravelPlanService
  ) { }

  ngOnInit(): void {
      this.travelPlan = this.travelPlanDetailsService.getCurrentTravelPlan();
      console.log('In details: ', this.travelPlan);
      this.travelPlanService.getTravelPlanStops(this.travelPlan.travelPlanId).subscribe( res => {
        this.stops = res.data.stops;
        console.log(this.stops);
      }, error => {},
        () => {});
  }


}
