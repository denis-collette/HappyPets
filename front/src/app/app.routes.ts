import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetComponent } from './Events/meet/meet.component';
import { MypetsComponent } from './Pets/mypets/mypets.component';
import { MyfriendsComponent } from './Human/myfriends/myfriends.component';
import { ProfileComponent } from './Human/profile/profile.component';
import { MessagesComponent } from './AdminSettings/messages/messages.component';
import { NotificationsComponent } from './AdminSettings/notifications/notifications.component';
import { LoginComponent } from './AdminSettings/login/login.component';
import { SignupComponent } from './AdminSettings/signup/signup.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'meet', component: MeetComponent },
    { path: 'mypets', component: MypetsComponent },
    { path: 'myfriends', component: MyfriendsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
