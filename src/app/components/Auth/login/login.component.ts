import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  popupVisible = false;

  onSubmit() {
    const errorMessage = document.getElementById('errorMessage');
    if (!this.username || !this.password) {
      if (errorMessage) {
        errorMessage.style.display = 'block';
        errorMessage.classList.add('shake');
        setTimeout(() => {
          errorMessage.classList.remove('shake');
        }, 400);
      }
    } else {
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
      this.popupVisible = true;
      console.log('Login successful');
    }
  }

  closePopup() {
    this.popupVisible = false;
  }
}
