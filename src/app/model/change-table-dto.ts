export class ChangeTableDto {
    constructor(
        public finishPlace: number, // номер карточки места на финише
	    public userId: number, // id бегуна
	    public userName: string, // используемое имя бегуна
	    public resultString: string // результат забега в минутах(часах)
    ){}
}