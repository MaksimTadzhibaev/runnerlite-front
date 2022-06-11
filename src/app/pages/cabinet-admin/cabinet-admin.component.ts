import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamDto } from 'src/app/model/team-dto';
import { UserNameDto } from 'src/app/model/username-dto';
import { TeamsService } from 'src/app/services/teams.service';
import { UsersService } from 'src/app/services/users.service';

export const CABINET_ADMIN_URL = 'cabinet-admin';

@Component({
  selector: 'app-cabinet-admin',
  templateUrl: './cabinet-admin.component.html',
  styleUrls: ['./cabinet-admin.component.scss']
})
export class CabinetAdminComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private teamService: TeamsService
  ) { }

  userInfoDataSource: Observable<UserNameDto>;

  teamDataSource: Observable<TeamDto>

  ngOnInit(): void {
    this.userInfoDataSource = this.usersService.getUserName();
    this.teamDataSource = this.teamService.getMyTeam();
  }  

}
