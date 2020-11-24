import {Stop} from './stop';

export interface StopApiResponse {

  status: string;
  message: string;
  data: {
    stops: Array<Stop>;
  };

}
