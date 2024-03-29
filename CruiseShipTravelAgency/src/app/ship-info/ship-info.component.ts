import {Component, OnInit} from '@angular/core';
import {CruiseShipService} from "../services/cruise-ship.service";
import {Room} from "../models/room";
import {RoomApiResponse} from "../models/room-api-response";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ship-info',
  templateUrl: './ship-info.component.html',
  styleUrls: ['./ship-info.component.css']
})
export class ShipInfoComponent implements OnInit {
  rooms = [];
  Floors = [];
  NbFloors;
  ship;
  shipId;
  active = [];

  constructor(
    private route: ActivatedRoute,
    private cruiseShipService: CruiseShipService
  ) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.shipId = Number(this.route.snapshot.paramMap.get('id'))
    this.cruiseShipService.getCruiseShip(this.shipId).subscribe(res => {
      this.ship = res.data.cruiseship;
      this.NbFloors = res.data.cruiseship.shipNumberOfFloors
      this.active[0] = true;
      for (var i = 1; i < this.NbFloors; i++)
        this.active[i] = false;
      for (var i = 0; i < this.NbFloors - 1; i++)
        this.Floors[i] = "../../assets/ship" + this.shipId + "DeckPlan/deckFloor" + (i + 2) + ".svg";
    });
    this.cruiseShipService.getCruiseShipTravelPlanRooms(this.shipId, 1, '2020-11-30').subscribe(res => {
      this.rooms = res.data.rooms;
      this.rooms.sort(function (a, b) {
        return a.roomId - b.roomId
      });
      console.log(this.rooms);
    })

  }

  click(i): void {
    for(var j = 0; j< this.active.length; j++){
      this.active[j] = false;
    }
    this.active[i] = true;

  }

}
