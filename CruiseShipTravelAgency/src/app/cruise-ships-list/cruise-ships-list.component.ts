import {Component, OnInit} from '@angular/core';
import {CruiseShipService} from '../services/cruise-ship.service';
import {CruiseShip} from '../models/cruise-ship';
import {TravelPlanDetailsService} from '../services/travel-plan-details.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cruise-ships-list',
  templateUrl: './cruise-ships-list.component.html',
  styleUrls: ['./cruise-ships-list.component.css']
})

export class CruiseShipsListComponent implements OnInit {
  ships = [];
  shipsPairs = [];
  shipTravelPlans = [];
  mystring = 'The Pegasus.jpg';


  constructor(
    public cruiseShipService: CruiseShipService,
    public router: Router
  ) {

  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllShips();
  }

  pushTravelPlanDetails(travelPlan): void {
    this.router.navigate(['/travelplan', travelPlan.travelPlanId], {
      queryParams: {
        departureDate: travelPlan.departureDate,
        shipId: travelPlan.shipId
      }
    });
  }

  getAllShips(): void {
    this.cruiseShipService.getAllCruiseShips().subscribe(res => {
        this.ships = res.data.cruiseships;
        var tempShips = [];
        this.shipsPairs = [];
        for (var i = 0; i < this.ships.length; i++) {
          if (i === this.ships.length - 1) {
            tempShips.push(this.ships[i]);
            this.shipsPairs.push(tempShips);
            tempShips = [];
            break;
          }
          if (i % 2 === 0) {
            tempShips.push(this.ships[i]);
          }
          if (i % 2 !== 0) {
            tempShips.push(this.ships[i]);
            this.shipsPairs.push(tempShips);
            tempShips = [];
          }
        }
        console.log(this.shipsPairs);
      }, error => {
      },
      () => {
        this.getAllTravelPlans();
      });
  }

  getAllTravelPlans(): void {
    for (var a = 0; a < this.ships.length; a++) {
      this.cruiseShipService.getCruiseShipTravelPlans(this.ships[a].shipId).subscribe(res => {
        this.shipTravelPlans.push(res.data.travelplans);
        console.log(res)
      })
    }

  }

}
