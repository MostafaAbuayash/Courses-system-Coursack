import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
export interface courses{
  id: number;
  title: string;
  description: string;
  image: string;
  price?: number;
}
@Component({
  selector: 'app-available-courses',
standalone:true,
  imports: [CommonModule, RouterLink],
  templateUrl: './available-courses.html',
  styleUrl: './available-courses.css',
})

export class AvailableCourses {
courses: courses[] = [
  { id: 1, title: 'Introduction to Angular', description: 'Learn the basics of Angular framework.', image: 'angular.png', price: 100 },
  { id: 2, title: 'Advanced TypeScript', description: 'Deep dive into TypeScript features and best practices.', image: 'typescript.png', price: 105 },
  { id: 3, title: 'Web Development with HTML & CSS', description: 'Build responsive websites using HTML and CSS.', image: 'html.png', price: 104 },
  { id: 4, title: 'JavaScript Essentials', description: 'Master the fundamentals of JavaScript.', image: 'js.png', price: 108 },
  { id: 5, title: 'React Basics', description: 'Start building interfaces using React.', image: 'react.png', price: 104 },
  { id: 6, title: 'Node.js API Development', description: 'Build back-end services using Node.js.', image: 'node.png', price: 150},
  { id: 7, title: 'MongoDB for Beginners', description: 'Learn NoSQL with MongoDB.', image: 'mongo.png', price: 100},
  { id: 8, title: 'SQL Masterclass', description: 'Write efficient SQL queries.', image: 'sql.png' ,price: 123},
  { id: 9, title: 'Python Programming', description: 'Start coding with Python easily.', image: 'soon.jpeg',price: 124},
  { id: 10, title: 'Django Web Framework', description: 'Develop powerful apps using Django.', image: 'soon.jpeg' ,price: 129},
  { id: 11, title: 'Flutter Mobile Development', description: 'Create cross-platform mobile apps.', image: 'soon.jpeg' ,price: 126},
  { id: 12, title: 'UI/UX Principles', description: 'Learn design fundamentals.', image: 'soon.jpeg',price: 127 },
  { id: 13, title: 'Cyber Security Basics', description: 'Understand the foundations of cybersecurity.', image: 'soon.jpeg' ,price: 128},
  { id: 14, title: 'DevOps Fundamentals', description: 'Learn CI/CD, Docker, and automation.', image: 'soon.jpeg',price: 125 },
  { id: 15, title: 'Cloud Computing Intro', description: 'Understand cloud services like AWS & Azure.', image: 'soon.jpeg' ,price: 124},
];

}
