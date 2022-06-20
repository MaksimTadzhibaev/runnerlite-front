import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { dateToString } from 'src/app/helpers/date.helper';
import { ChangeTableDto } from 'src/app/model/change-table-dto';
import { TeamsRunningCountDto } from 'src/app/model/teams-running-count-dto';
import { ChangeDataRunningResultTableService } from 'src/app/services/change-data-running-result-table.service';
import { AddResultPopupComponent } from '../add-result-popup/add-result-popup.component';

@Component({
  selector: 'app-running-result-table',
  templateUrl: './running-result-table.component.html',
  styleUrls: ['./running-result-table.component.scss']
})
export class RunningResultTableComponent implements OnInit {

  tableDs$: Observable<ChangeTableDto[]>;

  runningDs$: Observable<TeamsRunningCountDto>;

  displayedColumns: string[] = [
    'position', 
    'userName', 
    'resultString',
    'buttons'
  ];

  constructor(
    private service: ChangeDataRunningResultTableService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.runningDs$ = this.service.findTeamsRunningCountByRunningDate();
    this.refreshSource();
  }

  refreshSource(): void {
    this.tableDs$ = this.service.findListRunningResult();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddResultPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.refreshSource();
      }      
    });
  }

  dateToString = dateToString;

  onSubmit(userForm: any, userId: number) {    
    this.service.insertRunnerResult(userId, userForm.time).subscribe(r => {
      this.refreshSource();
    }, error => {
      console.log(error);
    });   
    
    
  }

}