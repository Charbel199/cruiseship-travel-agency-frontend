import { Component, OnInit } from '@angular/core';
import {CruiseShipService} from '../services/cruise-ship.service';
import {TravelPlanService} from '../services/travel-plan.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  currentInput = '';
  cruiseShips = [];
  travelPlans = [];
  constructor(
    public cruiseShipService: CruiseShipService,
    public travelPlanService: TravelPlanService
  ) {
  }

  ngOnInit() {
    this.getAllCruiseShipsAndTravelPlans();
  }



  getAllCruiseShipsAndTravelPlans() {
    this.cruiseShipService.getAllCruiseShips().subscribe( res => {
      this.cruiseShips= res.data.cruiseships;
      for(var i = 0;i<this.cruiseShips.length;i++){
        this.cruiseShipService.getCruiseShipTravelPlans(this.cruiseShips[i].shipId).subscribe( res => {
          this.travelPlans.push(res.data.travelplans);
        })
      }
    });
  }





}
