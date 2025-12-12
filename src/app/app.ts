import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";
import { Task, DUMMY_TASKS } from './task.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUser = signal(this.users[0]);
  tasks = signal<Task[]>(DUMMY_TASKS);

  // Convert to computed signal
  selectedUserTasks = computed(() => 
    this.tasks().filter(t => t.userId === this.selectedUser().id)
  );

  onSelectUser(id: string): void {
    const user = this.users.find(u => u.id === id);
    if (user) {
      this.selectedUser.set(user);
    }
  }

  onAddTask(taskData: { title: string; summary: string; dueDate: string }): void {
    const newTask: Task = {
      id: 't' + (this.tasks().length + 1),
      userId: this.selectedUser().id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.tasks.update(tasks => [...tasks, newTask]);
  }

  onCompleteTask(taskId: string): void {
    this.tasks.update(tasks => tasks.filter(t => t.id !== taskId));
  }
}