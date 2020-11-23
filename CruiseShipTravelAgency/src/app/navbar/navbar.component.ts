import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';

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


  test(): void{
    this.customerService.test().subscribe(res => {
      if (res){
       console.log(res.data.cruiseships);
        }
      });
  }

}
