import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { AchievementsDto } from '../model/achievements-dto';

import { SubscriptionDto } from '../model/subscription-dto';


const URL = AppSettings.API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor(public http: HttpClient) { }
  

  

  public getAchievements(): Observable<AchievementsDto[]> {
    return this.http.get<AchievementsDto[]>(URL + 'achievements/get');
  }

  public getSubscriptions(): Observable<SubscriptionDto[]> {
    return this.http.get<SubscriptionDto[]>(URL + 'subscription/get');
  }     

}