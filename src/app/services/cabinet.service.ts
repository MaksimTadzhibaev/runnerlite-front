import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { AchievementsDto } from '../model/achievements-dto';
import { RunnersLastResultDto } from '../model/runners-last-result-dto';
import { SubscriptionDto } from '../model/subscription-dto';
import { VolunteerLastHistoryDto } from '../model/volunteer-last-history-dto';

const URL = AppSettings.API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor(public http: HttpClient) { }

  public getRunnersLastResult(): Observable<RunnersLastResultDto> {
    return this.http.get<RunnersLastResultDto>(URL + 'results/last');
  }

  public getVolunteerLastHistory(): Observable<VolunteerLastHistoryDto> {
    return this.http.get<VolunteerLastHistoryDto>(URL + 'volunteer/lastHistory');
  }

  public getAchievements(): Observable<AchievementsDto[]> {
    return this.http.get<AchievementsDto[]>(URL + 'achievements/get');
  }

  public getSubscriptions(): Observable<SubscriptionDto[]> {
    return this.http.get<SubscriptionDto[]>(URL + 'subscription/get');
  }
  
  public getRunnerCount(): Observable<number> {
    return this.http.get<number>(URL + 'results/runnerCount');
  }

  public getVolunteerismCount(): Observable<number> {
    return this.http.get<number>(URL + 'results/volunteerismCount');
  }

}