import { Component } from '@angular/core';
interface instractours {
  id: number;
  name: string;
  bio: string;
  photo_url: string;
  catagory?: string;
}
@Component({
  selector: 'app-instractours',
  standalone: true,
  imports: [],
  templateUrl: './instractours.component.html',
  styleUrl: './instractours.component.scss',
})
export class InstractoursComponent {
  constructor() {
    const existingCourses = JSON.parse(
      localStorage.getItem('ReactCourse') || '[]'
    );
    console.log(existingCourses);
  }
  instractoursList: instractours[] = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Expert in Web Development with 10 years of experience.',
      photo_url: 'https://randomuser.me/api/portraits/men/1.jpg',
      catagory: 'Web Development',
    },

    {
      id: 2,
      name: 'Mark Doe',
      bio: 'Expert in Web Development with 10 years of experience.',
      photo_url: 'https://randomuser.me/api/portraits/men/1.jpg',
      catagory: 'Data Science',
    },
    {
      id: 3,
      name: 'Danial Doe',
      bio: 'Expert in Web Development with 10 years of experience.',
      photo_url: 'https://randomuser.me/api/portraits/men/1.jpg',
      catagory: 'Graphic Design',
    },
    {
      id: 4,
      name: 'Loran Doe',
      bio: 'Expert in Web Development with 10 years of experience.',
      photo_url: 'https://randomuser.me/api/portraits/men/1.jpg',
      catagory: 'Digital Marketing',
    },
  ];
}
