import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { TeamRunVolunteerQtyDto } from '../model/team-run-volunteer-qty-dto';
import { VolunteerDto } from '../model/volunteer-dto';


const URL = AppSettings.API_ENDPOINT + 'volunteer/';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(public http: HttpClient) { }

  public getLastHistoryVolunteering(): Observable<VolunteerDto> {
    return this.http.get<VolunteerDto>(URL + 'lastHistory');
  }

  public getNeedTeamRunVolunteerQty(): Observable<TeamRunVolunteerQtyDto[]> {
    return this.http.get<TeamRunVolunteerQtyDto[]>(URL + 'template');
  }


}
