import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TeamDto } from 'src/app/model/team-dto';
import { TeamsService } from 'src/app/services/teams.service';


@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {

  @Input() teamDataSource: TeamDto;

  @Input() chooseTeam: boolean = false;

  @Output() onChanged = new EventEmitter<TeamDto>();

  constructor(
    public dialog: MatDialog,
    private service: TeamsService    
  ) { }

  ngOnInit(): void {    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.teamDataSource.currentValue) {
      this.onChanged.emit(changes.teamDataSource.currentValue);
    } 
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.service.getMyTeam(result.id).subscribe(res => {
        this.teamDataSource = res;
        this.onChanged.emit(res);
      }, error => {
        console.log(error)
      })           
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  teamForm: any;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,    
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      city: ['', [
        Validators.required
      ]],
      team: ['', [
        Validators.required
      ]]
    });
  }

  onNoClick(): void {    
    this.dialogRef.close();
  }

}