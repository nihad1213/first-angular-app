import { Component, input, output } from '@angular/core';
import { Task as TaskModel } from '../../task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskModel>();
  complete = output<string>();

  onCompleteTask(): void {
    this.complete.emit(this.task().id);
  }
}