import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { ChangeTableDto } from '../model/change-table-dto';
import { TeamsRunningCountDto } from '../model/teams-running-count-dto';
import { UserNameDto } from '../model/user-name-dto';

const URL = AppSettings.API_ENDPOINT + 'changeTableResults/'

@Injectable({
  providedIn: 'root'
})
export class ChangeDataRunningResultTableService {

  constructor(public http: HttpClient) { }

  //Получение информации о забеге (получаем в день забега) по которому будем вносить изменения в таблицу результатов
  public findTeamsRunningCountByRunningDate(): Observable<TeamsRunningCountDto> {
    return this.http.get<TeamsRunningCountDto>(URL + 'getTeamsRunningCount');
  }

  //Получение списка уже внесенных результатов забега, для отражения в таблице (обновлять после каждого внесения результата)
  public findListRunningResult(): Observable<ChangeTableDto[]> {
    return this.http.get<ChangeTableDto[]>(URL + 'getAllResult');
  }

  //Получение списка пользователей по которым не внесены результаты забега, но которые записаны на забег в качестве бегунов (раскрывающийся список)
  public getAllRunner(): Observable<UserNameDto[]> {
    return this.http.get<UserNameDto[]>(URL + 'getAllRunner');
  }

  //Внесение результата забега по бегуну (работает как на внесение новых данных так и на редактирование старых)
  public insertRunnerResult(userId: number, result: string): Observable<boolean> {
    return this.http.get<boolean>(URL + 'insertRunnerResult', {
      params: new HttpParams().set('userId', userId).set('result', result)
    })
  }

}
