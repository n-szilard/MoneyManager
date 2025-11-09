import { Routes } from '@angular/router';
import {Notfound} from './components/system/notfound/notfound';
import {LoginComponent} from './components/user/login/login';
import {HomeComponent} from './components/home/home';
import {RegisterComponent} from './components/user/register/register';
import {LogoutComponent} from './components/user/logout/logout';
import {CategoriesForm} from './components/manager/categories-form/categories-form';
import {CategoriesList} from './components/manager/categories-list/categories-list';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent},

  { path: 'categorieslist', component: CategoriesList},
  { path: 'categoriesform', component: CategoriesForm},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: Notfound, pathMatch: 'full'}
];
