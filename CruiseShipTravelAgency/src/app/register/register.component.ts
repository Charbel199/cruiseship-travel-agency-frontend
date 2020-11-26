import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname= "placeholder";
  constructor() { }

  ngOnInit(): void {
  }

  checkfirstname(){
    console.log(this.firstname)
  }

}
