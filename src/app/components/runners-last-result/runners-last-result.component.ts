import { Component, Input, OnInit } from '@angular/core';
import { dateToString, secondsToTimeString } from 'src/app/helpers/date.helper';
import { RunningResultDto } from 'src/app/model/running-result-dto';


@Component({
  selector: 'app-runners-last-result',
  templateUrl: './runners-last-result.component.html',
  styleUrls: ['./runners-last-result.component.scss']
})
export class RunnersLastResultComponent implements OnInit {

  
  @Input() source: RunningResultDto;

  constructor(    
  ) { }

  ngOnInit(): void {        
  }

  dateToString = dateToString;

  secondsToTimeString = secondsToTimeString;

}
