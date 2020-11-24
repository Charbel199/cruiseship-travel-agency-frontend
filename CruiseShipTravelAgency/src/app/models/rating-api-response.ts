
import {Rating} from './rating';

export interface RatingApiResponse {
  status: string;
  message: string;
  data: {
    ratings: Array<Rating>;
  };
}
