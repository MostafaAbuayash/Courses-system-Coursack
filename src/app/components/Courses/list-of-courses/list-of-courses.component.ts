import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-of-courses',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './list-of-courses.component.html',
  styleUrl: './list-of-courses.component.scss',
})
export class ListOFCoursesComponent {
  courses: any[] = [];
  Cateories: string[] = [
    'All',
    'React',
    'Angular',
    'Vue',
    'Node.js',
    'Python',
    'Django',
  ];
  Status: string[] = [
    'All',
    'pending',
    'approved',
    'rejected',
    'confirmed',
    'in review',
    'draft',
  ];
  statusFilter: string = 'All';
  CategoryFilter: string = 'All';
  categoryFilter: string = 'All';
  constructor() {
    const savedData = localStorage.getItem('ReactCourse');
    this.courses = savedData ? JSON.parse(savedData) : [];
    console.log(this.courses);
  }
  deleteCourse(index: number) {
    this.courses.splice(index, 1);
    localStorage.setItem('ReactCourse', JSON.stringify(this.courses));
  }
  changeStatusFilter(Statu: any, category: any) {
    if (Statu.Status === 'All' && category.category === 'All') {
      const savedData = localStorage.getItem('ReactCourse');
      this.courses = savedData ? JSON.parse(savedData) : [];
      return;
    } else if (Statu.Status !== 'All' && category.category !== 'All') {
      const savedData = localStorage.getItem('ReactCourse');
      const allCourses = savedData ? JSON.parse(savedData) : [];
      this.courses = allCourses.filter(
        (course: any) =>
          course.category === category.category &&
          course.status === Statu.Status
      );
      return;
    } else if (Statu.Status !== 'All' && category.category === 'All') {
      const savedData = localStorage.getItem('ReactCourse');
      const allCourses = savedData ? JSON.parse(savedData) : [];
      this.courses = allCourses.filter(
        (course: any) => course.status === Statu.Status
      );
      return;
    } else if (Statu.Status === 'All' && category.category !== 'All') {
      const savedData = localStorage.getItem('ReactCourse');
      const allCourses = savedData ? JSON.parse(savedData) : [];
      this.courses = allCourses.filter(
        (course: any) => course.category === category.category
      );
      return;
    }
  }
  filterbyStatu(Statu: any) {
    if (Statu.Status === 'All') {
      const savedData = localStorage.getItem('ReactCourse');
      this.courses = savedData ? JSON.parse(savedData) : [];
      return;
    } else {
      const savedData = localStorage.getItem('ReactCourse');
      const allCourses = savedData ? JSON.parse(savedData) : [];
      this.courses = allCourses.filter(
        (course: any) => course.status === Statu.Status
      );
      return;
    }
  }
  filterbyCategory(category: any) {
    console.log(category.category);
    if (category.category === 'All') {
      const savedData = localStorage.getItem('ReactCourse');
      this.courses = savedData ? JSON.parse(savedData) : [];
      return;
    } else {
      const savedData = localStorage.getItem('ReactCourse');
      const allCourses = savedData ? JSON.parse(savedData) : [];
      this.courses = allCourses.filter(
        (course: any) => course.category === category.category
      );
      return;
    }
  }
}
