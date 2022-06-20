import { Component, Input, OnInit } from '@angular/core';
import { dateToString } from 'src/app/helpers/date.helper';
import { RunningResultTableDto } from 'src/app/model/running-result-table-dto';

@Component({
  selector: 'app-running-result-public',
  templateUrl: './running-result-public.component.html',
  styleUrls: ['./running-result-public.component.scss']
})
export class RunningResultPublicComponent implements OnInit {

  @Input() source: RunningResultTableDto;

  constructor() { }

  ngOnInit(): void {
  }

  dateToString = dateToString;

  displayedColumns: string[] = [
    'finishPlace',
    'name', 
    'resultString'
  ];

}
