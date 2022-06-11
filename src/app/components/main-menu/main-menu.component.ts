import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Role } from 'src/app/model/role';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit { 

  constructor(public router: Router,
    public auth: AuthService) { }

  ngOnInit(): void {    
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }

  roles = Role;

}
