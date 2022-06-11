import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { RunningPrepareStatus } from 'src/app/model/running-prepare-status';
import { TeamDto } from 'src/app/model/team-dto';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {

  @Input() teamDataSource: TeamDto;

  status: Observable<RunningPrepareStatus[]>;

  constructor(    
  ) { }

  ngOnInit(): void {
    
  }
}