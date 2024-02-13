import { Component } from '@angular/core';
import { Task } from '../../constants/tasks.interface';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule,NgIf, TasksListComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  tasks: Task[] = [];
  newTask: string = '';
  name!: string;
  completed!:string;
  constructor() { }
  ngOnInit(): void {
  }
  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name: this.newTask,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }
}
