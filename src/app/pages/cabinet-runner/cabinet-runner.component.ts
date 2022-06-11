import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { AchievementsDto } from 'src/app/model/achievements-dto';
import { RunnersLastResultDto } from 'src/app/model/runners-last-result-dto';
import { TeamDto } from 'src/app/model/team-dto';
import { UserNameDto } from 'src/app/model/username-dto';
import { VolunteerLastHistoryDto } from 'src/app/model/volunteer-last-history-dto';
import { CabinetService } from 'src/app/services/cabinet.service';
import { TeamsService } from 'src/app/services/teams.service';
import { UsersService } from 'src/app/services/users.service';

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
    private teamService: TeamsService
  ) { }

  userInfoDataSource: Observable<UserNameDto>;
  runnerLastResultDataSource: Observable<RunnersLastResultDto>;
  volunteerHistoryDataSource: Observable<VolunteerLastHistoryDto>;
  teamDataSource: Observable<TeamDto>;  
  runnerCount: Observable<number>;  
  volunteerismCount: Observable<number>; 

  ngOnInit(): void {
    this.userInfoDataSource = this.usersService.getUserName();
    this.runnerLastResultDataSource = this.cabinetService.getRunnersLastResult();
    this.volunteerHistoryDataSource = this.cabinetService.getVolunteerLastHistory();
    this.teamDataSource = this.teamService.getMyTeam();
    this.runnerCount = this.cabinetService.getRunnerCount();
    this.volunteerismCount = this.cabinetService.getVolunteerismCount();
  }
  
}
