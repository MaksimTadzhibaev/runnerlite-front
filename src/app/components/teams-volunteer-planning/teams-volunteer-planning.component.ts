import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamsVolunteerPlanningDto } from 'src/app/model/teams-volunteer-planning-dto';
import { TeamsVolunteerPlanningService } from 'src/app/services/teams-volunteer-planning.service';
import { dateToString } from 'src/app/helpers/date.helper';
import { VolunteerPlanningDto } from 'src/app/model/volunteer-planning-dto';

@Component({
  selector: 'app-teams-volunteer-planning',
  templateUrl: './teams-volunteer-planning.component.html',
  styleUrls: ['./teams-volunteer-planning.component.scss']
})
export class TeamsVolunteerPlanningComponent implements OnInit {

  source$: Observable<TeamsVolunteerPlanningDto[]>;

  displayedColumns: string[] = [
    'positionName',
    'qty',
    'volunteers',
    'candidates'
  ];

  constructor(
    private service: TeamsVolunteerPlanningService
  ) { }

  ngOnInit(): void {
    this.refreshSource();
  }

  refreshSource() {
    this.source$ = this.service.planVolunteersOnRun();  
  }

  dateToString = dateToString;

  filterVolunteersList(list: VolunteerPlanningDto[], status: number): VolunteerPlanningDto[] {
    return list.filter(it => it.status == status);
  }

  setCondidateStatus(volunteersId: number, status: number) {
    this.service.insertVolunteerFromRun(volunteersId, status).subscribe(res => {
      this.refreshSource();      
    }, error => {
      console.log(error)
    });
    
  }

}
