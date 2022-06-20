import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RunningResultTableDto } from 'src/app/model/running-result-table-dto';
import { TeamDto } from 'src/app/model/team-dto';
import { TeamsRunningCountDto } from 'src/app/model/teams-running-count-dto';
import { AuthService } from 'src/app/services/auth.service';
import { RunningResultTableService } from 'src/app/services/running-result-table.service';
import { RunningResultsService } from 'src/app/services/running-results.service';
import { TeamsService } from 'src/app/services/teams.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  teamDataSource: Observable<TeamDto>;

  teamRunningCountHistoryDS: Observable<TeamsRunningCountDto[]>;

  runningResultDS: Observable<RunningResultTableDto>;

  constructor(
    private teamService: TeamsService,
    private authService: AuthService,
    private runningResultsService: RunningResultsService,
    private runningResultTableService: RunningResultTableService
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.teamDataSource = this.teamService.getMyTeam();
    } else {
      this.teamDataSource = this.teamService.getMyTeam(1);
    }
  }

  changedTeam(team: TeamDto): void {
    this.teamRunningCountHistoryDS = this.runningResultsService.getTeamRunningCountHistory(team.id);
    this.runningResultDS = of();
  }

  changedRunningCount(rid: number): void {
    console.log(rid);
    this.runningResultDS = this.runningResultTableService.getAllResults(rid);    
  }

}
