import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env = 'launched';
  API_URL = 'http://localhost:8080/';
  API_DEPLOYED_URL = 'https://cruiseshiptravelagency-backend.herokuapp.com/';
  API_LOCAL_URL = 'http://localhost:8080/';
  constructor() {
    if ( this.env === 'development'){
      this.API_URL = this.API_LOCAL_URL;
    }else{
      this.API_URL = this.API_DEPLOYED_URL;
    }
  }
}
