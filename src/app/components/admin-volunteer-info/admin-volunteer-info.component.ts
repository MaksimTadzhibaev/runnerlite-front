import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { RunningPrepareStatus } from 'src/app/model/running-prepare-status';
import { TeamDto } from 'src/app/model/team-dto';
import { dateToString } from 'src/app/helpers/date.helper';
import { RunningsprepareService } from 'src/app/services/runningsprepare.service';

@Component({
  selector: 'app-admin-volunteer-info',
  templateUrl: './admin-volunteer-info.component.html',
  styleUrls: ['./admin-volunteer-info.component.scss']
})
export class AdminVolunteerInfoComponent implements OnInit {
  
  @Input() teamDataSource: TeamDto;

  status: Observable<RunningPrepareStatus[]>;

  constructor(private service : RunningsprepareService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.teamDataSource.currentValue) {      
      this.status = this.service.getStatus(changes.teamDataSource.currentValue.id, 3);
    }
  }

  dateToString = dateToString;

}
