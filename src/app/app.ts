import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

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

  onSelectUser(id: string): void {
    const user = this.users.find(u => u.id === id);
    if (user) {
      this.selectedUser.set(user);
    }
  }
}