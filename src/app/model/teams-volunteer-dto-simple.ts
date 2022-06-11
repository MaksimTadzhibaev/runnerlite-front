export class TeamsVolunteerDtoSimple {
    constructor(
        public id: number,
	    public runningId: number,
	    public volunteerPosition: string,
	    public needVolunteerQty: number,
	    public minVolunteerQty: number
    ) {}
}