
import {CrewMember} from './crew-member';

export interface CrewMemberApiResponse {
  status: string;
  message: string;
  data: {
    crewmembers: Array<CrewMember>;
  };
}
