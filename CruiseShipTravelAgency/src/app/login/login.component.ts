import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customerEmail: string;
  customerPassword: string;
  constructor(
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(

  ): void {
  }
  login(): void {
    this.customerService.login(this.customerEmail, this.customerPassword).subscribe( res => {
      console.log('Logged in');
      this.router.navigate(['/']);
    }, error => {
      console.log('Error');
      console.log(error);
      },
      () => {
      console.log('Completed login');
      this.customerService.updateLoginStatus();
      });
  }

  goToRegister(): void{
    this.router.navigate(['/register']);
  }
}
