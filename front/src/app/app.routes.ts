import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';
import { publiconlyGuard } from './Guards/publiconly.guard';

export const routes: Routes = [
    { path: '',
        loadComponent: () => import('./Shared/home/home.component')
        .then(m => m.HomeComponent)
    },
    { path: 'home',
        loadComponent: () => import('./Shared/home/home.component')
        .then(m => m.HomeComponent)
    },
    { path: 'meet',
        loadComponent: () => import('./Events/meet/meet.component')
        .then(m => m.MeetComponent),
        canActivate: [authGuard]
    },
    { path: 'mypets',
        loadComponent: () => import('./Pets/mypets/mypets.component')
        .then(m => m.MypetsComponent),
        canActivate: [authGuard]
    },
    { path: 'myfriends',
        loadComponent: () => import('./Human/myfriends/myfriends.component')
        .then(m => m.MyfriendsComponent),
        canActivate: [authGuard]
    },
    { path: 'profile',
        loadComponent: () => import('./Human/profile/profile.component')
        .then(m => m.ProfileComponent),
        canActivate: [authGuard]
    },
    { path: 'messages',
        loadComponent: () => import('./UserSettings/messages/messages.component')
        .then(m => m.MessagesComponent),
        canActivate: [authGuard]
    },
    { path: 'notifications',
        loadComponent: () => import('./UserSettings/notifications/notifications.component')
        .then(m => m.NotificationsComponent),
        canActivate: [authGuard]
    },
    { path: 'login',
        loadComponent: () => import('./UserSettings/login/login.component')
        .then(m => m.LoginComponent),
        canActivate: [publiconlyGuard]
    },
    { path: 'signup',
        loadComponent: () => import('./UserSettings/signup/signup.component')
        .then(m => m.SignupComponent),
        canActivate: [publiconlyGuard]
    },
    { path: '**',
        loadComponent: () => import('./Shared/notfound/notfound.component')
        .then(m => m.NotfoundComponent)
    }
];