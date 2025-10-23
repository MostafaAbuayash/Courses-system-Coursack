import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email: string = '';
  isSubscribed: boolean = false;

  subscribe() {
    this.isSubscribed = true;
    setTimeout(() => {
      this.isSubscribed = false;
      this.email = '';
    }, 2000);
  }
}
