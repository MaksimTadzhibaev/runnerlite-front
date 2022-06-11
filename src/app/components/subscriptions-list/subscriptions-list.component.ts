import { Component, OnInit } from '@angular/core';
import { Observable, SubscriptionLike } from 'rxjs';
import { SubscrRowDto } from 'src/app/model/subscr-row-dto';
import { CabinetService } from 'src/app/services/cabinet.service';

@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.scss']
})
export class SubscriptionsListComponent implements OnInit {  

  constructor(
    private service: CabinetService
  ) { }

  list = new Map<String, SubscrRowDto>();

  subscribe!: SubscriptionLike;

  ngOnInit(): void {
    this.subscribe = this.service.getSubscriptions().subscribe(result => {
      result.map(it => {        
        if (this.list.has(it.teamsName)) {
          this.list.get(it.teamsName)?.subscrList.push(it.nameSubscription)
        } else {
          this.list.set(it.teamsName, new SubscrRowDto(it.teamsId, [it.nameSubscription]))
        }
      });      
    }, error => {
      console.log(error);
    })
  }

  ngOnDestroy() {    
    if (this.subscribe) {      
      this.subscribe.unsubscribe();      
    }
  }
 

}