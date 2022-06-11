import { Component, OnInit } from '@angular/core';
import { PlanRunDto } from 'src/app/model/plan-run-dto';
import { dateToString } from 'src/app/helpers/date.helper';
import { PlanVolunteerDto } from 'src/app/model/plan-volunteer-dto';
import { PlanVolunteerService } from 'src/app/services/plan.volunteer.service';
import { PlanRunService } from 'src/app/services/plan.run.service';
import { RunTableInfo } from 'src/app/model/run-table-info';


@Component({
  selector: 'app-plan-run',
  templateUrl: './plan-run.component.html',
  styleUrls: ['./plan-run.component.scss']
})
export class PlanRunComponent implements OnInit {

  constructor(    
    private runService: PlanRunService,
    private volunteerService: PlanVolunteerService 
  ) { }

  dataSource: PlanRunDto[] = [];

  displayedColumns: string[] = [
    'runningDate', 
    'runningNumber', 
    'runningStatus',
    'runnersCount',
    'volunteersCount', 
    'participationStatus',
    'buttons'
  ];

  ngOnInit(): void {
    this.refreshDataSource();
    this.volunteerService.needRefresh$.subscribe(r => {
      this.refreshDataSource();
    })
  }

  private refreshDataSource() {
    this.runService.getPlanRun().subscribe(result => {
      this.dataSource = result;
      if (result.length) {        
        this.volunteerService.changeRunTableInfo(new RunTableInfo(result[0].teamsRunningCountId, result[0].statusVolunteer !== null));
      }
    }, error => {
      console.log(error);
    });
  }

  dateToString = dateToString;

  insertRunner(teamsRunningCountId: number) {    
    this.runService.insertRunner(teamsRunningCountId).subscribe(r => {
      this.refreshDataSource();
    }, error => {
      console.log(error);
    });
  }

  deleteRunner(runnerCountId: number) {    
    this.runService.deleteRunner(runnerCountId).subscribe(r => {
      this.refreshDataSource();
    }, error => {
      console.log(error);
    });
  }
  
  volunteerList: PlanVolunteerDto[] = [];

  menuOpened(teamsRunningCountId: number) {      
    this.volunteerService.getPlanVolunteer(teamsRunningCountId).subscribe(result => {
      this.volunteerList = result;
    }, error => {
      console.log(error);
    })
  }

  insertVolunteer(teamsRunningCountId: number, volunteersPosition: number) {    
    this.volunteerService.insertVolunteer(teamsRunningCountId, volunteersPosition).subscribe(r => {
      this.refreshDataSource();
    }, error => {
      console.log(error);
    });
  }

  deleteVolunteer(volunteersId: number) {    
    this.volunteerService.deleteVolunteer(volunteersId).subscribe(r => {
      this.refreshDataSource();
    }, error => {
      console.log(error);
    })
  }

  getAppStatus(statusVolunteer: number) : string {
    let result: string = '';
    switch (statusVolunteer) {
      case 0 : result = 'подана заявка'; break;
      case 1 : result = 'заявка принята'; break;
      case 2 : result = 'заявка отказана'; break;
    }
    return result;
  }

  rowClick(teamsRunningCountId: number, statusVolunteer: number, runningStatus: string) {
    if (this.checkRunningStatus(runningStatus)) {    
      this.volunteerService.changeRunTableInfo(new RunTableInfo(teamsRunningCountId, statusVolunteer !== null));
    }
  }
  

  checkRunningStatus(runningStatus: string): boolean {
    return runningStatus.toLowerCase().trim() == 'запланирован';
  }

}