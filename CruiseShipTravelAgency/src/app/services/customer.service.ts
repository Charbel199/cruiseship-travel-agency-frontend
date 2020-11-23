import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {CruiseShipApiResponse} from '../models/cruise-ship-api-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  test(): Observable<CruiseShipApiResponse>{
    return this.httpClient.get<CruiseShipApiResponse>('http://localhost:8080/cruiseships/1');
  }

}
