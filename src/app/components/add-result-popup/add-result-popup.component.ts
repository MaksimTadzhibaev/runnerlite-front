import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserNameDto } from 'src/app/model/user-name-dto';
import { ChangeDataRunningResultTableService } from 'src/app/services/change-data-running-result-table.service';

@Component({
  selector: 'app-add-result-popup',
  templateUrl: './add-result-popup.component.html',
  styleUrls: ['./add-result-popup.component.scss']
})
export class AddResultPopupComponent implements OnInit {

  runersDs$: Observable<UserNameDto[]>;

  hoursDs: string[];
  minutesDs: string[];
  secondsDs: string[];

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddResultPopupComponent>,
    private service: ChangeDataRunningResultTableService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.runersDs$ = this.service.getAllRunner();
    this.hoursDs = this.fillTimeArray(24);
    this.minutesDs = this.fillTimeArray(60);
    this.secondsDs = this.fillTimeArray(60);
    this.form = this.fb.group({
      runner: ['', [
        Validators.required
      ]],
      hours: ['', [
        Validators.required
      ]],
      minutes: ['', [
        Validators.required
      ]],
      seconds: ['', [
        Validators.required
      ]]
    });

  }

  fillTimeArray(count: number): string[]  {
    let res: string[] = [];
    for(let i = 0; i <= count; i++) {
      res.push(i < 10 ? '0' + i : String(i));
    }
    return res;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(n => this.form.controls[n].markAsTouched());
      return;
    }
    let fv = this.form.value;
    let time = fv.hours + ':' + fv.minutes + ':' + fv.seconds;
    this.service.insertRunnerResult(fv.runner.userId, time).subscribe(r => {
      this.dialogRef.close(true);
    }, error => {
      console.log(error);
    });   
    
  }

}
