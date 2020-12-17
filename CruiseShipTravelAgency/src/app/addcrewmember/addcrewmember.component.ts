import { Component, OnInit } from '@angular/core';
import {CrewMember} from "../models/crew-member";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-addcrewmember',
  templateUrl: './addcrewmember.component.html',
  styleUrls: ['./addcrewmember.component.css']
})
export class AddcrewmemberComponent implements OnInit {
  crewMember: CrewMember = {
    crewMemberPosition:'',
    crewMemberTelephoneNumber:'',
    crewMemberAddress:'',
    crewMemberDateOfBirth:'',
    crewMemberGender:'',
    crewMemberLastName:'',
    crewMemberFirstName:'',
    crewMemberId:undefined
  };
  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
  }
  addCrewMember(){
    this.adminService.addCrewMember(this.crewMember).subscribe( res => {
      console.log(res);
      this.crewMember= {
        crewMemberPosition:'',
        crewMemberTelephoneNumber:'',
        crewMemberAddress:'',
        crewMemberDateOfBirth:'',
        crewMemberGender:'',
        crewMemberLastName:'',
        crewMemberFirstName:'',
        crewMemberId:undefined
      };
    })

  }

}
