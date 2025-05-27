import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap, catchError, map } from 'rxjs';
import { UserApi, LoginResponse } from '../api/user.api';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

    isLoggedIn$ = this.loggedIn.asObservable();

    constructor(private UserApi: UserApi) {}

    public hasToken(): boolean {
        return typeof window !== 'undefined' && !!localStorage.getItem('accessToken');
    }

    login(username: string, password: string): Observable<boolean> {
        return this.UserApi.login(username, password).pipe(
            tap((res: LoginResponse) => {
                localStorage.setItem('accessToken', res.access);
                localStorage.setItem('refreshToken', res.refresh);
                this.loggedIn.next(true);
            }),
            map(() => true),
            catchError(() => of(false))
        );
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
