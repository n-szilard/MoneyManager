
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api-service';
import { MessageService } from '../../../services/message-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-categories-form',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './categories-form.html',
  styleUrl: './categories-form.css',
})
export class CategoriesForm {
  categoryName: string = '';
  isSubmitting: boolean = false;

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) {}

  onSubmit() {
    this.apiService.insert('categories', {name: this.categoryName}).then(res => {
      if (res.status === 200) {
        this.messageService.show('success', 'Siker', 'A kategória sikeresen létrehozva!');
        this.clearForm();
      } else {
        this.messageService.show('danger', 'Hiba', res.message || 'Hiba történt a kategória létrehozásakor');
      }
    })

  }

  clearForm() {
    this.categoryName = '';
  }
}
