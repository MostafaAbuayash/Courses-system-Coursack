import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { HeaderComponent } from "./components/Widget/header/header.component";
import { FooterComponent } from "./components/Widget/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 2000,
      once: false,
    });

  }
  title = 'Courses-system-Coursack';
 
}
