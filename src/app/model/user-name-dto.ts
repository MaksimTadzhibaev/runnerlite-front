export class UserNameDto {
    constructor(
        public userId: number, //id user
        public name: string //полное имя или ник в зависимости от галочки
    ){}
}