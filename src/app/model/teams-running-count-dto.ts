export class TeamsRunningCountDto {
    constructor(
        public id: number,
	    public runningDate: string,
	    public number: number,
	    public status: string
    ) {

    }
}