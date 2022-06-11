import { Component, Input, OnInit } from '@angular/core';
import { CabinetService } from 'src/app/services/cabinet.service';
import { dateToString, secondsToTimeString } from 'src/app/helpers/date.helper';
import { Router } from '@angular/router';
import { LOGIN_URL } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { RunnersLastResultDto } from 'src/app/model/runners-last-result-dto';

@Component({
  selector: 'app-runners-last-result',
  templateUrl: './runners-last-result.component.html',
  styleUrls: ['./runners-last-result.component.scss']
})
export class RunnersLastResultComponent implements OnInit {

  
  @Input() source: RunnersLastResultDto;

  constructor(    
  ) { }

  ngOnInit(): void {        
  }

  dateToString = dateToString;

  secondsToTimeString = secondsToTimeString;

}
