import { Component, OnInit} from '@angular/core';
import {TravelPlanService} from "../services/travel-plan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TravelPlanRating} from '../models/travel-plan-rating';
import {CruiseShipService} from '../services/cruise-ship.service';
import {CruiseShipRating} from '../models/cruise-ship-rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  review = '';
  rating = 0;
  entityId = 0;
  constructor(
    private travelPlanService: TravelPlanService,
    private cruiseShipService: CruiseShipService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  submit(){
    var url = this.router.url;
    var index = this.getPosition(url, '/', 2);
    var type = url.substring(1, index);
    var id = url.substr(index + 1, 1);

    if (type === 'shipInfo'){
      var cruiseShipRating: CruiseShipRating;
      cruiseShipRating = {
        shipRating: this.rating,
        shipCustomerReview: this.review
      };
      this.cruiseShipService.createCruiseShipRating(Number(id), cruiseShipRating).subscribe( res => {
        console.log(res);
      });
    }else if (type === 'travelplan'){
      var travelPlanRating: TravelPlanRating;
      travelPlanRating = {
        travelPlanRating: this.rating,
        travelPlanCustomerReview: this.review
      };
      this.travelPlanService.createTravelPlanRating(Number(id), travelPlanRating ).subscribe(res => {
        console.log(res);
      });
    }
    console.log(type);
    console.log(id);

  }
  getPosition(text, subString, i): number {
    return text.split(subString, i).join(subString).length;
  }
  setRating(rating: number): void{
  this.rating = rating;
  }
}
