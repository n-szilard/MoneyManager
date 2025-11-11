
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api-service';
import { MessageService } from '../../../services/message-service';
import { Category } from '../../../interfaces/category';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-categories-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories-list.html',
  styleUrl: './categories-list.css',
})
export class CategoriesList implements OnInit {
  categories: Category[] = [];

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.apiService.selectAll('categories').then(res => {
      this.categories = res.data;
    })
  }

  deleteCategory(ID: number) {
    console.log(ID);

    this.apiService.delete('categories', ID).then(res => {
      if (res.status === 200) {
        this.messageService.show('success', 'Siker', 'A kategória sikeresen törölve!');
        this.loadCategories();
      } else {
        this.messageService.show('danger', 'Hiba', 'Nem sikerült törölni a kategóriát, valószínűleg használatban van');
        console.log(res);
      }
    })
  }

  refreshList() {
    this.loadCategories();
    this.messageService.show('info', 'Frissítve', 'A kategória lista frissítve lett');
  }
}
