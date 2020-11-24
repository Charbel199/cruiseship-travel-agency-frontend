import {TravelPlan} from './travel-plan';

export interface TravelPlanApiResponse {
  status: string;
  message: string;
  data: {
    travelplans: Array<TravelPlan>;
  };
}
