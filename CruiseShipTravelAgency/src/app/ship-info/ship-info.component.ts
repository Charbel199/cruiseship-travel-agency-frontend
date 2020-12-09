import { Component, OnInit } from '@angular/core';
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
  rooms = [] ;
  Floors =[];
  NbFloors;
  shipId;

  constructor(
    private route: ActivatedRoute,
    private cruiseShipService : CruiseShipService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.shipId = Number(this.route.snapshot.paramMap.get('id'))
    this.cruiseShipService.getCruiseShip(this.shipId).subscribe(res =>{
      this.NbFloors = res.data.cruiseship.shipNumberOfFloors
      for(var i =0; i<this.NbFloors-2; i++)
      this.Floors[i] = "../../assets/ship" + this.shipId + "DeckPlan" + "deckFloor" + (i+2);
    });
    this.cruiseShipService.getCruiseShipTravelPlanRooms(this.shipId, 1, '2020-11-30').subscribe(res => {
      this.rooms = res.data.rooms;
      console.log(res);
      this.rooms[0].roomStatus = "reserved";
      this.updateReserved(this.rooms[0].roomId);
      /*for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomClass === "Royal Suite") {
          if(this.rooms[i].roomStatus === "free"){
          this.updateReserved(this.rooms[i].roomId);
          this.rooms[i].roomStatus = "reserved";
          break;}
          console.log(this.rooms[i].roomClass)
          console.log(this.rooms[i].roomId);
        }
      }*/
    })

  }

  updateReserved(id): void{
    var room = document.getElementById("R" + id);
    room.classList.add("reserved");
  }

  removeReserved(id): void{
    var room = document.getElementById("R" + id);
    room.classList.remove("reserved");
  }

}
