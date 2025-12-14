import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, FormsModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  statusOptions: string[] = [
    'pending',
    'approved',
    'rejected',
    'confirmed',
    'in review',
    'draft',
  ];
  categry: string[] = [
    'React',
    'Angular',
    'Vue',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Django',
    'Flask',
  ];
  levels: string[] = ['Beginner', 'Intermediate', 'Advanced'];
  statusSelected: any = {};
  CategorySelected: any = {};

  ReactCourse: Course[] = [
    {
      id: Date.now(),
      title: '',
      short_description: '',
      language: 'en',
      level: '',
      instructors: [],
      thumbnail_url:
        'https://pbs.twimg.com/profile_images/1217566226827759616/hM6lnfw8_400x400.jpg',
      price: 0,
      Module: [],
      lessons_count: 0,
      published_at: null,
      created_by: 'admin_1',
      created_at: '2025-10-29T12:00:00Z',
      updated_at: '2025-10-30T09:00:00Z',
      status: this.statusSelected.options,
      category: this.CategorySelected.options,
    },
  ];

  saveCourse(title: string, short_description: string, status: string) {
    this.ReactCourse[0].status = this.statusSelected.options;
    this.ReactCourse[0].category = this.CategorySelected.options;

    const existingCourses = JSON.parse(
      localStorage.getItem('ReactCourse') || '[]'
    );

    existingCourses.push(this.ReactCourse[0]);

    localStorage.setItem('ReactCourse', JSON.stringify(existingCourses));
    console.log(this.statusSelected.options);
    this.ReactCourse = [
      {
        id: Date.now(),
        title: '',
        short_description: '',
        language: 'en',
        level: '',
        instructors: [],
        thumbnail_url:
          'https://pbs.twimg.com/profile_images/1217566226827759616/hM6lnfw8_400x400.jpg',
        price: 0,
        Module: [],
        lessons_count: 0,
        published_at: null,
        created_by: 'admin_1',
        created_at: '2025-10-29T12:00:00Z',
        updated_at: '2025-10-30T09:00:00Z',
        status: this.statusSelected.options,
        category: this.CategorySelected.options,
      },
    ];
  }
  addModule(title: string) {
    const newModule: Module = {
      id: `module_${this.ReactCourse[0].Module.length + 1}`,
      title: title || 'New Module',
      lesson: [],
    };
    this.ReactCourse[0].Module.push(newModule);
  }
  addLesson(module: Module, title: string) {
    const newLesson: Lesson = {
      id: `lesson_${module.lesson.length + 1}`,
      title: title || 'New Lesson',
    };
    module.lesson.push(newLesson);
  }
  deleteModule(index: number) {
    this.ReactCourse[0].Module.splice(index, 1);
  }
  deleteLesson(moduleIndex: number, lessonIndex: number) {
    this.ReactCourse[0].Module[moduleIndex].lesson.splice(lessonIndex, 1);
  }
}
