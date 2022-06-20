import { TourneyTableDto } from "./tourney-table-dto";

export class RunningResultTableDto {
    constructor(
        public runningDate: string, //дата забега
        public runningNumber: number, //номер забега
        public runnersCount: number, //количество бегунов участвующих в забеге
        public tourneyTableDto: TourneyTableDto[] //турнирная таблица
    ){}
}