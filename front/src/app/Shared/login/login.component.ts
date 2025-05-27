import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { LoginResponse, UserApi } from '../../api/user.api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;
  showPassword: boolean = false;

  constructor(
    private userApi: UserApi,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.errorMessage = '';
    this.isLoading = true;

    this.userApi.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('accessToken', res.access);
        localStorage.setItem('refreshToken', res.refresh);
        this.authService.updateStatus();
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login error:', err);
        if (err.status === 401) {
          this.errorMessage = 'Invalid username or password.';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}