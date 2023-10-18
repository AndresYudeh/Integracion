import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-mankar-angular';

  
  generateNavigationMenu(): string {
    return `
      <nav class="nav">
        <i class="uil uil-bars navOpenBtn"></i>
        <a href="/principal" class="logo">APPWEB MANKAR</a>
        <ul class="nav-links">
          <i class="uil uil-times navCloseBtn"></i>
          <li><a href="/principal">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    `;
  }
}
