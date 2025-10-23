import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.scss']
})
export class AdminAccountComponent {
  admin = {
    name: 'Mohamed Alaraby',
    email: 'mohamed.alaraby@courses.com',
    role: 'System Administrator',
    photo: 'https://i.imgur.com/DPVM1Uu.png'
  };

  stats = [
    { label: 'Total Users', value: '2,350', icon: '👥' },
    { label: 'Courses Managed', value: '124', icon: '📘' },
    { label: 'Feedbacks Reviewed', value: '320', icon: '⭐' },
    { label: 'Reports Solved', value: '78', icon: '🧾' }
  ];

  activities = [
    { title: 'New Teacher Approved', description: 'Ahmed Youssef’s request has been approved.', time: '2 hours ago' },
    { title: 'Course Updated', description: 'Updated “Angular Mastery” materials.', time: '5 hours ago' },
    { title: 'Student Removed', description: 'Inactive user deleted from database.', time: '1 day ago' },
    { title: 'System Maintenance', description: 'Server optimization completed successfully.', time: '2 days ago' }
  ];
}
