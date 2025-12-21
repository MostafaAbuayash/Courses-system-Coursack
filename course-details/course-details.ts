import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Define the structure of a course (same as in available-courses)
export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-course-details',
  standalone: true, // Important for Angular 17+ standalone components
  imports: [CommonModule, RouterLink], // CommonModule for *ngIf, RouterLink for navigation
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit {
  // This will store the course we want to display
  course: Course | undefined;
  courseId: number | null = null;

  // Store all courses (same data as available-courses)
  // In a real app, you'd use a service to share this data
  private courses: Course[] = [
    { id: 1, title: 'Introduction to Angular', description: 'Learn the basics of Angular framework.', image: 'angular.png' },
    { id: 2, title: 'Advanced TypeScript', description: 'Deep dive into TypeScript features and best practices.', image: 'typescript.png' },
    { id: 3, title: 'Web Development with HTML & CSS', description: 'Build responsive websites using HTML and CSS.', image: 'html.png' },
    { id: 4, title: 'JavaScript Essentials', description: 'Master the fundamentals of JavaScript.', image: 'js.png' },
    { id: 5, title: 'React Basics', description: 'Start building interfaces using React.', image: 'react.png' },
    { id: 6, title: 'Node.js API Development', description: 'Build back-end services using Node.js.', image: 'node.png' },
    { id: 7, title: 'MongoDB for Beginners', description: 'Learn NoSQL with MongoDB.', image: 'mongo.png' },
    { id: 8, title: 'SQL Masterclass', description: 'Write efficient SQL queries.', image: 'sql.png' },
    { id: 9, title: 'Python Programming', description: 'Start coding with Python easily.', image: 'soon.jpeg' },
    { id: 10, title: 'Django Web Framework', description: 'Develop powerful apps using Django.', image: 'soon.jpeg' },
    { id: 11, title: 'Flutter Mobile Development', description: 'Create cross-platform mobile apps.', image: 'soon.jpeg' },
    { id: 12, title: 'UI/UX Principles', description: 'Learn design fundamentals.', image: 'soon.jpeg' },
    { id: 13, title: 'Cyber Security Basics', description: 'Understand the foundations of cybersecurity.', image: 'soon.jpeg' },
    { id: 14, title: 'DevOps Fundamentals', description: 'Learn CI/CD, Docker, and automation.', image: 'soon.jpeg' },
    { id: 15, title: 'Cloud Computing Intro', description: 'Understand cloud services like AWS & Azure.', image: 'soon.jpeg' },
  ];

  // Constructor: Angular injects ActivatedRoute here
  // ActivatedRoute = gives us access to URL parameters (like :id)
  constructor(
    private route: ActivatedRoute
  ) {}

  // ngOnInit is a lifecycle hook - runs automatically when component loads
  // This is where we read the course ID from the URL and find the course
  ngOnInit(): void {
    // Get the 'id' parameter from the URL
    // Example: if URL is /course/5, this gets "5"
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      // Convert the string "5" to number 5
      this.courseId = parseInt(idParam, 10);
      
      // Find the course with matching ID in our courses array
      this.course = this.courses.find(c => c.id === this.courseId);
      
      // If course doesn't exist, log an error
      if (!this.course) {
        console.error('Course not found with ID:', this.courseId);
      }
    }
  }

  // Method to handle when user clicks "Enroll Now"
  enrollCourse(): void {
    if (this.course) {
      alert(`You have enrolled in: ${this.course.title}`);
      // In a real app, you would make an API call here
    }
  }
}
