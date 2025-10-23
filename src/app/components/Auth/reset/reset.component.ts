import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  popupVisible = false;
  email: string = '';

  showPopup(event: Event) {
    event.preventDefault();

    if (!this.email) {
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
