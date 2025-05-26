import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '',
        loadComponent: () => import('./home/home.component')
        .then(m => m.HomeComponent) },
    { path: 'home',
        loadComponent: () => import('./home/home.component')
        .then(m => m.HomeComponent) },
    { path: 'meet',
        loadComponent: () => import('./Events/meet/meet.component')
        .then(m => m.MeetComponent) },
    { path: 'mypets',
        loadComponent: () => import('./Pets/mypets/mypets.component')
        .then(m => m.MypetsComponent) },
    { path: 'myfriends',
        loadComponent: () => import('./Human/myfriends/myfriends.component')
        .then(m => m.MyfriendsComponent) },
    { path: 'profile',
        loadComponent: () => import('./Human/profile/profile.component')
        .then(m => m.ProfileComponent) },
    { path: 'messages',
        loadComponent: () => import('./AdminSettings/messages/messages.component')
        .then(m => m.MessagesComponent) },
    { path: 'notifications',
        loadComponent: () => import('./AdminSettings/notifications/notifications.component').then(m => m.NotificationsComponent) },
    { path: 'login',
        loadComponent: () => import('./AdminSettings/login/login.component')
        .then(m => m.LoginComponent) },
    { path: 'signup',
        loadComponent: () => import('./AdminSettings/signup/signup.component')
        .then(m => m.SignupComponent) },
];
