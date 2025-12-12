import { Component, input, output } from '@angular/core';
import { Task as TaskComponent } from '../tasks/task/task';
import { Task } from '../task.model';
import { NewTask } from '../new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  name = input.required<string>();
  tasks = input.required<Task[]>();
  addTask = output<{ title: string; summary: string; dueDate: string }>();
  completeTask = output<string>();
  isAddingTask = false;

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCancelAddTask(): void {
    this.isAddingTask = false;
  }

  onAddTask(taskData: { title: string; summary: string; dueDate: string }): void {
    this.addTask.emit(taskData);
    this.isAddingTask = false;
  }

  onCompleteTask(taskId: string): void {
    this.completeTask.emit(taskId);
  }
}