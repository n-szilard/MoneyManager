import { Injectable } from '@angular/core';
import axios from 'axios';
import { ApiResponse } from '../interfaces/apiResponse';
import {Wallet} from '../interfaces/wallet';
import {Transaction} from '../interfaces/transaction';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  SERVER = 'http://localhost:3300';
  constructor() {}

  async registration(table: string, data: any) {
    try {
      const response = await axios.post(`${this.SERVER}/${table}/registration`, data);
      return {
        status: 200,
        message: "A regisztráció sikeres!",
        data: response.data
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: error.response.data.error
      }
    }
  }

  async login(table: string, data: any) {
    try {
      const response = await axios.post(`${this.SERVER}/${table}/login`, data);
      return {
        status: 200,
        message: "A belépés sikeres!",
        data: response.data
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: error.response.data.error
      }
    }
  }

  // GET all wallets from user
  async selectWallets(userId: number): Promise<ApiResponse> {
    try {
      const response = await axios.get(`${this.SERVER}/wallets/user/${userId}`);
      return {
        status: 200,
        message: 'Sikeres lekérdezés',
        data: response.data
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: "Internal Server Error"
      }
    }
  }

  // GET all transaction from userID
  async getUserTransactions(userID: number) {
    try {
      const response = await axios.get(`${this.SERVER}/transactions/user/${userID}`);
      return {
        status: 200,
        message: 'Sikeres lekérdezés',
        data: response.data
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: "Internal Server Error"
      }
    }
  }

  // POST new transaction
  async postTransaction(transaction: Transaction) {
    try {
      const response = await axios.post(`${this.SERVER}/transactions/`, {
        walletID: transaction.walletID,
        amount: transaction.amount,
        categoryID: transaction.categoryID,
        type: transaction.type
      });
      return {
        status: 200,
        message: 'Rekord felveve',
        data: response.data
      }
    } catch (error: any) {
      return {
        status: 500,
        message: "Internal Server Error"
      }
    }
  }

  // GET all records from table
  async selectAll(table: string): Promise<ApiResponse> {
    try {
      const response = await axios.get(`${this.SERVER}/${table}`);
      return {
        status: 200,
        data: response.data
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: "Internal Server Error"
      }
    }
  }

  // Get one record from table by id
  async selectOne(table: string, id: number): Promise<ApiResponse> {
    try {
      const response = await axios.get(`${this.SERVER}/${table}/${id}`);
      return {
        status: 200,
        data: response.data
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: "Internal Server Error"
      }
    }
  }

  // POST new record to table
  async insert(table: string, data: any): Promise<ApiResponse> {
    try {
      const response = await axios.post(`${this.SERVER}/${table}`, data);
      return {
        status: 200,
        message: "Rekord felveve",
        data: response.data
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: "Internal Server Error"
      }
    }
  }

  // PATCH update record in table
  async update(table: string, id: number, data: any): Promise<ApiResponse> {
    try {
      const response = await axios.patch(`${this.SERVER}/${table}/${id}`, data);
      return {
        status: 200,
        message: "Rekord modositva",
        data: response.data
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: "Internal Server Error"
      }
    }
  }

  // DELETE ONE record from table by id
  async delete(table: string, id: number): Promise<ApiResponse> {
    try {
      const response = await axios.delete(`${this.SERVER}/${table}/${id}`);
      return {
        status: 200,
        message: "A rekord sikeresen törölve"
      }
    }
    catch (error: any) {
      return {
        status: 500,
        message: "Internal Server Error"
      }
    }
  }

}
