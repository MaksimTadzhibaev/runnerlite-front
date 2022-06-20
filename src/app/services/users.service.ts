import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { UserNameDto } from '../model/user-name-dto';


const URL = AppSettings.API_ENDPOINT + 'users/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  public getUserName() : Observable<UserNameDto> {
    return this.http.get<UserNameDto>(URL + 'findUser');
  }

}
