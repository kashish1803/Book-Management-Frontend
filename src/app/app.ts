import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'book-management';
  constructor(public router: Router) {}

  shouldShowLayout(): boolean {
    // Hide navbar/footer on login and register pages
    return !['/login', '/register'].includes(this.router.url);
  }
}
