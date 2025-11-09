import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  company: string = 'MoneyManager';
  author: string = 'Nagyapáti Szilárd, Pálinkás Andor';
  year: number = new Date().getFullYear();
}
