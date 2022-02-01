import { Component, Input, OnInit } from '@angular/core';
import { ToutouListService } from '../toutou-list.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  taskName!:string;
  dogName!:string;

  constructor(private toutouListService:ToutouListService) { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.toutouListService.addTask(this.taskName, this.dogName);
  }

}
