export class TourneyTableDto {
    constructor(
        public finishPlace: number, // номер карточки места на финише
        public userId: number, // id бегуна                
        public resultString: string, // результат забега в минутах(часах)
        public name: string
    ){}
}