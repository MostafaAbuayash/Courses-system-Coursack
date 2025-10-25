import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.scss']
})
export class InformationPanelComponent {
  stats = [
    { label: 'Total Students', value: '1,230', icon: '🎓' },
    { label: 'Active Teachers', value: '58', icon: '👩‍🏫' },
    { label: 'Courses Available', value: '145', icon: '📘' },
    { label: 'Pending Enrollments', value: '32', icon: '🕓' }
  ];

  activities = [
    { title: 'New Course Added', description: '“Advanced JavaScript” course published by Mr. Karim.', time: '2 hours ago' },
    { title: 'Student Enrollment', description: 'Sara Ahmed enrolled in “Python for Beginners”.', time: '5 hours ago' },
    { title: 'Account Updated', description: 'Teacher profile updated by Admin.', time: '1 day ago' },
    { title: 'New Feedback', description: 'Student left a 5-star review on “React Basics”.', time: '2 days ago' }
  ];
}
