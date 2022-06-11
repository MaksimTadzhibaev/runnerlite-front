export class VolunteerPlanningDto {
    constructor(
        public id: number, //id волонтера
        public userId: number, //id user
        public fullName: string, //полное имя волонтера
        public status: number //статус запроса
    ) {

    }
}