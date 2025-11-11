import { Routes } from '@angular/router';
import {Notfound} from './components/system/notfound/notfound';
import {LoginComponent} from './components/user/login/login';
import {HomeComponent} from './components/home/home';
import {RegisterComponent} from './components/user/register/register';
import {LogoutComponent} from './components/user/logout/logout';
import {CategoriesForm} from './components/manager/categories-form/categories-form';
import {CategoriesList} from './components/manager/categories-list/categories-list';
import {StatisticsComponent} from './components/manager/statistics/statistics';
import {WalletsListComponent} from './components/manager/wallets-list/wallets-list';
import {TransactionsListComponent} from './components/manager/transactions-list/transactions-list';
import {TransactionsFormComponent} from './components/manager/transactions-form/transactions-form';
import {WalletsFormComponent} from './components/manager/wallets-form/wallets-form';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent},

  { path: 'categorieslist', component: CategoriesList},
  { path: 'categoriesform', component: CategoriesForm},
  { path: 'transactionsform', component: TransactionsFormComponent},
  { path: 'transactionslist', component: TransactionsListComponent},
  { path: 'walletsform', component: WalletsFormComponent},
  { path: 'walletslist', component: WalletsListComponent},
  { path: 'statistics', component: StatisticsComponent},



  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: Notfound, pathMatch: 'full'}
];
