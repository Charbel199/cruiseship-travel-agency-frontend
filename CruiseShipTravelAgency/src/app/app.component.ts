import { Component, OnInit } from '@angular/core';
import {CustomerService} from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CruiseShipTravelAgency';
  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this.customerService.updateLoginStatus();
  }

}
