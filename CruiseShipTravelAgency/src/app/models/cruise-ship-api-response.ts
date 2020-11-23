import {CruiseShip} from './cruise-ship';
export interface CruiseShipApiResponse {
  status: string;
  message: string;
  data: {
    cruiseships: Array<CruiseShip>;
  };
}
