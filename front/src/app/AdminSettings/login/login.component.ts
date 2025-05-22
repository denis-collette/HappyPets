import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  toggleLoginState() {
    const isLoggedIn = !!localStorage.getItem('accessToken');
    if (isLoggedIn) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }
}
