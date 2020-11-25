import {CruiseShipRating} from './cruise-ship-rating';

export interface CruiseShipRatingApiResponse {
  status: string;
  message: string;
  data: {
    ratings: Array<CruiseShipRating>;
  };
}
