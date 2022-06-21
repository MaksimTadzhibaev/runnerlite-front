import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RunningResultDto } from 'src/app/model/running-result-dto';

import { TeamDto } from 'src/app/model/team-dto';
import { UserNameDto } from 'src/app/model/user-name-dto';
import { VolunteerDto } from 'src/app/model/volunteer-dto';

import { CabinetService } from 'src/app/services/cabinet.service';
import { RunningResultsService } from 'src/app/services/running-results.service';
import { TeamsService } from 'src/app/services/teams.service';
import { UsersService } from 'src/app/services/users.service';
import { VolunteerService } from 'src/app/services/volunteer.service';

export const CABINET_RUNNER_URL = 'cabinet-runner';
@Component({
  selector: 'app-cabinet-runner',
  templateUrl: './cabinet-runner.component.html',
  styleUrls: ['./cabinet-runner.component.scss']
})
export class CabinetRunnerComponent implements OnInit {

  constructor(
    private cabinetService: CabinetService,
    private usersService: UsersService,
    private teamService: TeamsService,
    private runningResultsService: RunningResultsService,
    private volunteerService: VolunteerService
  ) { }

  userInfoDataSource: Observable<UserNameDto>;
  runnerLastResultDataSource: Observable<RunningResultDto>;
  volunteerHistoryDataSource: Observable<VolunteerDto>;
  teamDataSource: Observable<TeamDto>;  
  runnerCount: Observable<number>;  
  volunteerismCount: Observable<number>; 

  ngOnInit(): void {
    this.userInfoDataSource = this.usersService.getUserName();
    this.runnerLastResultDataSource = this.runningResultsService.getLastRunningResult();
    this.volunteerHistoryDataSource = this.volunteerService.getLastHistoryVolunteering();
    this.teamDataSource = this.teamService.getMyTeam();
    this.runnerCount = this.runningResultsService.historicalRunnerCount();
    this.volunteerismCount = this.runningResultsService.historicalVolunteerismCount();
  }
  
}
