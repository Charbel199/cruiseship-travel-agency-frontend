import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerEmail: string;
  customerPassword: string;
  reviews: Array<string> = ['One of the best websites out there',
    'I had one of the most fun experience in my life',
    'ACG Cruises are the best cruises out there'];
  review: string = this.reviews[0];
  constructor(
    private router: Router,
    public customerService: CustomerService
  ) { }

  ngOnInit(): void {

  }


  login(): void {
    console.log(this.customerEmail);
    this.customerService.login(this.customerEmail, this.customerPassword).subscribe( res => {
        console.log('Logged in');
        this.router.navigate(['/profile']);
      }, error => {
        console.log('Error');
      },
      () => {
        console.log('Completed login');
        this.customerService.updateLoginStatus();
      });
  }

}
