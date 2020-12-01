import { Component, OnInit } from '@angular/core';
import {TravelPlanDetailsService} from '../services/travel-plan-details.service';
import {TravelPlan} from '../models/travel-plan';
import {TravelPlanService} from '../services/travel-plan.service';
import {Stop} from '../models/stop';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-travel-plan-details',
  templateUrl: './travel-plan-details.component.html',
  styleUrls: ['./travel-plan-details.component.css']
})
export class TravelPlanDetailsComponent implements OnInit {
  travelPlan = undefined;
  stops = [];
  googleCoordinatesLat = [];
  googleCoordinatesLong = [];
  travelPlanDuration = 0;
  lat: number;
  lng: number;
  constructor(
    private travelPlanService: TravelPlanService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      window.scrollTo(0, 0);
      console.log(Number(this.route.snapshot.paramMap.get('id')));
      this.travelPlan = this.travelPlanService.getTravelPlan( Number(this.route.snapshot.paramMap.get('id'))).subscribe(res =>{
        this.travelPlan = res.data.travelplans;
        console.log('Travel plan ', this.travelPlan);
        this.travelPlanService.getTravelPlanStops(this.travelPlan.travelPlanId).subscribe( res2 => {
            this.stops = res2.data.stops;
            this.lat = Number(this.stops[0].stopGoogleURL.split(',')[0]);
            this.lng =  Number(this.stops[0].stopGoogleURL.split(',')[1]);
            let googleCoordinate = [];
            for (const stop of this.stops ){
              this.travelPlanDuration += stop.stopDuration;
              googleCoordinate = stop.stopGoogleURL.split(',');
              this.googleCoordinatesLat.push( Number(googleCoordinate[0]));
              this.googleCoordinatesLong.push( Number(googleCoordinate[1]));
            }
            console.log('lat', this.lat);
            console.log('lng', this.lng);
            console.log(this.stops);
          }, error => {},
          () => {});
      });
  }


}
