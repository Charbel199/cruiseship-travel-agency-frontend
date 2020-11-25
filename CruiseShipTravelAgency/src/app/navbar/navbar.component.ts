import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/customer';
import {CruiseShipService} from '../services/cruise-ship.service';
import {TravelPlanService} from '../services/travel-plan.service';
import {Rating} from '../models/rating';
import {CruiseShipRating} from '../models/cruise-ship-rating';
import {TravelPlanRating} from '../models/travel-plan-rating';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private cruiseShipService: CruiseShipService,
    private travelPlanService: TravelPlanService
  ) { }

  ngOnInit(): void {
  }

  testcruiseships(): void {
    this.cruiseShipService.getAllCruiseShips().subscribe(res=>{
      console.log(res);
    });
  }
  testcruiseship(): void {
    this.cruiseShipService.getCruiseShip(1).subscribe(res=>{
      console.log(res);
    });
  }
  testcrewmembers(): void {
    this.cruiseShipService.getCruiseShipCrewMembers(1).subscribe(res=>{
      console.log(res);
    });
  }
  testcruiseshipratings(): void {
    this.cruiseShipService.getCruiseShipRatings(1).subscribe(res=>{
      console.log(res);
    });
  }

  testcruiseshiptravelplans(): void {
    this.cruiseShipService.getCruiseShipTravelPlans(1).subscribe(res=>{
      console.log(res);
    });
  }

  testmakecruiserating(): void{
    const rating: CruiseShipRating = {
      shipCustomerReview : 'Very nice ship i am from angular',
      shipRating: 4
    }
    this.cruiseShipService.createCruiseShipRating(1, rating).subscribe(res => {
      console.log(res);
    })
  }

  testmaketravelplanrating(): void{
    const rating: TravelPlanRating = {
      travelPlanCustomerReview : 'Very nice travelplan i am from angular',
      travelPlanRating: 4
    }
    this.travelPlanService.createTravelPlanRating(1, rating).subscribe(res => {
      console.log(res);
    })
  }

  testregister(): void{
    const customer: Customer = {
      customerFirstName: 'abedangular',
      customerLastName: 'lastnameangular',
      customerAddress: 'fanar',
      customerDateOfBirth: '2000',
      customerEmail: 'george@yahoo.com',
      customerGender: 'M',
      customerTelephoneNumber: '03538123',
      customerPassword: 'angularpassword',
      customerId: 0
    };
    this.customerService.register(customer).subscribe(res => {
      console.log(res);
    },
      error => {console.log(error);},
      () => {
      this.customerService.updateLoginStatus();
      });
  }

  amiloggedin(): void{
    console.log('IS LOGGED IN: ');
    console.log(this.customerService.getIsLoggedIn());
    console.log('CUSTOMER: ');
    console.log(this.customerService.getLoggedInCustomer());
  }

  login(): void{
    const options = {
      customerEmail: 'angularabed@yahoo.com',
      customerPassword: 'angularpassword'
    };
    this.customerService.login(options.customerEmail, options.customerPassword).subscribe(res => {
      console.log(res);
    },
      error => {},
      () => {
      this.customerService.updateLoginStatus();
      });
  }


  logout(): void{
    this.customerService.logout().subscribe(res => {
      console.log(res);
    },
      error => {},
      () => {
      this.customerService.updateLoginStatus();
      });
  }

  testsingletravelplan(): void {
    this.travelPlanService.getTravelPlan(1).subscribe( res =>{
      console.log(res);
    });
  }

  testtravelplanrating(): void {
    this.travelPlanService.getTravelPlanRating(1).subscribe( res =>{
      console.log(res);
    });
  }

  testtravelplanstops(): void {
    this.travelPlanService.getTravelPlanStops(1).subscribe( res =>{
      console.log(res);
    });
  }
  testtravelplanrooms(): void {
    this.cruiseShipService.getCruiseShipTravelPlanRooms(1,1,'2020-12-19').subscribe(res => {
      console.log(res);
    })
  }
  testgetstop(): void {
    this.travelPlanService.getStop(1).subscribe(res=> {
      console.log(res);
    })
  }
  testgetroom(): void {
    this.cruiseShipService.getRoom(1).subscribe(res => {
      console.log(res);
    })
  }
}
