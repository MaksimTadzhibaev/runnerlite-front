import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { RunningResultTableDto } from '../model/running-result-table-dto';

const URL = AppSettings.API_ENDPOINT + 'tableResults/'

@Injectable({
  providedIn: 'root'
})
export class RunningResultTableService {

  constructor(public http: HttpClient) { }

  public getAllResults(teamRunning: number): Observable<RunningResultTableDto> {
    return this.http.get<RunningResultTableDto>(URL + teamRunning);
  }
}
