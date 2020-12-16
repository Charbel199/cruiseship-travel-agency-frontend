import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {CustomerApiResponse} from '../models/customer-api-response';
import {Customer} from '../models/customer';
import {take} from 'rxjs/operators';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  IS_LOGGED_IN = false;
  loggedInCustomer: Customer;
  API_URL = 'http://localhost:8080/';
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
) {this.API_URL = apiService.API_URL;
}
    checkIfLoggedIn(): Observable<CustomerApiResponse>{
    console.log('Sending ping')
      return this.httpClient.get<CustomerApiResponse>(this.API_URL + 'login', {
        withCredentials: true,
      });
    }

    updateLoginStatus(): void{
      this.checkIfLoggedIn().pipe(take(1))
        .subscribe(res => {
        console.log(' I AM LOGGED IN ');
        console.log(res);
        this.IS_LOGGED_IN = true;
        this.loggedInCustomer = res.data.customer;
      },
        error => {
          console.log(' I AM NOT LOGGED IN ');
          this.IS_LOGGED_IN = false;
          this.loggedInCustomer = undefined;
        });
    }

    getLoggedInCustomer(): Customer{
      return this.loggedInCustomer;
    }
    getIsLoggedIn(): boolean{
      return this.IS_LOGGED_IN;
    }

    logout() {
    return this.httpClient.post(this.API_URL + 'logout', {} , {
      withCredentials: true,
    });

    }
    login(customerEmail, customerPassword): Observable<CustomerApiResponse> {
    const options = {
      customerEmail,
      customerPassword
    };
    return this.httpClient.post<CustomerApiResponse>(this.API_URL + 'login', options, {
      withCredentials: true,
    });
   }
    register(customer: Customer): Observable<CustomerApiResponse> {
    return this.httpClient.post<CustomerApiResponse>(this.API_URL + 'register', customer, {
      withCredentials: true,
    });
  }












}
