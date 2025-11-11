import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Wallet} from '../../../interfaces/wallet';
import {ApiService} from '../../../services/api-service';
import {MessageService} from '../../../services/message-service';
import {Auth} from '../../../services/auth';

@Component({
  selector: 'app-wallets-list',
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './wallets-list.html',
  styleUrl: './wallets-list.css',
})
export class WalletsListComponent implements OnInit{


  wallets: Wallet[] = [];

  constructor(
    private api: ApiService,
    private message: MessageService,
    private auth: Auth
  ) {}

  ngOnInit() {
    this.refreshList();
  }

  deleteWallet(ID: number) {
    this.api.delete('wallets', ID).then(res => {
      if (res.status !== 200) {
        this.message.show('danger', 'Hiba', 'Hiba történt a törlés során');
        return;
      }
      this.message.show('success', 'Ok' , 'Tárca törlése sikeres!');
      this.refreshList();
    })
  }

  refreshList() {
    let user = this.auth.loggedUser()

    this.api.selectWallets(user[0].ID).then(res => {
      if (res.status == 200) {
        this.wallets = res.data;
        return;
      }
    })
  }
}
