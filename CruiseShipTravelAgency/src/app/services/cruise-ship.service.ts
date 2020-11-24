import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CruiseShipApiResponse} from '../models/cruise-ship-api-response';
import {HttpClient} from '@angular/common/http';
import {TravelPlanApiResponse} from '../models/travel-plan-api-response';
import {CrewMemberApiResponse} from '../models/crew-member-api-response';
import {RatingApiResponse} from '../models/rating-api-response';

@Injectable({
  providedIn: 'root'
})
export class CruiseShipService {
  API_URL = 'http://localhost:8080/';
  constructor(
    private httpClient: HttpClient
  ) { }


  getAllCruiseShips(): Observable<CruiseShipApiResponse> {
    return this.httpClient.get<CruiseShipApiResponse>(this.API_URL + 'cruiseships', {
      withCredentials: true
    });
  }

  getCruiseShip(shipId: number): Observable<CruiseShipApiResponse>{
    return this.httpClient.get<CruiseShipApiResponse>( this.API_URL + `cruiseships/${shipId}`, {
      withCredentials: true
    });
  }
  getCruiseShipTravelPlans(shipId: number): Observable<TravelPlanApiResponse>{
    return this.httpClient.get<TravelPlanApiResponse>(this.API_URL + `cruiseships/${shipId}/travelplans`, {
      withCredentials: true
    });
  }

  getCruiseShipCrewMembers(shipId: number): Observable<CrewMemberApiResponse>{
    return this.httpClient.get<CrewMemberApiResponse>( this.API_URL + `cruiseships/${shipId}/crewmembers`, {
      withCredentials: true
    });
  }

  getCruiseShipRatings(shipId: number): Observable<RatingApiResponse> {
    return this.httpClient.get<RatingApiResponse>(this.API_URL + `cruiseships/${shipId}/rating`, {
      withCredentials: true
    });
  }
}
