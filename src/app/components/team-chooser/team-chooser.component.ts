import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CitiesDto } from 'src/app/model/cities-dto';
import { TeamWithDistrDto } from 'src/app/model/team-with-distr-dto';
import { CitiesService } from 'src/app/services/cities.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-chooser',
  templateUrl: './team-chooser.component.html',
  styleUrls: ['./team-chooser.component.scss']
})
export class TeamChooserComponent implements OnInit {

  @Input() teamFormGroup: FormGroup;
  
  @Input() className: string;

  citiesDS$: Observable<CitiesDto[]>;

  teamsDS$: Observable<TeamWithDistrDto[]>;

  constructor(
    private citiesService: CitiesService,
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    this.citiesDS$ = this.citiesService.findAll();
  }

  changeCity(e: any) {
    this.teamFormGroup.controls['team'].setValue('');
    this.teamsDS$ = this.teamsService.getByCityId(e.value.id);
  }

}
