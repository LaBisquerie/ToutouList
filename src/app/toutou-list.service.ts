import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Itoutou } from './itoutou';

@Injectable({
  providedIn: 'root'
})
export class ToutouListService {
  private toutous: Itoutou[] = [
    {
      id: 1,
      taskName: "Sortir le chien",
      dogName: "Raphael"
    }
  ];

  public toutous$: BehaviorSubject<Itoutou[]>;

  constructor() {
    this.toutous$ = new BehaviorSubject<Itoutou[]>(this.toutous);
  }

  getTasks(): BehaviorSubject<Itoutou[]> {
    return this.toutous$;
  }

  addTask(taskName:any, dogName:any): void {
    const id = this.toutous.length === 0 ? 1 :
      Math.max.apply(Math, this.toutous.map((toutou) => {
        return toutou.id;
      })) + 1;

    this.toutous.push({
      id, taskName, dogName
    });
    this.toutous$.next(this.toutous);
  }

  updateTask(taskId:number, taskName:any,dogName:any): void {
    const index = this.toutous.findIndex((x) => x.id === taskId);
    const id = index;
    if(index > -1){
      this.toutous.push({
        id,taskName, dogName
      });
      this.toutous$.next(this.toutous);
    }
  }

  deleteTask(taskId: number): void {
    const index = this.toutous.findIndex((x) => x.id === taskId);
    if(index > -1){
      this.toutous.splice(index, 1);
      this.toutous$.next(this.toutous);
    }
  }
}
