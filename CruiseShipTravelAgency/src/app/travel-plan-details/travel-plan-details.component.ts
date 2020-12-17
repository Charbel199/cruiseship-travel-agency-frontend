import {Component, OnInit} from '@angular/core';
import {TravelPlanDetailsService} from '../services/travel-plan-details.service';
import {TravelPlan} from '../models/travel-plan';
import {TravelPlanService} from '../services/travel-plan.service';
import {Stop} from '../models/stop';
import {Router, ActivatedRoute, Route} from '@angular/router';
import {CustomerService} from "../services/customer.service";
import {CruiseShipService} from "../services/cruise-ship.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-travel-plan-details',
  templateUrl: './travel-plan-details.component.html',
  styleUrls: ['./travel-plan-details.component.css']
})
export class TravelPlanDetailsComponent implements OnInit {
  travelPlan = undefined;
  planId: number;
  ratings = [];
  travelPlanRating = 0;
  stops = [];
  googleCoordinatesLat = [];
  googleCoordinatesLong = [];
  travelPlanDuration: number = 0;
  defined: boolean = false;
  lat: number;
  lng: number;
  shipId: number;
  departureDate;
  date;

  constructor(
    private travelPlanService: TravelPlanService,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private cruiseShipService: CruiseShipService
  ) {
  }

  ngOnInit(): void {
    this.date = new DatePipe('en-US');
    window.scrollTo(0, 0);
    this.planId = Number(this.route.snapshot.paramMap.get('id'));
    this.route.queryParams.subscribe(params => {
      this.shipId = params['shipId']
      this.departureDate = params['departureDate']
    });
    this.travelPlan = this.travelPlanService.getTravelPlan(this.planId).subscribe(res => {
      this.travelPlan = res.data.travelplans;
      this.travelPlanService.getTravelPlanRating(this.travelPlan.travelPlanId).subscribe(res3 => {
        this.ratings = res3.data.ratings;
        for (var i = 0; i < this.ratings.length; i++) {
          this.travelPlanRating += this.ratings[i].rating;
          console.log(this.ratings[i].rating);
        }
        console.log("Rating before division: " + this.travelPlanRating);
        this.travelPlanRating = this.travelPlanRating / this.ratings.length;
        console.log("Rating after division: " + this.travelPlanRating);
        this.travelPlanRating *= 10;
        this.travelPlanRating = Math.round(this.travelPlanRating);
        this.travelPlanRating /= 10
        this.defined = !Number.isNaN(this.travelPlanRating)

      })
      console.log('Travel plan ', this.travelPlan);
      this.travelPlanService.getTravelPlanStops(this.travelPlan.travelPlanId).subscribe(res2 => {
          this.stops = res2.data.stops;
          this.lat = Number(this.stops[0].stopGoogleURL.split(',')[0]);
          this.lng = Number(this.stops[0].stopGoogleURL.split(',')[1]);
          let googleCoordinate = [];
          for (const stop of this.stops) {
            this.travelPlanDuration += stop.stopDuration;
            googleCoordinate = stop.stopGoogleURL.split(',');
            this.googleCoordinatesLat.push(Number(googleCoordinate[0]));
            this.googleCoordinatesLong.push(Number(googleCoordinate[1]));
          }
          console.log('lat', this.lat);
          console.log('lng', this.lng);
          console.log(this.stops);
        }, error => {
        },
        () => {
        });
    });
  }

  navigate() {
    console.log("date: " + this.travelPlan.departureDate);
    this.router.navigate(['/book'], {
      queryParams: {
        departureDate: this.departureDate,
        planId: this.planId,
        shipId: this.shipId
      }
    });
  }
}
