import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  popupVisible = false;
  email: string = '';
  username: string = '';
  password: string = '';

  showPopup(event: Event) {
    event.preventDefault();

    if (!this.email || !this.username || !this.password) {
      const errorMessage = document.getElementById('errorMessage');
      if (errorMessage) {
        errorMessage.style.display = 'block';
        errorMessage.classList.add('shake');
        setTimeout(() => {
          errorMessage.classList.remove('shake');
        }, 400);
      }
    } else {
      const errorMessage = document.getElementById('errorMessage');
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
      this.popupVisible = true;
    }
  }

  closePopup() {
    this.popupVisible = false;
  }
}
