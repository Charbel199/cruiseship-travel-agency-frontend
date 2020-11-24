import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/customer';
import {CruiseShipService} from '../services/cruise-ship.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private cruiseShipService: CruiseShipService
  ) { }

  ngOnInit(): void {
  }




  testregister(): void{
    const customer: Customer = {
      customerFirstName: 'abedangular',
      customerLastName: 'lastnameangular',
      customerAddress: 'fanar',
      customerDateOfBirth: '2000',
      customerEmail: 'angularabedtester@yahoo.com',
      customerGender: 'M',
      customerTelephoneNumber: '03538123',
      customerPassword: 'angularpassword',
      customerId: 0
    };
    this.customerService.register(customer).subscribe(res => {
      console.log(res);
    },
      error => {},
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
}
