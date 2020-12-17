import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  currentInput = '';

  constructor() {
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.currentInput = event.target.files[0].name;
    }
  }


}
