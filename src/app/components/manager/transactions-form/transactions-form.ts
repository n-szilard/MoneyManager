import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Transaction} from '../../../interfaces/transaction';
import {Category} from '../../../interfaces/category';
import {ApiService} from '../../../services/api-service';
import {MessageService} from '../../../services/message-service';
import {Wallet} from '../../../interfaces/wallet';
import {Auth} from '../../../services/auth';

@Component({
  selector: 'app-transactions-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './transactions-form.html',
  styleUrl: './transactions-form.css',
})
export class TransactionsFormComponent implements OnInit {

  newTransaction: Transaction = {
    ID: 0,
    amount: 0,
    categoryID: 0,
    type: '', // kiadas / bevetel
    walletID: 0
  };

  allCategories: Category[] = [];

  userWallets: Wallet[] = [];

  constructor(
    private api: ApiService,
    private message: MessageService,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
    this.api.selectAll('categories').then(res => {
      this.allCategories = res.data;
    })
    this.getUserWallets()
  }

  getUserWallets() {
    let user = this.auth.loggedUser()
    this.api.selectWallets(user[0].ID).then(res => {
      this.userWallets = res.data;
    })
  }

  onSubmit() {
    this.api.postTransaction(this.newTransaction).then(res => {
      if (res.status != 200)  {
        this.message.show('danger', 'Hiba', res.message);
        return;
      }
      this.message.show('success', 'Ok', 'Tranzakció létrehozva sikeresen!');
      this.router.navigate(['/transactionslist']);
    })
  }

  clearForm() {
    this.newTransaction = {
      ID: 0,
      amount: 0,
      categoryID: 0,
      type: '',
      walletID: 0
    }
  }
}
