import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { TeamsVolunteerPlanningDto } from '../model/teams-volunteer-planning-dto';

const URL = AppSettings.API_ENDPOINT + 'planVolunteersOnRun/'

@Injectable({
  providedIn: 'root'
})
export class TeamsVolunteerPlanningService {

  constructor(public http: HttpClient) { }

  public planVolunteersOnRun(): Observable<TeamsVolunteerPlanningDto[]> {
    return this.http.get<TeamsVolunteerPlanningDto[]>(URL);
  }

  public insertVolunteerFromRun(volunteersId: number, status: number): Observable<any> {
    return this.http.get(URL + `${volunteersId}/${status}`);
  }
}
