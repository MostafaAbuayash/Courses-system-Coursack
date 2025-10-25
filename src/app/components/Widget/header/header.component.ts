import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
<<<<<<< HEAD
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isLogin: boolean = true;
=======
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
>>>>>>> 226235ff2605fd2ef25be326218fc1aa77b1914f
}
