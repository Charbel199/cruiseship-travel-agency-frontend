import { Component, OnInit } from '@angular/core';
import {CruiseShipService} from '../services/cruise-ship.service';
import {CruiseShip} from '../models/cruise-ship';

@Component({
  selector: 'app-cruise-ships-list',
  templateUrl: './cruise-ships-list.component.html',
  styleUrls: ['./cruise-ships-list.component.css']
})
export class CruiseShipsListComponent implements OnInit {

  ship : CruiseShip
  shipInfos : Array<String>
  constructor(public cruiseShipService: CruiseShipService,
  ) {

  }

  ngOnInit(): void {
  }

  getShipInfo(shipId) : string {
    this.cruiseShipService.getCruiseShip(shipId)
      .subscribe(res => {
        console.log(res)
        this.ship = res.data.cruiseship
      });
    console.log(this.ship.shipEntertainmentInfo);
    return this.ship.shipEntertainmentInfo;
  }


}
