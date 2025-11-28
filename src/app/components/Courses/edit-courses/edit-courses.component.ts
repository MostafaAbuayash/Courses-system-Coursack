import { Component } from '@angular/core';
import { UsersComponent } from '../list-of-courses/users/users.component';
import { InstractoursComponent } from '../list-of-courses/instractours/instractours.component';
import { PricingComponent } from '../list-of-courses/pricing/pricing.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
interface Lesson {
  id: string;
  title: string;
}
interface Module {
  id: string;
  title: string;
  lesson: Lesson[];
}
interface Course {
  id: number;
  title: string;
  short_description: string;
  language: string;
  level: string;
  instructors: any[];
  thumbnail_url: string;
  price: number;
  Module: Module[];
  created_at: string;
  updated_at: string;
  lessons_count: number;
  published_at: string | null;
  created_by: string;
  status: string;
  category: string;
}
@Component({
  selector: 'app-edit-courses',
  standalone: true,
  imports: [
    UsersComponent,
    InstractoursComponent,
    PricingComponent,
    FormsModule,
  ],
  templateUrl: './edit-courses.component.html',
  styleUrl: './edit-courses.component.scss',
})
export class EditCoursesComponent {
  content: Number = 1;
  users: Number = 0;
  instractors: Number = 0;
  pricing: Number = 0;
  IdOfCourse: string | null = null;

  ReactCourse: any[] = [];

  constructor(private route: ActivatedRoute, private routing: Router) {}
  ngOnInit() {
    this.IdOfCourse = this.route.snapshot.paramMap.get('id');
    console.log(this.IdOfCourse);
    const storedCourses = JSON.parse(
      localStorage.getItem('ReactCourse') || '[]'
    );
    if (storedCourses) {
      this.ReactCourse.push(
        storedCourses.find((course: any) => course.id == this.IdOfCourse)
      );
    }
    console.log(this.ReactCourse);
  }

  EditeCourse() {
    const storedCourses = JSON.parse(
      localStorage.getItem('ReactCourse') || '[]'
    );
    if (storedCourses) {
      const courseIndex = storedCourses.findIndex(
        (course: any) => course.id == this.IdOfCourse
      );
      if (courseIndex !== -1) {
        storedCourses[courseIndex] = this.ReactCourse[0];
      }
    }
    localStorage.setItem('ReactCourse', JSON.stringify(storedCourses));
    this.routing.navigate(['/listOfCourses']);
  }
  addModule(title: string) {
    const newModule: any = {
      id: `module_${this.ReactCourse[0].Module.length + 1}`,
      title: title || 'New Module',
      lesson: [],
    };
    this.ReactCourse[0].Module.push(newModule);
  }
  addLesson(index: number, title: string) {
    const newLesson: any = {
      title: title || 'New Lesson',
    };
    this.ReactCourse[0].Module[index].lesson.push(newLesson);
  }
  deleteModule(index: number) {
    this.ReactCourse[0].Module.splice(index, 1);
  }
  deleteLesson(moduleIndex: number, lessonIndex: number) {
    this.ReactCourse[0].Module[moduleIndex].lesson.splice(lessonIndex, 1);
  }
}
