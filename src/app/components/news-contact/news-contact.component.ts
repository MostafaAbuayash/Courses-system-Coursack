import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-contact.component.html',
  styleUrls: ['./news-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsContactComponent {
  fullName = signal('');
  email = signal('');
  subject = signal('');
  message = signal('');
  selectedRole = signal<'student' | 'teacher'>('student');
  popupVisible = signal(false);
  popupMessage = signal('');

  // ✅ input handlers
  onFullNameInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.fullName.set(value);
  }

  onEmailInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.email.set(value);
  }

  onSubjectInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.subject.set(value);
  }

  onMessageInput(event: Event) {
    const value = (event.target as HTMLTextAreaElement)?.value || '';
    this.message.set(value);
  }

  isFormValid = computed(() => {
    return (
      this.fullName().trim().length > 0 &&
      this.email().includes('@') &&
      this.subject().trim().length > 0 &&
      this.message().trim().length >= 10
    );
  });

  selectRole(role: 'student' | 'teacher'): void {
    this.selectedRole.set(role);
  }

  submitForm(): void {
    if (!this.isFormValid()) {
      this.popupMessage.set('Please complete all required fields correctly.');
      this.popupVisible.set(true);
      return;
    }

    const roleText = this.selectedRole() === 'teacher' ? 'Teacher' : 'Student';

    setTimeout(() => {
      this.popupMessage.set(
        `Your message has been received as a ${roleText}. We'll get back to you soon!`
      );
      this.popupVisible.set(true);

      this.fullName.set('');
      this.email.set('');
      this.subject.set('');
      this.message.set('');
    }, 600);
  }

  closePopup(): void {
    this.popupVisible.set(false);
  }
}
