import { Component } from '@angular/core';
import { ListOFCoursesComponent } from '../list-of-courses/list-of-courses.component';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [ListOFCoursesComponent],
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
})
export class CoursesPageComponent {}
