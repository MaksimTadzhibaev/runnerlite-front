export class VolunteerDto {
    constructor(
        public id: number, //id волонтера
        public userId: number, //id user
        public fullName: string, //полное имя волонтера
        public status: number, //статус запроса
        public runningDate: string, //дата забега
        public runningNumber: number, //номер забега
        public positionName: string, //позиция волонтера
        public positionDescription: string, //описание позиции волонтера
        public teamsName: string, //имя команды
        public teamsId: number, //для логотипа
        public runningNumberСount: number, //колчиство забегов в качестве волонтера
        public positionNameHistory: string[] //исторический список позиций волонтера
    ){}
}