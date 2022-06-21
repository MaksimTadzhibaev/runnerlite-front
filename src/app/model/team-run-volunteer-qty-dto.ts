export class TeamRunVolunteerQtyDto {
    constructor(
        public teamId: number,
        public positionId: number,
        public position: string, // название позиции волонтера
        public qty: number // нужное количество
    ){}
}