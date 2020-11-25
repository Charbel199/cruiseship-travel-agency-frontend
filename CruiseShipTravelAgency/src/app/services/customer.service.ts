import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {CustomerApiResponse} from '../models/customer-api-response';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  IS_LOGGED_IN = false;
  loggedInCustomer: Customer;
  API_URL = 'http://localhost:8080/';
  constructor(
    private httpClient: HttpClient
  ) {

  }
    checkIfLoggedIn(): Observable<CustomerApiResponse>{
      return this.httpClient.get<CustomerApiResponse>(this.API_URL + 'login', {
        withCredentials: true,
      });
    }

    updateLoginStatus(): void{
      this.checkIfLoggedIn().subscribe(res => {
        this.IS_LOGGED_IN = true;
        this.loggedInCustomer = res.data.customer;
      },
        error => {
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
