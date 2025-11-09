import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Auth} from '../../../services/auth';
import {MenuComponent} from '../../../interfaces/MenuComponent';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  isLoggedIn = false;
  loggedUserName = '';
  isAdmin = false;

  constructor(
    private auth: Auth
  ){}

  navItems:MenuComponent[] = [];

  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe(res => {
      this.isLoggedIn = res;
      if (this.isLoggedIn){
        this.loggedUserName = this.auth.loggedUser()[0].name;
        this.isAdmin = this.auth.isAdmin();
      }
      this.setupMenu(res);
    });
  }

  setupMenu(isLoggedIn: boolean){
    this.navItems = [
      {
        name: 'Otthon',
        path: 'home',
        icon: 'bi-house'
      },

      ...(isLoggedIn) ? [
        ...(this.isAdmin) ? [
          {
            name: 'Felhasználók kezelése',
            path: 'users',
            icon: 'bi-people'
          },
          {
            name: 'Admin Statisztika',
            path: 'adminstats',
            icon: 'bi-graph-up-arrow'
          }
        ] : [],
        {
          name: 'Pénztárcák',
          path: 'wallets',
          icon: 'bi-wallet2'
        },
        {
          name: 'Kategóriák',
          path: 'categorieslist',
          icon: 'bi-tags'
        },
        {
          name: 'Statisztika',
          path: 'stats',
          icon: 'bi-graph-up-arrow'
        },
        {
          name: 'Profilom',
          path: 'profile',
          icon: 'bi-person'
        },
        {
          name: 'Kilépés',
          path: 'logout',
          icon: 'bi-box-arrow-left'
        },
      ] : [
        {
          name: 'Regisztráció',
          path: 'registration',
          icon: 'bi-person-add'
        },
        {
          name: 'Belépés',
          path: 'login',
          icon: 'bi-box-arrow-right'
        },
      ]

    ]
  }

}
