import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Transaction} from '../../../interfaces/transaction';
import {ApiService} from '../../../services/api-service';
import {MessageService} from '../../../services/message-service';
import {Wallet} from '../../../interfaces/wallet';
import {Auth} from '../../../services/auth';

@Component({
  selector: 'app-transactions-list',
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './transactions-list.html',
  styleUrl: './transactions-list.css',
})
export class TransactionsListComponent implements OnInit {

  transactions: Transaction[] = [];


  constructor(
    private api: ApiService,
    private message: MessageService,
    private auth: Auth
  ) {}

  ngOnInit() {
    this.refreshList()
  }

  deleteTransaction(ID: number) {
    this.api.delete('transactions', ID).then(res => {
      if (res.status !== 200) {
        this.message.show('danger', 'Hiba', 'Hiba történt a törlés során');
        return;
      }
      this.message.show('success', 'Ok' , 'Tranzakció törlése sikeres!');
      this.refreshList();
    })
  }

  refreshList() {
    let user = this.auth.loggedUser()
    this.api.getUserTransactions(user[0].ID).then(res => {
      this.transactions = res.data;
    })
  }


}
