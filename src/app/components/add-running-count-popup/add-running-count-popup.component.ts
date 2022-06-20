import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamsRunningCountDto } from 'src/app/model/teams-running-count-dto';
import { RunningsprepareService } from 'src/app/services/runningsprepare.service';

@Component({
  selector: 'app-add-running-count-popup',
  templateUrl: './add-running-count-popup.component.html',
  styleUrls: ['./add-running-count-popup.component.scss']
})
export class AddRunningCountPopupComponent implements OnInit {


  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddRunningCountPopupComponent>,
    private fb: FormBuilder,
    private service: RunningsprepareService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      runningNumber: ['', [
        Validators.required
      ]],
      runningDate: ['', [
        Validators.required
      ]] 
    });
  }

  onSubmit(): void{
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(n => this.form.controls[n].markAsTouched());
      return;
    }
    let fv = this.form.value;    
    let dto = new TeamsRunningCountDto(null,null,fv.runningDate,fv.runningNumber,null);
    this.service.save(dto).subscribe(res=> {
      console.log(res);
      this.dialogRef.close(true);
    }, error => {
      console.log(error);
    });    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
