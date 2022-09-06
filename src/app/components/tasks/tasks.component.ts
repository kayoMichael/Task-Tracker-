import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { HttpClient} from '@angular/common/http'
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private http: HttpClient,
    private taskService: TaskService = new TaskService(http)
  ) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteIconClickHandler(task: Task){
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleBtnClickHandler(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
