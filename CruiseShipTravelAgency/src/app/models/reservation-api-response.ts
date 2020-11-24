import {Reservation} from './reservation';

export interface ReservationApiResponse {
  status: string;
  message: string;
  data: {
    reservations: Array<Reservation>;
  };

}

