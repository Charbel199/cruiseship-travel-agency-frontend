import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {Reservation} from "../models/reservation";
import {Observable} from "rxjs";
import {ReservationApiResponse} from "../models/reservation-api-response";
import {TravelPlan} from "../models/travel-plan";
import {Stop} from "../models/stop";
import {CrewMember} from "../models/crew-member";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_URL = 'http://localhost:8080/';
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {this.API_URL = apiService.API_URL;
  }


  addTravelPlan(travelPlan: TravelPlan): Observable<any>{
    return this.httpClient.post<any>( this.API_URL + 'admin/travelPlan', travelPlan,{
      withCredentials: true
    })
  }
  addStop(stop: Stop): Observable<any>{
    return this.httpClient.post<any>( this.API_URL + 'admin/stop', stop,{
      withCredentials: true
    })
  }
  addCrewMember(crewMember: CrewMember): Observable<any>{
    return this.httpClient.post<any>( this.API_URL + 'admin/crewMember', crewMember,{
      withCredentials: true
    })
  }

}
