import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dateToString } from 'src/app/helpers/date.helper';
import { TeamsRunningCountDto } from 'src/app/model/teams-running-count-dto';

@Component({
  selector: 'app-team-running-count-history',
  templateUrl: './team-running-count-history.component.html',
  styleUrls: ['./team-running-count-history.component.scss']
})
export class TeamRunningCountHistoryComponent implements OnInit {

  @Input() source: TeamsRunningCountDto[];

  @Output() onChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  dateToString = dateToString;

  displayedColumns: string[] = [
    'runningDate', 
    'runningNumber'
  ];

  rowClick(id: number): void {
    this.onChanged.emit(id);    
  } 

}
