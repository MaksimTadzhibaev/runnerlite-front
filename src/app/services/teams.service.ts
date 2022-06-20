import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { TeamWithDistrDto } from '../model/team-with-distr-dto';
import { TeamDto } from '../model/team-dto';

const URL = AppSettings.API_ENDPOINT + 'teams/'
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(public http: HttpClient) { }

  public getByCityId(id: number): Observable<TeamWithDistrDto[]> {    
    return this.http.get<TeamWithDistrDto[]>(URL + 'filter/', {
      params: new HttpParams().set('city', id)
    });
  }

  public getMyTeam(teamId?: number): Observable<TeamDto> {
    return this.http.get<TeamDto>(URL + 'my', {
      params: teamId ? new HttpParams().set('teamId', teamId) : undefined
    });
  }
}
