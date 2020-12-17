import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../services/customer.service';
import {AdminService} from "../services/admin.service";

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
    private customerService: CustomerService,
    private adminService: AdminService
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

  loginAsAdmin(): void {
    this.adminService.loginAsAdmin(this.customerEmail,this.customerPassword).subscribe(res =>{
      console.log('Logged in');
      this.router.navigate(['/admin']);
    },error => {},
      ()=>{
      this.customerService.IS_LOGGED_IN = true;
      this.customerService.IS_ADMIN = true;
      })
  }
}
