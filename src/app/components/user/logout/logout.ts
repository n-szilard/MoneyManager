import {Component, OnInit} from '@angular/core';
import {Auth} from '../../../services/auth';
import {Router} from '@angular/router';
import {MessageService} from '../../../services/message-service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class LogoutComponent implements OnInit {

  constructor(
    private auth: Auth,
    private router: Router,
    private message: MessageService
  ) {
  }

  ngOnInit() {
    this.auth.logout();
    this.message.show('success', 'Ok', 'Sikeres kijelentkezés')
    this.router.navigate(['/login']);
  }
}
