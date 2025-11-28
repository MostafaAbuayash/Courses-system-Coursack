import { Component } from '@angular/core';
import { ContentComponent } from '../list-of-courses/content/content.component';
import { UsersComponent } from '../list-of-courses/users/users.component';
import { InstractoursComponent } from '../list-of-courses/instractours/instractours.component';
import { PricingComponent } from '../list-of-courses/pricing/pricing.component';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    ContentComponent,
    UsersComponent,
    InstractoursComponent,
    PricingComponent,
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss',
})
export class AddCourseComponent {
  content: Number = 1;
  users: Number = 0;
  instractors: Number = 0;
  pricing: Number = 0;
}
