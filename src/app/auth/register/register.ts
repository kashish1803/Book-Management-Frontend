import { Component } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class Register {
  username = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  get passwordMismatch(): boolean {
    return !!this.password && !!this.confirmPassword && this.password !== this.confirmPassword;
  }  

  onRegister() {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.passwordMismatch) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.register(user).subscribe({
      next: () => {
        this.successMessage = 'Registration successful. You can now log in.';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.errorMessage = err.error || 'Registration failed';
      }
    });
  }
}
