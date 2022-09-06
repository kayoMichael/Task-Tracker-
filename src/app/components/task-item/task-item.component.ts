import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes;

  @Input()
  task: Task = {text: '', day: '', reminder: false};

  @Output()
  btnClick: EventEmitter<Task> = new EventEmitter();

  @Output()
  onToggle: EventEmitter<Task> = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  iconClickHandler(task: Task){
    this.btnClick.emit(task);
  }

  borderClickHandler(task: Task){
    this.onToggle.emit(task);
  }

}
