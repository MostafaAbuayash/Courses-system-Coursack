import { Component } from '@angular/core';
import { AssignmentComponent } from '../assignment/assignment.component';

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [AssignmentComponent],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.scss',
})
export class StudentPageComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
