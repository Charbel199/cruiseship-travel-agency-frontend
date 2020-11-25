import {TravelPlanRating} from './travel-plan-rating';

export interface TravelPlanRatingApiResponse {
  status: string;
  message: string;
  data: {
    ratings: Array<TravelPlanRating>;
  };
}
