import {Component, OnInit} from '@angular/core';
import {TravelPlanService} from "../services/travel-plan.service";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {CruiseShipService} from '../services/cruise-ship.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  travelPlanID;
  travelPlanName;
  departureDate;
  shipId;
  parentRoute;
  roomClasses = new Set;
  roomPictures = new Set;
  roomTypes = new Set;
  roomDescriptions = new Set;
  roomCapacities = [];
  roomPrices = [];
  rooms = [];
  oldRoomTypesLength = 0;
  shipName;
  date = new DatePipe('en-US');

  constructor(private travelPlanService: TravelPlanService,
              private cruiseShipService: CruiseShipService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.shipId = params['shipId'],
        this.departureDate = params['departureDate'],
        this.travelPlanID = params['planId']
    });
    this.cruiseShipService.getCruiseShip(this.shipId).subscribe(res => {
      this.shipName = res.data.cruiseship.shipName;
    })
    this.travelPlanService.getTravelPlan(this.travelPlanID).subscribe(res => {
      this.travelPlanName = res.data.travelplans
      this.travelPlanName = this.travelPlanName.travelPlanRegion
    })
    this.cruiseShipService.getCruiseShipTravelPlanRooms(this.shipId, this.travelPlanID, this.departureDate).subscribe(res => {
        this.rooms = res.data.rooms;
        this.rooms.sort(function (a, b) {
          return a.roomId - b.roomId
        });
        console.log(this.rooms);
        for (var i = 0; i < this.rooms.length; i++) {
          this.oldRoomTypesLength = this.roomClasses.size;
          this.roomClasses.add(this.rooms[i].roomClass);
          this.roomPictures.add(this.rooms[i].roomPictureURL);
          this.roomDescriptions.add(this.rooms[i].roomInfo);
          if (this.roomClasses.size > this.oldRoomTypesLength) {
            this.roomCapacities.push(this.rooms[i].roomCapacity);
            this.roomPrices.push(this.rooms[i].roomPrice);
          }
        }
        for (var j = 0; j < this.roomClasses.size; j++) {

          this.roomTypes.add({
            roomClass: Array.from(this.roomClasses)[j],
            roomPicture: Array.from(this.roomPictures)[j],
            roomDescription: Array.from(this.roomDescriptions)[j],
            roomCapacity: this.roomCapacities[j],
            roomPrice: this.roomPrices[j]
          })
        }
        console.log(this.roomTypes);
      }
    )


  }

  back() {
    this.router.navigate(['/travelplan', this.travelPlanID], {
      queryParams: {
        departureDate: this.departureDate,
        shipId: this.shipId
      }
    });
  }

  startReservation(roomClass) {
    console.log("starting reservation...");
    this.router.navigate(["/book"], {
      relativeTo: this.route,
      queryParams: {
        roomClass: roomClass
      },
      queryParamsHandling: 'merge',
    });

  }
}



