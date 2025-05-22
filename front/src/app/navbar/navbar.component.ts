import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  menuOpen: boolean = false;
  isDarkMode: boolean = false;
  private sub!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.sub = this.authService.isLoggedIn$.subscribe(
      (status) => (this.isLoggedIn = status)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const root = document.documentElement;
    this.isDarkMode
      ? root.classList.add('dark-mode')
      : root.classList.remove('dark-mode');
  }

  logout() {
    this.authService.logout();
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }
}
