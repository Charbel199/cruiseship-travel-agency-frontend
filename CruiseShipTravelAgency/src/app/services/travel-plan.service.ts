import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TravelPlanApiResponse} from '../models/travel-plan-api-response';
import {StopApiResponse} from '../models/stop-api-response';
import {TravelPlanRatingApiResponse} from '../models/travel-plan-rating-api-response';
import {TravelPlanRating} from '../models/travel-plan-rating';

@Injectable({
  providedIn: 'root'
})
export class TravelPlanService {
  API_URL = 'http://localhost:8080/';
  constructor(
    private httpClient: HttpClient
  ) { }

  getTravelPlan(travelPlanId: number): Observable<TravelPlanApiResponse> {
    return this.httpClient.get<TravelPlanApiResponse>(this.API_URL + `travelplans/${travelPlanId}` , {
      withCredentials: true
    });
  }

  getStop(stopId: number): Observable<StopApiResponse> {
    return this.httpClient.get<StopApiResponse>(this.API_URL + `stops/${stopId}` , {
      withCredentials: true
    });
  }

  getTravelPlanStops(travelPlanId: number): Observable<StopApiResponse> {
    return this.httpClient.get<StopApiResponse>( this.API_URL + `travelplans/${travelPlanId}/stops`, {
      withCredentials: true
    });
  }

  getTravelPlanRating(travelPlanId: number): Observable<TravelPlanRatingApiResponse> {
    return this.httpClient.get<TravelPlanRatingApiResponse>(this.API_URL + `travelplans/${travelPlanId}/rating`, {
      withCredentials: true
    });
  }


  createTravelPlanRating(travelPlanId: number, rating: TravelPlanRating): Observable<TravelPlanRatingApiResponse> {
    return this.httpClient.post<TravelPlanRatingApiResponse>(this.API_URL + `travelplans/${travelPlanId}/rating`, rating,{
      withCredentials: true
    });
  }
}
