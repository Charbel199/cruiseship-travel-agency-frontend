import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {TravelPlanService} from "../services/travel-plan.service";
import {CruiseShipService} from "../services/cruise-ship.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-reservation-confirmation',
  templateUrl: './reservation-confirmation.component.html',
  styleUrls: ['./reservation-confirmation.component.css']
})
export class ReservationConfirmationComponent implements AfterViewInit {

  travelPlanID;
  travelPlan;
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
  roomTypesArray;
  roomClass;
  roomPicture;
  roomPrice;
  roomCapacity;
  travelPlanPrice;
  reservation: Reservation;


  constructor(private travelPlanService: TravelPlanService,
              private cruiseShipService: CruiseShipService,
              private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {

    this.route.queryParams.subscribe(params => {
      this.shipId = params['shipId'],
        this.departureDate = params['departureDate'],
        this.travelPlanID = params['planId'],
        this.roomClass = params['roomClass']
      this.cruiseShipService.getCruiseShip(this.shipId).subscribe(res => {
        this.shipName = res.data.cruiseship.shipName;
      })
      this.travelPlanService.getTravelPlan(this.travelPlanID).subscribe(res => {
        this.travelPlan = res.data.travelplans;
        this.travelPlanName = this.travelPlan.travelPlanRegion;
        this.travelPlanPrice = this.travelPlan.travelPlanPrice;
      })
      this.cruiseShipService.getCruiseShipTravelPlanRooms(this.shipId, this.travelPlanID, this.departureDate).subscribe(res => {
          this.rooms = res.data.rooms;
          this.rooms.sort(function (a, b) {
            return a.roomId - b.roomId
          });
          for (var r = 0; r < this.rooms.length; r++) {
            if (this.rooms[r].roomStatus == "reserved")
              this.updateReserved(this.rooms[r].roomId)
          }
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
          this.roomTypesArray = Array.from(this.roomTypes)
          for (var k = 0; k < this.roomTypes.size; k++) {
            var current = this.roomTypesArray[k]
            if (current.roomClass == this.roomClass) {
              this.roomPicture = current.roomPictureURL;
              this.roomCapacity = current.roomCapacity;
              this.roomPrice = current.roomPrice;
            }
          }
        }
      )
    });


  }

  reserve(roomClass) {
    for (var i = 0; i < this.rooms.length; i++) {
      var room = this.rooms[i];
      if (room.roomClass === roomClass) {
        if (room.roomStatus === "free") {
          this.reservation = {
            reservationRoomId: room.roomId,
            reservationTravelPlanId: Number(this.travelPlanID),
            reservationPrice: this.travelPlanPrice + room.roomPrice,
            departureDate: this.departureDate.slice(0,10)
          };
          this.reservationService.createReservation(this.reservation).subscribe(res => {
            console.log(res);
          });
          console.log(this.reservation);
          this.updateReserved(room.roomId);
          break;
        }
      }
    }
  }

  updateReserved(id): void {
    var room = document.getElementById("R" + id);
    console.log(room);
    room.classList.add("reserved");
  }

}


