import { Component } from '@angular/core';
import { ListOFCoursesComponent } from '../list-of-courses/list-of-courses.component';
import { AssignmentComponent } from '../../assignment/assignment.component';
import { MangeCourseComponent } from '../mange-course/mange-course.component';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [ListOFCoursesComponent, MangeCourseComponent],
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
})
export class CoursesPageComponent {}
