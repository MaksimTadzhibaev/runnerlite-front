import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { RunningResultDto } from '../model/running-result-dto';
import { TeamsRunningCountDto } from '../model/teams-running-count-dto';


const URL = AppSettings.API_ENDPOINT + 'results/'

@Injectable({
  providedIn: 'root'
})
export class RunningResultsService {

  constructor(public http: HttpClient) { }

  public getLastRunningResult(): Observable<RunningResultDto> {
    return this.http.get<RunningResultDto>(URL + 'last');
  }

  public historicalRunnerCount(): Observable<number> {
    return this.http.get<number>(URL + 'runnerCount');
  }

  public historicalVolunteerismCount(): Observable<number> {
    return this.http.get<number>(URL + 'volunteerismCount');
  }

  public getTeamRunningCountHistory(teamId: number): Observable<TeamsRunningCountDto[]> {
    return this.http.get<TeamsRunningCountDto[]>(URL + 'history', {
      params: new HttpParams().set('teamId', teamId)
    })
  }

}
