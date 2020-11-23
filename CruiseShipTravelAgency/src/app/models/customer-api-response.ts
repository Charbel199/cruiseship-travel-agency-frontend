import {Customer} from './customer';

export interface CustomerApiResponse {

  status: string;
  message: string;
  data: {
    customer: Array<Customer>;
  };
}
