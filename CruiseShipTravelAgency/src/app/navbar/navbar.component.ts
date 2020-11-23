import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }


  testcruiseship(): void{
    this.customerService.testcruiseship().subscribe(res => {
       console.log(res.data.cruiseships);
      });
  }

  testregister(): void{
    const customer: Customer = {
      customerFirstName: 'abedangular',
      customerLastName: 'lastnameangular',
      customerAddress: 'fanar',
      customerDateOfBirth: '2000',
      customerEmail: 'angularabed@yahoo.com',
      customerGender: 'M',
      customerTelephoneNumber: '03538123',
      customerPassword: 'angularpassword',
      customerId: 0
    };
    this.customerService.testregister(customer).subscribe(res => {
      console.log(res);
    });
  }

  testlogin(): void{
    const options = {
      customerEmail: 'angularabed@yahoo.com',
      customerPassword: 'angularpassword'
    };
    this.customerService.testlogin(options.customerEmail, options.customerPassword).subscribe(res => {
      console.log(res);
    });

  }


  testlogout(): void{
    this.customerService.testlogout().subscribe(res => {
      console.log(res);
    });
  }
}
