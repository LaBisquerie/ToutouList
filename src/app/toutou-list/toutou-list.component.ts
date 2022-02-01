import { Component, Input, OnInit } from '@angular/core';
import { ToutouListService } from '../toutou-list.service';

@Component({
  selector: 'app-toutou-list',
  templateUrl: './toutou-list.component.html',
  styleUrls: ['./toutou-list.component.scss']
})
export class ToutouListComponent implements OnInit {
  @Input() taskName!: string;
  @Input() dogName!: string;
  @Input() taskId!: number;

  constructor(private toutouListService:ToutouListService) {
  }

  ngOnInit(): void {
  }

  updateTask(): void {
    this.toutouListService.updateTask(this.taskId, this.taskName, this.dogName);
  }

  deleteTask(): void {
    this.toutouListService.deleteTask(this.taskId);
  }

  toggleCheckbox(event:any): void {
    var completed = document.getElementById('completed');
    var taskTitle = document.getElementById('task-name');
    if(event.target.checked){
      completed!.style.visibility = 'visible';
      taskTitle!.style.textDecoration = 'line-through';
    } else {
      completed!.style.visibility = 'hidden';
      taskTitle!.style.textDecoration = 'none';
    }
  }
}
