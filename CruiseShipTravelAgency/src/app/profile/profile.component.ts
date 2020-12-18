import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {ReservationService} from "../services/reservation.service";
import {TravelPlanService} from "../services/travel-plan.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  reservations;
  travelPlans = [];
  constructor(
    private customerService: CustomerService,
    private reservationService: ReservationService,
    private travelPlanService: TravelPlanService
  ) { }

  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe( res => {
      this.reservations = res.data.reservations;
      console.log(this.reservations);
      console.log(this.reservations[0].departureDate.substring(0,10));
      for(var i =0;i<this.reservations.length;i++)
      this.travelPlanService.getTravelPlan(this.reservations[i].reservationTravelPlanId).subscribe( res => {
        this.travelPlans.push(res.data.travelplans);
        console.log(this.travelPlans)
      });
    })
  }
  substringDate(str: string){
    return str.substring(0,10);
  }
}
