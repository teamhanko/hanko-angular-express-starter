import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page';

import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [authGuard]
  },
];
