import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/customer';
import {CustomerService} from '../services/customer.service';
import {Router, Routes} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer: Customer = {
    customerFirstName: '',
    customerLastName: '',
    customerAddress: '',
    customerDateOfBirth: '',
    customerEmail: '',
    customerGender: '',
    customerTelephoneNumber: '',
    customerPassword: '',
    customerId: 0
  };
  dates = [];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    for (let i = 1940; i < 2007; i++) {
      this.dates.push(i);
    }
  }

  checkfirstname() {
    console.log(this.customer);
  }

  register() {
    this.customerService.register(this.customer).subscribe(res => {
          this.router.navigate(['/']);
      }, error => {
        console.log(error);
      },
      () => {
        this.customerService.updateLoginStatus();
      }
    );
  }
}
