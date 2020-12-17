import { Component, OnInit } from '@angular/core';
import {TravelPlan} from "../models/travel-plan";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-addtravelplan',
  templateUrl: './addtravelplan.component.html',
  styleUrls: ['./addtravelplan.component.css']
})
export class AddtravelplanComponent implements OnInit {
  travelPlan: TravelPlan = {
    travelPlanPictureURL: '',
    travelPlanDescription: '',
    travelPlanPrice: undefined,
    travelPlanRegion: '',
    travelPlanId: 0,
    departureDate: '',
    returnDate: '',
    shipId: 0
  };
  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
  }

  addTravelPlan(){
    console.log(this.travelPlan.travelPlanPictureURL)
    this.travelPlan.travelPlanPictureURL = ('../../assets/' + this.travelPlan.travelPlanPictureURL).replace('C:\\fakepath\\','');

    this.adminService.addTravelPlan(this.travelPlan).subscribe( res => {
        console.log(res);
      this.travelPlan = {
        travelPlanPictureURL: '',
        travelPlanDescription: '',
        travelPlanPrice: 0,
        travelPlanRegion: '',
        travelPlanId: 0,
        departureDate: '',
        returnDate: '',
        shipId: 0
      };
      })
  }

}
