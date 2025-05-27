import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from './api.config';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface LoginResponse {
    access: string;
    refresh: string;
}

@Injectable({ providedIn: 'root' })
export class UserApi {
    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(API_ENDPOINTS.login, {
        username,
        password,
        });
    }

    register(data: any) {
        return this.http.post(API_ENDPOINTS.register, data);
    }
}