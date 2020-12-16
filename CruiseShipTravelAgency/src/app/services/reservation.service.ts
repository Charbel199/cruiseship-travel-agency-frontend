import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReservationApiResponse} from '../models/reservation-api-response';
import {Reservation} from '../models/reservation';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  API_URL = 'http://localhost:8080/';
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
) {this.API_URL = apiService.API_URL;
}

  getAllReservations(): Observable<ReservationApiResponse> {
    return this.httpClient.get<ReservationApiResponse>(this.API_URL + `reservations`, {
      withCredentials: true
    });
  }

  createReservation(reservation: Reservation): Observable<ReservationApiResponse> {
    return this.httpClient.post<ReservationApiResponse>(this.API_URL + `reservations`, reservation,{
      withCredentials: true
    });
  }

}
