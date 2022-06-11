import { VolunteerPlanningDto } from "./volunteer-planning-dto";

export class TeamsVolunteerDto {
    constructor(
        public idTeamsVolunteer: number, //id таблицы TeamsVolunteer
	    public refVolunteersPositionId: number, //id строки из таблицы RefVolunteersPosition (нужна для участия в забеге волонтером)
	    public positionName: string, //позиция волонтера
	    public positionDescription: string, //описание позиции волонтера
	    public qty: number, // необходимое кол-во волонтеров
	    public volunteerDtoList: VolunteerPlanningDto[] //список волонтеров набранных в команду на данную позицию
    ) {

    }
}