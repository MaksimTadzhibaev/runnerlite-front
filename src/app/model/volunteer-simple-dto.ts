export class VolunteerSimpleDto {
    constructor(
        public id: number,
        public userId: number,
        public status: number, // Статус запроса (0 - запрос /1 - принято/ 2 - отказано)
        public position: string,
        public runningId: number
    ) {

    }
}