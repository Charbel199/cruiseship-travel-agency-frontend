import { Injectable } from '@angular/core';
import {TravelPlan} from '../models/travel-plan';

@Injectable({
  providedIn: 'root'
})
export class TravelPlanDetailsService {
  currentTravelPlan: TravelPlan = undefined;
  constructor() { }

  assignTravelPlan(travelPlan: TravelPlan): void{
    this.currentTravelPlan = travelPlan;
  }

  getCurrentTravelPlan(): TravelPlan{
    return this.currentTravelPlan;
  }

  deleteCurrentTravelPlan(): void{
    this.currentTravelPlan = undefined;
  }


}
