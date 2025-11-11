import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {Wallet} from '../../../interfaces/wallet';
import {Auth} from '../../../services/auth';
import {ApiService} from '../../../services/api-service';
import {MessageService} from '../../../services/message-service';

@Component({
  selector: 'app-wallets-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './wallets-form.html',
  styleUrl: './wallets-form.css',
})
export class WalletsFormComponent implements OnInit{
  newWallet: Wallet = {
    ID: 0,
    userID: 0,
    name: '',
    balance: 0,
  }

  constructor(
    private auth: Auth,
    private api: ApiService,
    private message: MessageService,
    private router: Router
  ) {
  }

  onSubmit() {
    this.api.insert('wallets', this.newWallet).then(res => {
      if (res.status != 200)  {
        this.message.show('danger', 'Hiba', res.message || 'Sikertelen tárca létrehozás');
        return;
      }
      this.message.show('success', 'Ok', 'Tranzakció létrehozva sikeresen!');
      this.router.navigate(['/walletslist']);
    })
  }

  ngOnInit() {
    this.setUserId();
  }

  private setUserId() {
    let user = this.auth.loggedUser();
    this.newWallet.userID = user[0].ID;
  }

  clearForm() {
    this.newWallet = {
      ID: 0,
      userID: 0,
      name: '',
      balance: 0,
    }
    this.setUserId();
  }
}
