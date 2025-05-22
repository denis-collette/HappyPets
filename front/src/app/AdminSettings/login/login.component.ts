import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  isLoggedIn: boolean = false;

  updateLoginStatus() {
    if (typeof window !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('accessToken');
    }
  }

  toggleLoginState() {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('accessToken')) {
        localStorage.removeItem('accessToken');
      } else {
        localStorage.setItem('accessToken', 'mockToken');
      }
    }
    this.updateLoginStatus();
  }
}
