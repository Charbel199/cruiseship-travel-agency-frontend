import {Room} from './room';

export interface RoomApiResponse {

  status: string;
  message: string;
  data: {
    rooms: Array<Room>;
  };
}
