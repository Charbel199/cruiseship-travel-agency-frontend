import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CruiseShipApiResponse} from '../models/cruise-ship-api-response';
import {HttpClient} from '@angular/common/http';
import {TravelPlanApiResponse} from '../models/travel-plan-api-response';
import {CrewMemberApiResponse} from '../models/crew-member-api-response';
import {RoomApiResponse} from '../models/room-api-response';
import {CruiseShipRatingApiResponse} from '../models/cruise-ship-rating-api-response';
import {CruiseShipRating} from '../models/cruise-ship-rating';

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

  getCruiseShipTravelPlanRooms(shipId: number, travelPlanId: number, departureDate: string): Observable<RoomApiResponse>{
    const options = {
      departureDate
    };
    return this.httpClient.get<RoomApiResponse>(this.API_URL + `cruiseships/${shipId}/travelplans/${travelPlanId}/rooms`, {
      withCredentials: true,
      params: options
    });
  }

  getCruiseShipCrewMembers(shipId: number): Observable<CrewMemberApiResponse>{
    return this.httpClient.get<CrewMemberApiResponse>( this.API_URL + `cruiseships/${shipId}/crewmembers`, {
      withCredentials: true
    });
  }

  getCruiseShipRatings(shipId: number): Observable<CruiseShipRatingApiResponse> {
    return this.httpClient.get<CruiseShipRatingApiResponse>(this.API_URL + `cruiseships/${shipId}/rating`, {
      withCredentials: true
    });
  }
  createCruiseShipRating(shipId: number, rating: CruiseShipRating): Observable<CruiseShipRatingApiResponse> {
    return this.httpClient.post<CruiseShipRatingApiResponse>(this.API_URL + `cruiseships/${shipId}/rating`, rating,{
      withCredentials: true
    });
  }


  getRoom(roomId: number): Observable<RoomApiResponse> {
    return this.httpClient.get<RoomApiResponse>(this.API_URL + `rooms/${roomId}`, {
      withCredentials: true
    });
  }
}
