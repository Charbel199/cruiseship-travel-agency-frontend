import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {CruiseShipApiResponse} from '../models/cruise-ship-api-response';
import {CustomerApiResponse} from '../models/customer-api-response';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  testcruiseship(): Observable<CruiseShipApiResponse> {
    return this.httpClient.get<CruiseShipApiResponse>('http://localhost:8080/cruiseships/1',{
      withCredentials: true,
    });
  }

  testregister(customer: Customer): Observable<CustomerApiResponse> {
    return this.httpClient.post<CustomerApiResponse>('http://localhost:8080/register', customer, {
      withCredentials: true,
    });
  }

  testlogin(customerEmail, customerPassword): Observable<CustomerApiResponse> {
    const options = {
      customerEmail,
      customerPassword
    };

    return this.httpClient.post<CustomerApiResponse>('http://localhost:8080/login', options, {
      withCredentials: true,
    });

  }

  testlogout(){
    return this.httpClient.post('http://localhost:8080/logout', {} , {
      withCredentials: true,
    });
  }

}
