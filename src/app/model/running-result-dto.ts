export class RunningResultDto {
    constructor(
        public id: number,
        public runningId: number,
        public userId: number,
        public finishPlace: number,
        public result: number,
        public runningDate: string,
        public runningNumber: number,
        public teamsName: string,
        public description: string,
        public geoDescription: string,
        public teamsId: number
    ){}
}