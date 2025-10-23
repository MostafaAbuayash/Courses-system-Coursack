import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UserAccount {
  id: number;
  name: string;
  email: string;
  role: 'Student' | 'Teacher';
  active: boolean;
}

@Component({
  selector: 'app-manage-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageAccountsComponent {
  // signals
  users = signal<UserAccount[]>([
    { id: 1, name: 'John Doe', email: 'john@student.com', role: 'Student', active: true },
    { id: 2, name: 'Emily Carter', email: 'emily@teacher.com', role: 'Teacher', active: true },
    { id: 3, name: 'Ahmed Khalid', email: 'ahmed@student.com', role: 'Student', active: false },
    { id: 4, name: 'Sarah Smith', email: 'sarah@teacher.com', role: 'Teacher', active: true },
  ]);

  toggleStatus(user: UserAccount): void {
    this.users.update((list) =>
      list.map((u) =>
        u.id === user.id ? { ...u, active: !u.active } : u
      )
    );
  }

  deleteUser(user: UserAccount): void {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.users.update((list) => list.filter((u) => u.id !== user.id));
    }
  }
}
