import { TeamsRunningCountDto } from "./teams-running-count-dto";
import { TeamsVolunteerDtoSimple } from "./teams-volunteer-dto-simple";
import { VolunteerSimpleDto } from "./volunteer-simple-dto";

export class RunningPrepareStatus {
    constructor(
        public running: TeamsRunningCountDto,
	    public needVolunteers: TeamsVolunteerDtoSimple[],
	    public volunteers: VolunteerSimpleDto[],
	    public recruitmentPercentage: number
    ){}
}