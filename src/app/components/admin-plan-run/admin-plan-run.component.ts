import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { dateToString } from 'src/app/helpers/date.helper';
import { PlanRunDto } from 'src/app/model/plan-run-dto';
import { PlanRunService } from 'src/app/services/plan.run.service';
import { RunningsprepareService } from 'src/app/services/runningsprepare.service';
import { AddRunningCountPopupComponent } from '../add-running-count-popup/add-running-count-popup.component';

@Component({
  selector: 'app-admin-plan-run',
  templateUrl: './admin-plan-run.component.html',
  styleUrls: ['./admin-plan-run.component.scss']
})
export class AdminPlanRunComponent implements OnInit {

  planRunDs: Observable<PlanRunDto[]>;

  constructor(
    private runService: PlanRunService,
    public dailog: MatDialog,
    private runningsprepareService: RunningsprepareService
  ) { }

  ngOnInit(): void {
    this.refreshSource();
  }

  dateToString = dateToString;

  displayedColumns: string[] = [
    'runningDate', 
    'runningNumber', 
    'runningStatus',
    'runnersCount',
    'volunteersCount',     
    'buttons'
  ];

  statusDs: string[] = [
    'Запланирован',
    'Выполнен',
    'Отменён',
    'Перенесён'
  ];

  changeStatus(id: number, status: string): void {
    this.runningsprepareService.putTeamRunningStatistic(id, status).subscribe(res => {
      console.log(res);
      this.refreshSource();
    }, error => {
      console.log(error);
    })
  }

  refreshSource(): void {
    this.planRunDs = this.runService.getPlanRun();
  } 

  openDialog(): void {
    const dialogRef = this.dailog.open(AddRunningCountPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.refreshSource();
      }      
    });
  }

}
