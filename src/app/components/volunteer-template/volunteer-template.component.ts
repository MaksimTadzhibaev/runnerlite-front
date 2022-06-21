import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamRunVolunteerQtyDto } from 'src/app/model/team-run-volunteer-qty-dto';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-volunteer-template',
  templateUrl: './volunteer-template.component.html',
  styleUrls: ['./volunteer-template.component.scss']
})
export class VolunteerTemplateComponent implements OnInit {

  constructor(private volunteerService: VolunteerService) { }

  source$ : Observable<TeamRunVolunteerQtyDto[]>

  ngOnInit(): void {
    this.source$ = this.volunteerService.getNeedTeamRunVolunteerQty();
  }

  displayedColumns: string[] = [
    'position', 
    'qty'
  ];

}
