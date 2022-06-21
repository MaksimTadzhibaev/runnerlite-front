import { Component, Input, OnInit } from '@angular/core';
import { dateToString } from 'src/app/helpers/date.helper';
import { VolunteerDto } from 'src/app/model/volunteer-dto';



@Component({
  selector: 'app-volunteer-last-history',
  templateUrl: './volunteer-last-history.component.html',
  styleUrls: ['./volunteer-last-history.component.scss']
})
export class VolunteerLastHistoryComponent implements OnInit {

  @Input() source: VolunteerDto;

  constructor(    
  ) { }  

  ngOnInit(): void {    
  }

  dateToString = dateToString;
}
