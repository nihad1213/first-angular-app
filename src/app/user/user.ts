import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(): void {

  }
}
