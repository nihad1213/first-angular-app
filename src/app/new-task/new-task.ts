import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  add = output<{ title: string; summary: string; dueDate: string }>();
  cancel = output<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onSubmit(): void {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    });
  }

  onCancel(): void {
    this.cancel.emit();
  }
}