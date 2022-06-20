import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { RunningPrepareStatus } from '../model/running-prepare-status';
import { TeamsRunningCountDto } from '../model/teams-running-count-dto';

const URL = AppSettings.API_ENDPOINT + 'runnings/'

@Injectable({
  providedIn: 'root'
})
export class RunningsprepareService {

  constructor(public http: HttpClient) { }

  public getStatus(teamId: number, count: number): Observable<RunningPrepareStatus[]> {
    return this.http.get<RunningPrepareStatus[]>(URL + 'prepare/status/', {
      params: new HttpParams().set('teamId', teamId).set('count', count)
    })
  }

  public save(running: TeamsRunningCountDto): Observable<TeamsRunningCountDto> {
    return this.http.post<TeamsRunningCountDto>(URL + 'save', running);
  }

  public putTeamRunningStatistic(runningId: number, newStatus: string): Observable<any> {
    return this.http.put<any>(URL + `?runningId=${runningId}&newStatus=${newStatus}`, null);
  }

}
