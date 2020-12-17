import { Component, OnInit } from '@angular/core';
import {Stop} from "../models/stop";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-addstop',
  templateUrl: './addstop.component.html',
  styleUrls: ['./addstop.component.css']
})
export class AddstopComponent implements OnInit {
  stop: Stop = {
    stopGoogleURL: '',
    stopPictureURL: '',
    stopRank: undefined,
    stopId: undefined,
    stopDestination:'',
    stopDuration:undefined

  };
  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
  }

  addStop(){
  this.adminService.addStop(this.stop).subscribe( res => {
    this.stop.stopPictureURL = ('../../assets/' + this.stop.stopPictureURL).replace('C:\\fakepath\\','');
    console.log(res);
    this.stop= {
      stopGoogleURL: '',
      stopPictureURL: '',
      stopRank: undefined,
      stopId: undefined,
      stopDestination:'',
      stopDuration:undefined

    };
  })
  }

}
