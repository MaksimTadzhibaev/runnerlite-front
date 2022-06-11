import { TeamsVolunteerDto } from "./teams-volunteer-dto";

export class TeamsVolunteerPlanningDto {
    constructor(
        public teamsRunningCountId: number, //id строки из таблицы TeamsRunningCount
        public runningDate:string, //дата забега
        public runningNumber: number, //номер забега
        public runningStatus: string, //статус забега
        public teamsVolunteerDto: TeamsVolunteerDto[] //информация о необходимом кол-ве волонтеров на забег (и занятых позициях)
    ){}
}