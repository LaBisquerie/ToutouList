import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itoutou } from './itoutou';
import { ToutouListService } from './toutou-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Toutou-list';
  toutous!: Itoutou[];
  toutouSubscription!: Subscription;

  constructor(private toutouListService:ToutouListService){
  }

  ngOnInit(): void {
    this.toutouSubscription = this.toutouListService.toutous$.subscribe((toutous: Itoutou[]) => {
      this.toutous = toutous;
    })
  }

  ngOnDestroy(): void{
    if(this.toutouSubscription){
      this.toutouSubscription.unsubscribe();
    }
  }
}
