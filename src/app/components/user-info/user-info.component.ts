import { Component, Input, OnInit } from '@angular/core';
import { UserNameDto } from 'src/app/model/user-name-dto';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() source: UserNameDto;

  constructor() { }

  ngOnInit(): void {
  }

}
