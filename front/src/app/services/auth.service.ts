import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

    isLoggedIn$ = this.loggedIn.asObservable();

    private hasToken(): boolean {
        return typeof window !== 'undefined' && !!localStorage.getItem('accessToken');
    }

    login() {
        if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', 'mockToken');
        this.loggedIn.next(true);
        }
    }

    logout() {
        if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        this.loggedIn.next(false);
        }
    }

    updateStatus() {
        this.loggedIn.next(this.hasToken());
    }
}
