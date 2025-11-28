import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-of-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-of-courses.component.html',
  styleUrl: './list-of-courses.component.scss',
})
export class ListOFCoursesComponent {
  courses: any[] = [];
  constructor() {
    const savedData = localStorage.getItem('ReactCourse');
    this.courses = savedData ? JSON.parse(savedData) : [];
    console.log(this.courses);
  }
}
