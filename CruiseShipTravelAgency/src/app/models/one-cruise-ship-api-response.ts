import {CruiseShip} from './cruise-ship';
export interface OneCruiseShipApiResponse {
  status: string;
  message: string;
  data: {
    cruiseship: CruiseShip;
  };
}
