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
  travelPlan = undefined;
  stops = [];
  travelPlanDuration = 0;
  lat = 51.678418;
  lng = 7.809007;
  constructor(
    private travelPlanDetailsService: TravelPlanDetailsService,
    private travelPlanService: TravelPlanService
  ) { }

  ngOnInit(): void {
      window.scrollTo(0, 0);
      this.travelPlan = this.travelPlanDetailsService.getCurrentTravelPlan();
      console.log('In details: ', this.travelPlan);
      this.travelPlanService.getTravelPlanStops(this.travelPlan.travelPlanId).subscribe( res => {
        this.stops = res.data.stops;
        for( let stop of this.stops ){
          this.travelPlanDuration += stop.stopDuration;
        }
        console.log(this.stops);
      }, error => {},
        () => {});
  }


}
