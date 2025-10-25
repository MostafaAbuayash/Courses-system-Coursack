import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import * as AOS from 'aos';

import { HeaderComponent } from './components/Widget/header/header.component';
import { FooterComponent } from './components/Widget/footer/footer.component';
=======
import { HeaderComponent } from "./components/Widget/header/header.component";
import { FooterComponent } from "./components/Widget/footer/footer.component";
>>>>>>> 226235ff2605fd2ef25be326218fc1aa77b1914f

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }
=======
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Courses-system-Coursack';
>>>>>>> 226235ff2605fd2ef25be326218fc1aa77b1914f
}
