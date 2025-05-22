import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  menuOpen: boolean = false;
  isDarkMode: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateLoginStatus();
  }

  updateLoginStatus() {
    if (typeof window !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('accessToken');
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const root = document.documentElement;
    if (this.isDarkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
    }
    this.updateLoginStatus();
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }

}
