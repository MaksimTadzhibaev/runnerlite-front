import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { RunningPrepareStatus } from '../model/running-prepare-status';

const URL = AppSettings.API_ENDPOINT + 'runnings/prepare/'

@Injectable({
  providedIn: 'root'
})
export class RunningsprepareService {

  constructor(public http: HttpClient) { }

  public getStatus(teamId: number, count: number): Observable<RunningPrepareStatus[]> {
    return this.http.get<RunningPrepareStatus[]>(URL + 'status/', {
      params: new HttpParams().set('teamId', teamId).set('count', count)
    })
  }

}
